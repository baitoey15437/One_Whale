import { useState,useEffect  } from "react";
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

function Register() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const asset_id = urlParams.get('asset_id');
  const asset_type = urlParams.get('asset_type');

  const [modalShow, setModalShow] = useState(false);
  const [options, setOptions] = useState('');
  const [zones, setZones] = useState('');
  const [types, setTypes] = useState('');

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState();
  const [status, setStatus] = useState();
  const [action, setAction] = useState();
  const handleShow = () => setShow(true);

  const options_length = options.length;
  const [size, setSize] = useState('');
  const [holding, setHolding] = useState('ระยะสั้น');
  const [zone, setZone] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [min, setMin ] = useState('');
  const [max, setMax] = useState('');

  const [option, setOption] = useState([]);

  const [inputs, setInputs] = useState([]);

  const handleCheckboxAdd = (event) => {
    event.preventDefault();
    if (inputs.length === 0) {
      // เพิ่มช่อง input แรกเมื่อคลิกที่ checkbox
      setInputs(['']);
    }
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleAddInput = (event) => {
    event.preventDefault();
    setInputs([...inputs, '']);
  };

  const handleRemoveInput = (index) => {
    event.preventDefault();
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
};


  useEffect(() => {
    const fetchData = async () =>{
        try {
          const response_option = await fetch(`http://localhost:3001/api/option/${asset_type}`);
          const response_zone = await fetch(`http://localhost:3001/api/zone/`);
          const data_option = await response_option.json();
          setOptions(data_option);
          const initialOptions = data_option.map((item) => ({
            id: item.option_id.toString(),
            name: item.option_name,
            isCheck: false // หรือให้มีค่าตามที่ต้องการ
        }));
        setOption(initialOptions);
          const data_zone = await response_zone.json();
          setZones(data_zone);
        } catch (error) {
            console.error("Error Fetching",error);
        } 
    }
    fetchData();
  }, []);


  const handleZoneChange = async (event) => {
    const zone_name = event.target.value;
    setZone(zone_name);
    setTypes('');
    try {
      const response = await fetch(`http://localhost:3001/api/typezone/${zone_name}`);
      if (!response.ok) {
        throw new Error('เกิดข้อผิดพลาดในการเรียก API');
      }
      const data = await response.json();
      setTypes(data);
    } catch (error) {
        console.error("Error Fetching",error);
    }
  };
  
 

  const handleCheckboxChange = (event) => {
    const { id,name, checked } = event.target;
    const existingOptionIndex = option.findIndex(opt => opt.id === id);
    if (existingOptionIndex !== -1) {
        const updatedOptions = [...option];
        updatedOptions[existingOptionIndex].isCheck = checked;
        setOption(updatedOptions);
    } else {
        setOption([...option, { id: id, name: name,isCheck: checked }]);
    }
  };


  const handleSubmit = event => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
    "asset_id": asset_id, 
    "size": size,
    "holding": holding,
    "zone": zone,
    "type": type,
    "price": price,
    "min": min,
    "max": max,
    "option": option,
    "option_input": inputs
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch(`http://localhost:3001/api/create_asset/detail`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result)
          if(result.err){
            setMessage(result.err);
            setStatus(1);
          }else{
            setMessage('บันทึกข้อมูลสำเร็จ');
            setStatus(0);
            setAction(`/add-asset/add3?asset_id=${asset_id}&&asset_type=${asset_type}`)
          }
          handleShow()
        })
        .catch((error) => console.error(error));
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
                              <Nav.Link className="nav-link active">2</Nav.Link>
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
                <h4 className="title-3">ส่วนที่ 2 : รายละเอียดเพิ่มเติม</h4>
                  <form onSubmit={handleSubmit} className="ltn__form-box contact-form-box-3 text-form">
                      <Row>
                        <Col xs={12} md={6}>
                          <label>ขนาดพื้นที่(ตารางเมตร)</label>
                          <input 
                            type="text" 
                            name="size" 
                            onChange={(e) => setSize(e.target.value)}
                          />
                        </Col>
                        <Col xs={12} md={6}>
                          <label>การถือครอง</label>
                          <Form.Select
                          className="rad-0-sort"
                          onChange={(e) => setHolding(e.target.value)}
                        >
                          <option value="ระยะสั้น">ระยะสั้น</option>
                          <option value="ระยะยาว">ระยะยาว</option>
                        </Form.Select>
                        </Col>
                        <Col xs={12} md={6}>
                          <label>Zone</label>
                          <Form.Select 
                            value={zone} 
                            onChange={handleZoneChange}
                            className="form-control nice-select rad-0">
                          <option value="default" selected>เลือก Zone</option>
                          {zones && zones.map((item, key) => {
                            return (
                              <option value={item.zone}>{item.zone}</option>
                            );
                          })}
                          </Form.Select>
                        </Col>
                        <Col xs={12} md={6}>
                          <label>Type</label>
                          <Form.Select 
                            value={type} 
                            onChange={(e) => setType(e.target.value)}
                            className="form-control nice-select rad-0">
                          <option value="default" selected>เลือก Type</option>
                          {types && types.map((item, key) => {
                            return (
                              <option value={item.type}>{item.type}</option>
                            );
                          })}
                          </Form.Select>
                        </Col>
                        <Col xs={12} md={6}>
                          <label>ราคาจริง</label>
                          <input 
                            type="text" 
                            name="price" 
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </Col>
                        <label>ราคาที่แสดงหน้าเว็บ</label>
                        <Col xs={12} md={6}>
                          <label>min</label>
                          <input 
                            type="text" 
                            name="min" 
                            onChange={(e) => setMin(e.target.value)}
                          />
                        </Col>
                        <Col xs={12} md={6}>
                          <label>max</label>
                          <input 
                            type="text" 
                            name="max" 
                            onChange={(e) => setMax(e.target.value)}
                          />
                        </Col>
                        
                        <Col xs={12} md={12}>
                          <label>สิ่งอำนวยความสะดวก</label> <br /><br />
                          {options && options.map((item, key) => {
                            return (
                                <div key={key}>
                                    <label className="checkbox-item">{item.option_name}
                                        <input 
                                            type="checkbox" 
                                            id={item.option_id}
                                            name={item.option_name}
                                            checked={option.find(opt => opt.id == item.option_id)?.isCheck || false}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="checkmark"></span>
                                    </label><br />
                                </div>
                            );
                        })}
                          <div>
                        <label className="checkbox-item">
                          อื่นๆ
                          <input 
                            type="checkbox" 
                            name=""
                            checked={inputs.length > 0}
                            onChange={handleCheckboxAdd}
                          />
                          <span className="checkmark"></span>
                        </label>
                        {inputs.map((input, index) => (
                          <div>
                          <input
                            key={index}
                            type="text"
                            value={input}
                            placeholder="กรุณากรอกข้อมูล"
                            onChange={(e) => handleInputChange(index, e.target.value)}
                          />
                          <button onClick={() => handleRemoveInput(index)}>ลบ</button>
                          </div>
                        ))}
                        {inputs.length === 0 ? "" :<button onClick={handleAddInput}> เพิ่ม Option อื่น</button>}
                      </div>
                        </Col>
                      </Row>
                      <div className="btn-wrapper-2">
                        <button
                          type="submit"
                          className="btn theme-btn-4 btn-effect-1 text-uppercase"
                        >
                         ย้อนกลับ
                          
                        </button>
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
