import { useState,useEffect ,useCallback  } from "react";
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import { Layout } from "@/layouts";
import { Container, Row, Col,Tab,Nav } from "react-bootstrap";
import {
  FaArrowRight,
  FaArrowLeft,
  FaPlay,
  FaSearch,
  FaRegEnvelopeOpen,
  FaPhoneAlt,
} from "react-icons/fa";

import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import SuccessModal from "@/components/modals/SuccessModal";
import CallToAction from "@/components/callToAction";
import Link from "next/link";
import { useDropzone } from 'react-dropzone';
import ModalData from "@/components/modals/modal";

function Register() {

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState();
  const [status, setStatus] = useState();
  const [action, setAction] = useState();
  const handleShow = () => setShow(true);


  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const asset_id = urlParams.get('asset_id');
  const asset_type = urlParams.get('asset_type');

  const [attributes, setAttributes] = useState([]);
  const [document_type, setDocumentType] = useState([]);
  const [files, setFiles] = useState([]);
  const [headImg, setheadImg] = useState(null);
  const [selectedImg, setSelectedImg] = useState([]);

  // console.log(document_type);

  useEffect(() => {
    const fetchData = async () =>{
        try {
          const response_document_type = await fetch(`http://localhost:3001/api/document_type/${asset_type}`);
          const data_document_type = await response_document_type.json();
          setDocumentType(data_document_type[0].id);
          const response_attribute = await fetch(`http://localhost:3001/api/attribute/${data_document_type[0].id}`);
          const data_attribute = await response_attribute.json();
          setAttributes(data_attribute);
        } catch (error) {
            console.error("Error Fetching",error);
        } 
    }
    fetchData();
  }, []);

  const handleFileChange = (event) => {
    const newFile = event.target.files[0];
    newFile.attributeName = event.target.name;
    
    // เช็คว่ามีไฟล์ที่มีชื่อเดียวกับไฟล์ใหม่หรือไม่
    const existingFileIndex = files.findIndex(file => file.attributeName === newFile.attributeName);
    
    if (existingFileIndex !== -1) {
      // ถ้ามีให้ลบไฟล์เดิมออกจาก array
      const newFiles = [...files];
      newFiles.splice(existingFileIndex, 1);
      setFiles([...newFiles, newFile]);
    } else {
      setFiles([...files, newFile]);
    }
  };

  const handleSubmit = async () => {
    event.preventDefault(); 
      try {
        const formData = new FormData();
        formData.append(`asset_id`, asset_id);
        formData.append(`document_type`, document_type);
        formData.append(`headImg`, headImg);
        files.forEach((file, index) => {
          formData.append(`files`, file);
          formData.append(`attributeNames[${index}]`, file.attributeName);
        });
        selectedImg.forEach((file, index) => {
          formData.append(`img`, file);
        });


        const requestOptions = {
          method: 'POST',
          body: formData
          };

        fetch(`http://localhost:3001/api/create_asset/file`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result)
          if(result.err){
            setMessage(result.err);
            setStatus(1);
          }else{
            setMessage('ลงทะเบียนสำเร็จ');
            setStatus(0);
            setAction(`/my-account`)
          }
          handleShow()
        })
        .catch((error) => console.error(error));
      } catch (error) {
        console.error('เกิดข้อผิดพลาด:', error);
      }
  };

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    // console.log(acceptedFiles);
    setSelectedImg(prevFiles => prevFiles.concat(acceptedFiles));
  }, []);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  const handleDeleteImage = (index,event) => {
    event.preventDefault(); 
    const newFiles = [...selectedImg];
    newFiles.splice(index, 1);
    setSelectedImg(newFiles);
  };

  const handleDownloadFile = (event,file) => {
    event.preventDefault();
    console.log(file)
    if (file) {
        const url = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = url;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
};

  return (
    <>
      <Layout topbar={true}>
        <ShopBreadCrumb title="Account" sectionPace="" currentSlug="Register" />

        {/* <!-- LOGIN AREA START (Register) --> */}
        <div className="ltn__login-area pb-110">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="section-title-area text-center">
                  <h1 className="section-title">
                    Register Asset
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                    <br />
                    Sit aliquid, Non distinctio vel iste.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={6}>
                    <Tab.Container>
                      <div className="ltn__our-process-inner">
                        <div className="ltn__tab-menu text-uppercase">
                          <Nav>
                              <Nav.Link className="nav-link active">1</Nav.Link>
                              <Nav.Link className="nav-link active">2</Nav.Link>
                              <Nav.Link className="nav-link active">3</Nav.Link>
                          </Nav>
                        </div>
                                    
                      </div>
                    </Tab.Container>
                </Col>
            </Row>
            <Row>
              <Col xs={12} lg={{ span: 6, offset: 3 }}>
                <div className="account-login-inner">
                <h4 className="title-3">ส่วนที่ 3 : เอกสารและรูปภาพ</h4>
                  <form onSubmit={handleSubmit} className="ltn__form-box contact-form-box-3 text-form">
                  <Row>
                    {attributes.map((item, index) => (
                        <div>
                          <h6>{item.label}</h6>
                          <input
                            type={item.type}
                            name={item.name}
                            onChange={handleFileChange}
                            className="btn-effect-1 button-file"
                          />
                           {/* เพิ่มปุ่ม "ดาวน์โหลดไฟล์" (หากมีไฟล์ถูกเลือก) */}
                           {files[index]  && (
                                  <button onClick={(e) => handleDownloadFile(e, files[index])}>คลิกเพื่อดูไฟล์</button>
                              )}
                        </div>
                      ))}
                      <h6>รูปภาพหลัก</h6>
                        <div className="col-md-6">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setheadImg(e.target.files[0])}
                            className="btn-effect-1 button-file"
                          />
                          
                        </div>
                        <div className="show-file">
                            {headImg && (
                              <img src={URL.createObjectURL(headImg)} alt={headImg.name} />
                            )}
                        </div>
                        
                      <h6>รูปภาพอื่นๆ ที่เกี่ยวกับ</h6>
                        <div className="col-md-12">
                          <div {...getRootProps()} 
                          className="dropzone-file">
                            <input {...getInputProps()} 
                            accept="image/*"/>
                            {
                              isDragActive ?
                                <p>วางไฟล์ที่นี่ . . .</p> :
                                <p>ลากและวางไฟล์ที่นี่ หรือคลิกเพื่อเลือกไฟล์ . . .</p>
                            }
                          </div>
                        </div>
                        <div className="show-file">
                        {selectedImg.map((file, index) => (
                          <div>
                            <div className="image-overlay">
                              <button className="delete-button" onClick={() => handleDeleteImage(index, event)}>ลบ</button>
                            </div>
                            <img src={URL.createObjectURL(file)} alt={file.name}/>
                          </div>
                        ))}
                        </div>
                 
                      
                      
                    </Row>
                      <div className="btn-wrapper-2">
                        <button
                          // type="submit"
                          className="btn theme-btn-4 btn-effect-1 text-uppercase"
                        >
                         ย้อนกลับ
                          
                        </button>
                        <button
                          type="submit"
                          className="btn theme-btn-2 btn-effect-1 text-uppercase"
                        >
                          ลงทะเบียน
                        </button>
                      </div>
                  </form>
                  <div className="by-agree text-center">
                    <p>By creating an account, you agree to our:</p>
                    <p>
                      <Link href="#">
                        TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp;
                        PRIVACY POLICY
                      </Link>
                    </p>
                    <div className="go-to-btn mt-50">
                      <Link href="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- LOGIN AREA END --> */}
      </Layout>

      <ModalData 
          show={show}  
          onHide={() => setShow(false)}
          status={status}
          message={message}  
          action={action}
        />
    </>
  );
}

export default Register;
