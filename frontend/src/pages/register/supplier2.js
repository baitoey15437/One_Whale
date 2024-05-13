import { useState,useEffect  } from "react";
import { Layout } from "@/layouts";
import { Container, Row, Col,Tab,Nav,Form } from "react-bootstrap";

import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import SuccessModal from "@/components/modals/SuccessModal";
import CallToAction from "@/components/callToAction";
import Link from "next/link";
import ModalData from "@/components/modals/modal";

function Register() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const users_id = urlParams.get('users_id');

  const [fullname, setFullName] = useState([]);
  const [geographies, setgeographies] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [amphures , setAmphures] = useState('');
  const [districts , setDistricts] = useState('');

  useEffect(() => {
    const fetchData = async () =>{
        try {
          const response = await fetch(`http://localhost:3001/api/register/${users_id}`);
          const data = await response.json();
          const fullname = data.name[0].firstname +" " + data.name[0].lastname;
          setFullName(fullname);
          const geographies = await fetch("http://localhost:3001/api/geographies");
          const geographies_data = await geographies.json();
          setgeographies(geographies_data);
        } catch (error) {
            console.error("Error Fetching",error);
        }
    }
    fetchData();
  }, []);

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState();
  const [status, setStatus] = useState();
  const [action, setAction] = useState();

  const handleShow = () => setShow(true);

  const handleSubmit = event => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
    "users_id": users_id,
    "company_name": company_name,
    "address": address,
    "district": district,
    "amphure": amphure,
    "province": province,
    "zipcode": zipcode,
    "email": email,
    "phone": phone,
    "fax": fax,
    "website": website,
    "department": department,
    "parent_company": parent_company,
    "associate_company": associate_company,
    "business_type": business_type,
    "nature_of_business": nature_of_business,
    "year_founded": year_founded,
    "number_employees": number_employees,
    "license_number": license_number,
    "vat_number": vat_number
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch("http://localhost:3001/api/create_account/detail", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result)
          if(result.err){
            setMessage(result.err);
            setStatus(1);
          }else{
            setMessage('บันทึกข้อมูลสำเร็จ');
            setStatus(0);
            setAction(`/register/supplier3?users_id=${users_id}`)
          }
          handleShow()

        })
        .catch((error) => console.error(error));
      }

    const [company_name , setCompanyname] = useState('');
    const [address , setAddress] = useState('');
    const [district , setDistrict] = useState('');
    const [amphure , setAmphure] = useState('');
    const [province , setProvince] = useState('');
    const [geography_id, setGeographie] = useState('');
    const [zipcode , setZipcode] = useState('');
    const [email , setEmail] = useState('');
    const [phone , setPhone] = useState('');
    const [fax , setFax] = useState('');
    const [website , setWebsite] = useState('');
    const [department , setDepartment] = useState('');
    const [parent_company , setParentcompany] = useState('');
    const [associate_company , setAssociatecompany] = useState('');
    const [business_type , setBusinesstype] = useState('');
    const [nature_of_business , setNatureofbusiness] = useState('');
    const [year_founded , setYearfounded] = useState('');
    const [number_employees , setNumberemployee] = useState('');
    const [license_number , setLicensenumber] = useState('');
    const [vat_number , setVatnumber] = useState('');

    

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
      setProvince(event.target.value);
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
                    Register <br />
                    <div className="color-primary-emphasis">Supplier</div> Account
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
                <Col xs={4}>
                    <Tab.Container>
                      <div className="ltn__our-process-inner">
                        <div className="ltn__tab-menu text-uppercase">
                          <Nav>
                              <Nav.Link className="nav-link active">1</Nav.Link>
                              <Nav.Link className="nav-link active">2</Nav.Link>
                              <Nav.Link>3</Nav.Link>
                              <Nav.Link>4</Nav.Link>
                          </Nav>
                        </div>
                                    
                      </div>
                    </Tab.Container>
                </Col>
            </Row>
            <Row>
              <Col xs={12} lg={{ span: 6, offset: 3 }}>
                <div className="account-login-inner">
                <h4 className="title-3">ส่วนที่ 2 : ข้อมูลทั่วไปและรายละเอียดบริษัท</h4>
                  <form onSubmit={handleSubmit} className="ltn__form-box contact-form-box-3 text-form">
                      <Row>
                        <div className="col-md-12">
                          <label>ชื่อบริษัท </label>
                          <input
                            type="text"
                            name="company_name"
                            onChange={(e) => setCompanyname(e.target.value)}
                          />
                          <label>ที่อยู่บริษัท </label>
                          <input
                            type="text"
                            name="address"
                            placeholder="เช่น บ้านเลขที่, หมู่ที่, หมู่บ้าน, ซอย, ถนน, ..."
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>
                      </Row>
                      <div className="row">
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
                            onChange={(e) => setZipcode(e.target.value)}
                          />
                        </Col>
                        <Col xs={12} md={6}>
                          
                          
                        </Col>
                        <Col xs={12} md={6}>
                          <label>อีเมล</label>
                          <input
                            type="text"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Col>
                        <Col xs={12} md={6}>
                          <label>เบอร์โทร</label>
                          <input
                            type="text"
                            name="phone"
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </Col>
                        <Col xs={12} md={6}>
                          <label>Fax</label>
                          <input
                            type="text"
                            name="fax"
                            onChange={(e) => setFax(e.target.value)}
                          />
                        </Col>
                        <Col xs={12} md={6}>
                          <label>เว็บไซต์</label>
                          <input
                            type="text"
                            name="website"
                            onChange={(e) => setWebsite(e.target.value)}
                          />
                        </Col>
                      </div>
                      <Row>
                          <div className="col-md-12">
                            <label>ชื่อผู้ติดต่อ </label>
                            <input
                            type="text"
                            value={fullname}
                            readOnly
                          />
                            <label>ตำแหน่งผู้ติดต่อ </label>
                            <input
                            type="text"
                            name="department"
                            onChange={(e) => setDepartment(e.target.value)}
                          />
                            <label>Parent Company </label>
                            <input
                            type="text"
                            name="parent_company"
                            onChange={(e) => setParentcompany(e.target.value)}
                          />
                            <label>บริษัทสาขา บริษัทร่วม และ/หรือตัวแทนในต่างประเทศ </label>
                            <input
                            type="text"
                            name="associate_company"
                            onChange={(e) => setAssociatecompany(e.target.value)}
                          />
                            <label>ประเภทธุรกิจ </label>
                            <input
                            type="text"
                            name="business_type	"
                            onChange={(e) => setBusinesstype	(e.target.value)}
                          />
                            <label>ลักษณะการประกอบธุรกิจ </label>
                            <input
                            type="text"
                            name="nature_of_business"
                            onChange={(e) => setNatureofbusiness(e.target.value)}
                          />
                          </div>
                        </Row>
                      <div className="row">
                        <Col xs={12} md={6}>
                          <label>ปีที่ก่อตั้ง</label>
                          <input
                            type="text"
                            name="year_founded"
                            onChange={(e) => setYearfounded(e.target.value)}
                          />
                        </Col>
                        <Col xs={12} md={6}>
                          <label>จำนวนพนักงานประจำ</label>
                          <input
                            type="text"
                            name="number_employees"
                            onChange={(e) => setNumberemployee(e.target.value)}
                          />
                        </Col>
                      </div>
                      <Row>
                        <div className="col-md-12">
                          <label>เลขที่ใบอนุญาต/รัฐที่จดทะเบียน </label>
                          <input
                            type="text"
                            name="license_number"
                            onChange={(e) => setLicensenumber(e.target.value)}
                          />
                          <label>หมายเลขภาษีมูลค่าเพิ่ม </label>
                          <input
                            type="text"
                            name="vat_number"
                            onChange={(e) => setVatnumber(e.target.value)}
                          />
                        </div>
                      </Row>
                      <div className="btn-wrapper-2">
                        <Link
                          href="/login"
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
