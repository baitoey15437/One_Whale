import { useState } from "react";
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
import ModalData from "@/components/modals/modal";

function Register() {
  const [modalShow, setModalShow] = useState(false);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const users_id = urlParams.get('users_id');


  const [show, setShow] = useState(false);
  const [message, setMessage] = useState();
  const [status, setStatus] = useState();
  const [action, setAction] = useState();

  const [totals, setTotals] = useState({
    total_sales_1: '',
    total_sales_2: '',
    total_sales_3: ''
  });

  const [exports, setExports] = useState({
    export_value_1: '',
    export_value_2: '',
    export_value_3: ''
  });


  const [bankname , setBankname] = useState('');
  const [bank_number , setBanknumber] = useState('');
  const [account_name , setAccountname] = useState('');

console.log(totals)


  const handleShow = () => setShow(true);

  const handleSubmit = event => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
    "users_id": users_id,
    "total_sales_1": totals.total_sales_1,
    "total_sales_2": totals.total_sales_2,
    "total_sales_3": totals.total_sales_3,
    "export_value_1": exports.export_value_1,
    "export_value_2": exports.export_value_2,
    "export_value_3": exports.export_value_3,
    "bankname": bankname,
    "bank_number": bank_number,
    "account_name": account_name
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch("http://localhost:3001/api/create_account/financial", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result)
          if(result.err){
            setMessage(result.err);
            setStatus(1);
          }else{
            setMessage('บันทึกข้อมูลสำเร็จ');
            setStatus(0);
            setAction(`/register/supplier4?users_id=${users_id}`)
          }
          handleShow()
        })
        .catch((error) => console.error(error));
      }

    // หาปีปัจจุบัน
  const currentYear = new Date().getFullYear() - 3;

  // สร้างลูปสำหรับฟิลด์ของปี
  const years = Array.from({ length: 3 }, (_, index) => currentYear + index);

  const handleTotalSalesChange = (e, year) => {
    const { name, value } = e.target;
    setTotals(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleExportsChange = (e, year) => {
    const { name, value } = e.target;
    setExports(prevState => ({
      ...prevState,
      [name]: value
    }));
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
                              <Nav.Link className="nav-link active">3</Nav.Link>
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
                <h4 className="title-3">ส่วนที่ 3 : ข้อมูลทางการเงิน</h4>
                  <form onSubmit={handleSubmit} className="ltn__form-box contact-form-box-3 text-form">
                  <div className="row">
                    <Row>
                      <h5>มูลค่าประจำปีของยอดขายรวมในช่วง 3 ปีที่ผ่านมา</h5>
                      <div className="col-md-6">
                      {years.map((year, index) => (
                      <div key={index}>
                        <label>{year}</label>
                        <input
                          type="text"
                          name={`total_sales_${index + 1}`}
                          value={totals[`total_sales_${index + 1}`]}
                          onChange={(e) => handleTotalSalesChange(e, year)}
                        />
                      </div>
                    ))}
                    </div>
                      </Row>
                      <Row>
                      <h5>มูลค่าการส่งออกประจำปีในช่วง 3 ปีที่ผ่านมา</h5>
                        <div className="col-md-6">
                        {years.map((year, index) => (
                        <div key={index}>
                          <label>{year}</label>
                          <input
                            type="text"
                            name={`export_value_${index + 1}`}
                            value={totals[`export_value_${index + 1}`]}
                            onChange={(e) => handleExportsChange(e, year)}
                          />
                        </div>
                    ))}
                        </div>
                      </Row>
                      <Row>
                          <div className="col-md-12">
                            <label>ชื่อธนาคาร </label>
                            <input type="text" name="bankname" onChange={(e) => setBankname(e.target.value)}/>
                            <label>เลขที่บัญชีธนาคาร </label>
                            <input type="text" name="bank_number" onChange={(e) => setBanknumber(e.target.value)}/>
                            <label>ชื่อบัญชี </label>
                            <input type="text" name="account_name" onChange={(e) => setAccountname(e.target.value)}/>
                          </div>
                        </Row>
                        </div>   
              
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
                          &nbsp; &nbsp; ถัดไป  &nbsp; &nbsp;
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
