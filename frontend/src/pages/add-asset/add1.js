import React,{ useState,useEffect,useRef } from "react";
import { Layout } from "@/layouts";
import { Container, Row, Col,Tab,Nav,Form } from "react-bootstrap";
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
import ModalData from "@/components/modals/modal";
import { Modal, Button } from 'react-bootstrap';
import { number } from "prop-types";
 


function Register() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState();
  const [status, setStatus] = useState();
  const [action, setAction] = useState();
  const handleShow = () => setShow(true);

  const [geographies, setgeographies] = useState([]);
  const [asset, setAsset] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [amphures , setAmphures] = useState('');
  const [districts , setDistricts] = useState('');

  useEffect(() => {
    const fetchData = async () =>{
        try {
          const asset = await fetch("http://localhost:3001/asset");
          const asset_data = await asset.json();
          setAsset(asset_data);
          const geographies = await fetch("http://localhost:3001/api/geographies");
          const geographies_data = await geographies.json();
          setgeographies(geographies_data);
          // const provinces = await fetch("http://localhost:3001/api/provinces");
          // const provinces_data = await provinces.json();
          // setProvinces(provinces_data);
        } catch (error) {
            console.error("Error Fetching",error);
        }
    }
    fetchData();
  }, []);

  const handleTypeChange = (event) => {
    setAssetID(event.target.value);
  };

  const handleGeographiesChange = async (event) => {
    const geography_id = event.target.value;
    setGeographie(geography_id);
    setProvince('');
    setProvinces('');
    setAmphure('');
    setAmphures('');
    setDistrict('');
    setDistricts('');
    try {
      const response = await fetch(`http://localhost:3001/api/provinces/${geography_id}`);
      if (!response.ok) {
        throw new Error('เกิดข้อผิดพลาดในการเรียก API');
      }
      const data = await response.json();
      setProvinces(data);
    } catch (error) {
        console.error("Error Fetching",error);
    }
  };


  const handleProvinceChange = async (event) => {
    const province_id = event.target.value;
    setProvince(province_id);
    setDistrict('');
    setDistricts('');
    try {
      const response = await fetch(`http://localhost:3001/api/amphures/${province_id}`);
      if (!response.ok) {
        throw new Error('เกิดข้อผิดพลาดในการเรียก API');
      }
      const data = await response.json();
      setAmphures(data);
    } catch (error) {
        console.error("Error Fetching",error);
    }
  };

  const handleAmphureChange = async (event) => {
    const amphure_id = event.target.value;
    setAmphure(event.target.value);
    try {
      const response = await fetch(`http://localhost:3001/api/districts/${amphure_id}`);
      if (!response.ok) {
        throw new Error('เกิดข้อผิดพลาดในการเรียก API');
      }
      const data = await response.json();
      setDistricts(data);
    } catch (error) {
        console.error("Error Fetching",error);
    }
  };

  const [asset_id, setAssetID] = useState('1');
  const [asset_name , setAssetname] = useState('');
  const [address , setAddress] = useState('');
  const [district , setDistrict] = useState('');
  const [amphure , setAmphure] = useState('');
  const [geography_id, setGeographie] = useState('');
  const [province , setProvince] = useState('');
  const [zipcode , setZipcode] = useState('');
  const [latitude , setLatitude] = useState('');
  const [longitude , setLongitude] = useState('');
  const [description , setDescription] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
    "asset_id": asset_id, 
    "asset_name": asset_name,
    "address": address,
    "district": district,
    "amphure": amphure,
    "province": province,
    "geography_id": geography_id,
    "zipcode": zipcode,
    "latitude": latitude,
    "longitude": longitude,
    "description": description
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch("http://localhost:3001/api/create_asset/info", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result)
          if(result.err){
            setMessage(result.err);
            setStatus(1);
          }else{
            setMessage('บันทึกข้อมูลสำเร็จ');
            setStatus(0);
            setAction(`/add-asset/add2?asset_id=${result.assetId}&&asset_type=${asset_id}`)
          }
          handleShow()
        })
        .catch((error) => console.error(error));
      }

  const [showMapModal, setShowMapModal] = useState(false);
  const [position, setPosition] = useState(null);

  const handleMapClick = (e) => {
    setPosition(e.latlng);
  };

  const handleSaveLocation = () => {
    // ทำอะไรก็ตามที่คุณต้องการเมื่อผู้ใช้บันทึกตำแหน่ง
    // เช่น เก็บละติจูดลองจิจูดลงใน state หรือทำการส่งไปยังเซิร์ฟเวอร์
    setShowMapModal(false);
  };

  const [isZipCode, setIsZipCode] = useState(false);

  const checkZipCode = (e) => {
    const value = new Number(e.target.value);
    console.log(value);
      if (!isNaN(value)) {
        setZipcode(value);
        setZipcode(true);
      } else {
        setZipcode(false);
      }
  }
    

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
                              <Nav.Link>2</Nav.Link>
                              <Nav.Link>3</Nav.Link>
                          </Nav>
                        </div>
                                    
                      </div>
                    </Tab.Container>
                </Col>
            </Row>
            <Row>
              <Col xs={12} lg={{ span: 6, offset: 3 }}>
                <div className="account-login-inner">
                <h4 className="title-3">ส่วนที่ 1 : ข้อมูลทั่วไป</h4>
                  <form onSubmit={handleSubmit} className="ltn__form-box contact-form-box-3 text-form">
                      <Row>
                        <div className="col-md-12">
                          <label>
                            ประเภท Asset
                          </label>
                          <Form.Select 
                            value={asset_id} 
                            onChange={handleTypeChange}
                            className="form-control nice-select rad-0">
                          {asset.map((item, key) => {
                            return (
                              <option value={item.asset_id}>{item.asset_type}</option>
                            );
                          })}
                          </Form.Select>
                          <label>
                          ชื่อ Asset
                          </label>
                          <input
                            type="text"
                            name="asset_name"
                            onChange={(e) => setAssetname(e.target.value)}
                          />
                          <label>ที่อยู่ (สถานที่ตั้ง Asset)</label>
                          <input
                            type="text"
                            name="address"
                            placeholder="เช่น บ้านเลขที่, หมู่ที่, หมู่บ้าน, ซอย, ถนน, ..."
                            onChange={(e) => setAddress(e.target.value)}
                          />

                          {/* <MapForm/>

                          <Link href="/add-asset/test" target="_blank">
                          แผนที่
                          </Link>

                          <Link
                          href="/add-asset/test"
                          className="theme-btn-1 btn btn-effect-1"
                        >
                          test
                        </Link> */}


                           {/* <Button onClick={() => setShowMapModal(true)}>เลือกแผนที่</Button> */}

                        {/* <Modal show={showMapModal} onHide={() => setShowMapModal(false)}>
                          <Modal.Header closeButton>
                            <Modal.Title>เลือกตำแหน่งบนแผนที่</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div id="map-container">
                              <MapContainer center={[13.736717, 100.523186]} zoom={10} id="map" onClick={handleMapClick}>
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                {position && <Marker position={position}><Popup>ตำแหน่งที่เลือก</Popup></Marker>}
                              </MapContainer>
                            </div>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowMapModal(false)}>ปิด</Button>
                            <Button variant="primary" onClick={handleSaveLocation}>บันทึกตำแหน่ง</Button>
                          </Modal.Footer>
                        </Modal> */}
                                      
                                  
                        </div>
                        <Col xs={12} md={6}>
                          <label>ภาค</label>
                          <div className="short-by text-center">
                            <Form.Select
                              className="rad-0-form"
                              name="geographie"
                              value={geography_id}
                              onChange={handleGeographiesChange}
                            >
                              <option value="default" selected>เลือกภาค</option>
                              {geographies.map((geographie, index) => (
                                <option value={geographie.id}>{geographie.name}</option>
                              ))}
                            </Form.Select>
                          </div>
                        </Col>
                        <Col xs={12} md={6}>
                          <label>จังหวัด</label>
                          <div className="short-by text-center">
                            <Form.Select
                              className="rad-0-form"
                              name="province"
                              value={province}
                              onChange={handleProvinceChange}
                            >
                              <option value="default" selected>เลือกจังหวัด</option>
                              {provinces && provinces.map((province, index) => (
                                <option value={province.id} data-value={province.geography_id} >{province.name_th}</option>
                              ))}
                            </Form.Select>
                          </div>
                        </Col>
                        <Col xs={12} md={6}>
                          <label>อำเภอ</label>
                          <div className="short-by text-center">
                            <Form.Select
                              className="rad-0-form"
                              name="amphure"
                              value={amphure}
                              onChange={handleAmphureChange}
                            >
                              <option value="default" selected>เลือกอำเภอ</option>
                              {amphures && amphures.map((amphure, index) => (
                                <option value={amphure.id} >{amphure.name_th}</option>
                              ))}
                            </Form.Select>
                          </div>
                        </Col>
                        <Col xs={12} md={6}>
                          <label>ตำบล</label>
                          <div className="short-by text-center">
                            <Form.Select
                              className="rad-0-form"
                              name="district"
                              value={district}
                              onChange={(e) => setDistrict(e.target.value)}
                            >
                              <option value="default" selected>เลือกตำบล</option>
                              {districts && districts.map((district, index) => (
                                <option value={district.id} >{district.name_th}</option>
                              ))}
                            </Form.Select>
                          </div>
                        </Col>
                        
                       
                        <Col xs={12} md={6}>
                          <label>รหัสไปรษณีย์</label>
                          <input
                            type="text"
                            name="zipcode"
                            onChange={(e) => checkZipCode(e)}
                          />
                          {!isZipCode && <p className="ltn__bs-red">Please enter a number type</p>}
                        </Col>
                        <Col>
                        
                        </Col>
                        <Col xs={12} md={6}>
                          <label>ละติจูด</label>
                          <input
                            type="text"
                            name="latitude"
                            onChange={(e) => setLatitude(e.target.value)}
                          />
                        </Col>
                        <Col xs={12} md={6}>
                          <label>ลองจิจูด</label>
                          <input
                            type="text"
                            name="longitude"
                            onChange={(e) => setLongitude(e.target.value)}
                          />
                        </Col>
                        <label>คำอธิบาย</label>
                        <div className="input-item input-item-textarea ltn__custom-icon">
                          <textarea
                            name="description"
                            onChange={(e) => setDescription(e.target.value)}
                          ></textarea>
                        </div>
                      </Row>
                      <div className="btn-wrapper-2">
                      <Link
                          href="/my-account"
                          className="btn theme-btn-4 btn-effect-1 text-uppercase"
                        >
                         ย้อนกลับ
                        </Link>
                        <button
                          type="submit"
                          className="btn theme-btn-2 btn-effect-1 text-uppercase"
                        >
                          ถัดไป
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
