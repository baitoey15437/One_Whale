import { Tab,Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { FaCartArrowDown, FaRegUser, FaSearch, FaTimes,FaBell,FaArrowRight,
  FaArrowLeft,
  FaPlay,
  FaRegEnvelopeOpen,
  FaPhoneAlt,  } from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";

const Profiles = ({data}) => {


  const user = data.profile[0];
  const address = data.address;
  const supplier = data.sup[0];

  return (
    <div className="ltn__myaccount-tab-content-inner">
    {/* <!-- comment-area --> */}
    <div className="ltn__comment-area mb-50">
      <div className="ltn-author-introducing clearfix">
        <div className="author-img">
          <img
            src="img/blog/author.jpg"
            alt="Author Image"
          />
        </div>
        <div className="author-info">
          <h6>{user.license_id == "1"?  "Customer Account" : "Supplier Account"}</h6>
          <h2>{user.firstname}&nbsp;&nbsp;{user.lastname}</h2>
          <div className="footer-address">
            <ul>
              <li>
                <div className="footer-address-icon">
                  <i className="icon-call"></i>
                </div>
                <div className="footer-address-info">
                  <p>
                      {user.tel_contact}
                  </p>
                </div>
              </li>
              <li>
                <div className="footer-address-icon">
                  <i className="icon-mail"></i>
                </div>
                <div className="footer-address-info">
                  <p>
                      {user.email}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
{user.license_id == "2"? 
    <div className="ltn__faq-area mb-100">
      <div className="container">
        <Row>
          <Col xs={12} lg={12}>
            <div className="ltn__faq-inner ltn__faq-inner-2">
              <Accordion defaultActiveKey="2">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>ข้อมูลทั่วไปและรายละเอียดบริษัท</Accordion.Header>
                  <Accordion.Body>
                    <div className="ltn-author-introducing clearfix">
                      <div className="ltn__myaccount-tab-content-inner">
                        <div className="row">
                          <div className="col-md-12">
                            <h6>ชื่อบริษัท</h6>
                            <h5>{user.company_name}</h5>
                          </div>
                          <div className="col-md-12">
                            <h6>ที่อยู่</h6>
                            <h5>{address[0].address} ตำบล{address[0].district} อำเภอ{address[0].amphure} จังหวัด{address[0].province} {address[0].zip_code}</h5>
                          </div>
                          <div className="col-md-6">
                            <h6>อีเมล</h6>
                            <h5>{supplier.email}</h5>
                          </div>
                          <div className="col-md-6">
                            <h6>เบอร์โทร</h6>
                            <h5>{supplier.phone}</h5>
                          </div>
                          <div className="col-md-6">
                            <h6>Fax</h6>
                            <h5>{supplier.fax}</h5>
                          </div>
                          <div className="col-md-6">
                            <h6>เว็บไซต์</h6>
                            <h5>{supplier.website}</h5>
                          </div>
                          <div className="col-md-12">
                            <h6>Parent Company</h6>
                            <h5>{supplier.parent_company}</h5>
                          </div>
                          <div className="col-md-12">
                            <h6>บริษัทสาขา บริษัทร่วม และ/หรือตัวแทนในต่างประเทศ</h6>
                            <h5>{supplier.associate_company}</h5>
                          </div>
                          <div className="col-md-6">
                            <h6>ประเภทธุรกิจ</h6>
                            <h5>{supplier.business_type}</h5>
                          </div>
                          <div className="col-md-6">
                            <h6>ลักษณะการประกอบธุรกิจ</h6>
                            <h5>{supplier.nature_of_business}</h5>
                          </div>
                          <div className="col-md-6">
                            <h6>ปีที่ก่อตั้ง</h6>
                            <h5>{supplier.year_founded}</h5>
                          </div>
                          <div className="col-md-6">
                            <h6>จำนวนพนักงานประจำ</h6>
                            <h5>{supplier.number_employees}</h5>
                          </div>
                          <div className="col-md-6">
                            <h6>เลขที่ใบอนุญาต/รัฐที่จดทะเบียน</h6>
                            <h5>{supplier.license_number}</h5>
                          </div>
                          <div className="col-md-6">
                            <h6>หมายเลขภาษีมูลค่าเพิ่ม</h6>
                            <h5>{supplier.vat_number}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    ข้อมูลทางการเงิน
                  </Accordion.Header>
                  <Accordion.Body>
                  <div className="ltn-author-introducing clearfix">
                      <div className="ltn__myaccount-tab-content-inner">
                        <div className="row">
                          <div className="col-md-12">
                            <h6>มูลค่าประจำปีของยอดขายรวมในช่วง 3 ปีที่ผ่านมา</h6>  
                          </div>
                          <div className="col-md-3">
                            <h6>ปี 2021</h6>
                            <h5>{supplier.total_sales_1} บาท</h5>
                          </div>
                          <div className="col-md-3">
                            <h6>ปี 2022</h6>
                            <h5>{supplier.total_sales_2} บาท</h5>
                          </div>
                          <div className="col-md-3">
                            <h6>ปี 2023</h6>
                            <h5>{supplier.total_sales_3} บาท</h5>
                          </div>
                          <div className="col-md-12">
                            <h6>มูลค่าการส่งออกประจำปีในช่วง 3 ปีที่ผ่านมา</h6>  
                          </div>
                          <div className="col-md-3">
                            <h6>ปี 2021</h6>
                            <h5>{supplier.export_value_1} บาท</h5>
                          </div>
                          <div className="col-md-3">
                            <h6>ปี 2022</h6>
                            <h5>{supplier.export_value_2} บาท</h5>
                          </div>
                          <div className="col-md-3">
                            <h6>ปี 2023</h6>
                            <h5>{supplier.export_value_3} บาท</h5>
                          </div>
                          
                          <div className="col-md-6">
                            <h6>ชื่อธนาคาร</h6>
                            <h5>{supplier.bankname}</h5>
                          </div>
                          <div className="col-md-6">
                            <h6>เลขที่บัญชีธนาคาร</h6>
                            <h5>{supplier.bank_number}</h5>
                          </div>
                          <div className="col-md-6">
                            <h6>ชื่อบัญชี</h6>
                            <h5>{supplier.account_name}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </div>
    </div>
    : ""} 
  </div>
  );
};

export default Profiles;



