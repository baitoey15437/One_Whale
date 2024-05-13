import { LayoutOne } from "@/layouts";
import { useState, useEffect } from "react";
import { Container, Row, Col, Nav, Tab,Form } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import Accordion from "react-bootstrap/Accordion";
import {
  FaHome,
  FaUserAlt,
  FaRegEnvelopeOpen,
  FaMapMarkerAlt,
  FaList,
  FaHeart,
  FaMapMarked,
  FaDollarSign,
  FaSignOutAlt,
  FaPlay,
  FaSearch,
  FaLock,
  FaEnvelope,
  FaArrowDown,
  FaPencilAlt,
  FaPhoneAlt,
  FaTrashAlt,
  FaStar,
  FaRegStarHalf,
  FaRegStar,
  FaGlobe,
  FaBook,
  FaTable,
  FaServicestack,
} from "react-icons/fa";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { IoDocumentTextSharp,IoChatboxSharp } from "react-icons/io5";
import Search from "@/components/search";

function MyAccount() {
  const [query, setQuery] = useState("");
  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb
          title="My Account"
          sectionPace=""
          currentSlug="My Account"
        />

        {/* <!-- LOGIN AREA START --> */}
        <div className="liton__wishlist-area pb-70">
          <Container>
            <Row>
              <Col xs={12}>
                {/* <!-- PRODUCT TAB AREA START --> */}
                <div className="ltn__product-tab-area">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="ltn_tab_1_1"
                  >
                    <Row>
                      <Col xs={12} lg={4}>
                        <div className="ltn__tab-menu-list mb-50">
                          <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_1">
                                Dashboard <MdDashboard />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_2">
                                Profiles <FaUserAlt />
                              </Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_3">
                                Assets <FaServicestack />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_4">
                                Book <FaBook />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_5">
                                Document <IoDocumentTextSharp />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_6">
                               Contact <IoChatboxSharp />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_7">
                                Schedule <FaTable />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_8">
                                Change Password <FaLock />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link href="/login">
                                Logout <FaSignOutAlt />
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </div>
                      </Col>
                      <Col xs={12} lg={8}>
                        <Tab.Content>
                          <Tab.Pane eventKey="ltn_tab_1_1">
                            <div className="ltn__myaccount-tab-content-inner">
                              <p>
                                Hello <strong>UserName</strong> (not
                                <strong>UserName</strong>?
                                <small>
                                  <Link href="/login">Log out</Link>
                                </small>
                                )
                              </p>
                              <p>
                                From your account dashboard you can view your
                                <span>recent orders</span>, manage your
                                <span>shipping and billing addresses</span>, and
                                <span>
                                  edit your password and account details
                                </span>
                                .
                              </p>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_2">
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
                                    <h6>Supplier Account</h6>
                                    <h2>Rosalina D. William</h2>
                                    <div className="footer-address">
                                      <ul>
                                        <li>
                                          <div className="footer-address-icon">
                                            <i className="icon-placeholder"></i>
                                          </div>
                                          <div className="footer-address-info">
                                            <p>
                                              Brooklyn, New York, United States
                                            </p>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="footer-address-icon">
                                            <i className="icon-call"></i>
                                          </div>
                                          <div className="footer-address-info">
                                            <p>
                                              <Link href="tel:+0123-456789">
                                                +0123-456789
                                              </Link>
                                            </p>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="footer-address-icon">
                                            <i className="icon-mail"></i>
                                          </div>
                                          <div className="footer-address-info">
                                            <p>
                                              <Link href="mailto:example@example.com">
                                                example@example.com
                                              </Link>
                                            </p>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="ltn__faq-area mb-100">
                          <div className="ltn__faq-inner ltn__faq-inner-2">
                            <Accordion defaultActiveKey="2">
                              <Accordion.Item eventKey="1">
                                <Accordion.Header>ข้อมูลทั่วไปและรายละเอียดบริษัท</Accordion.Header>
                                <Accordion.Body>
                                  <div className="ltn__myaccount-tab-content-inner">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <h6>ชื่อบริษัท</h6>
                                        <h5>xxxxxxxxxxxxxxxxxxxxxxxxxxx</h5>
                                      </div>
                                      <div className="col-md-6">
                                        <h6>เบอร์โทร</h6>
                                        <h5>0123456789</h5>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-12">
                                        <h6>ที่อยู่</h6>
                                        <h5>xxxxx xxxxxxx xxxxxx xxxxxx xxxxx 10000</h5>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <h6>Email</h6>
                                        <h5>example123@email.com</h5>
                                      </div>
                                      <div className="col-md-6">
                                        <h6>เบอร์โทร</h6>
                                        <h5>0123456789</h5>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <h6>Fax</h6>
                                        <h5>123456789</h5>
                                      </div>
                                      <div className="col-md-6">
                                        <h6>เว็บไซต์</h6>
                                        <h5>www.example.com</h5>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <h6>ชื่อผู้ติดต่อ</h6>
                                        <h5>xxxxxxxx xxxxxxx</h5>
                                      </div>
                                      <div className="col-md-6">
                                        <h6>ตำแหน่งผู้ติดต่อ</h6>
                                        <h5>xxxxxxxx</h5>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-12">
                                        <h6>Parent Company</h6>
                                        <h5>xxxxxxxxxxxx</h5>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-12">
                                        <h6>บริษัทสาขา บริษัทร่วม และ/หรือตัวแทนในต่างประเทศ</h6>
                                        <h5>xxxxxxxxxxxx</h5>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <h6>ประเภทธุรกิจ</h6>
                                        <h5>xxxxxxxx xxxxxxx</h5>
                                      </div>
                                      <div className="col-md-6">
                                        <h6>ลักษณะการประกอบธุรกิจ</h6>
                                        <h5>xxxxxxxx</h5>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <h6>ปีที่ก่อตั้ง</h6>
                                        <h5>2024</h5>
                                      </div>
                                      <div className="col-md-6">
                                        <h6>จำนวนพนักงานประจำ</h6>
                                        <h5>1,000</h5>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-12">
                                        <h6>เลขที่ใบอนุญาต/รัฐที่จดทะเบียน</h6>
                                        <h5>xxxxxxxxxxxx</h5>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-12">
                                        <h6>หมายเลขภาษีมูลค่าเพิ่ม/หมายเลขประจำตัวผู้เสียภาษี</h6>
                                        <h5>xxxxxxxxxxxx</h5>
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
                                  <div className="ltn__myaccount-tab-content-inner">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <h6>มูลค่าประจำปีของยอดขายรวมในช่วง 3 ปีที่ผ่านมา</h6>
                                    </div>
                                  </div>
                                    <div className="row">
                                      <div className="col-md-4">
                                        <h6>ปี 2021</h6>
                                        <h5>x.xx ล้านบาท</h5>
                                      </div>
                                      <div className="col-md-4">
                                        <h6>ปี 2022</h6>
                                        <h5>x.xx ล้านบาท</h5>
                                      </div>
                                      <div className="col-md-4">
                                        <h6>ปี 2023</h6>
                                        <h5>x.xx ล้านบาท</h5>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-12">
                                        <h6>มูลค่าการส่งออกประจำปีในช่วง 3 ปีที่ผ่านมา</h6>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-4">
                                        <h6>ปี 2021</h6>
                                        <h5>x.xx ล้านบาท</h5>
                                      </div>
                                      <div className="col-md-4">
                                        <h6>ปี 2022</h6>
                                        <h5>x.xx ล้านบาท</h5>
                                      </div>
                                      <div className="col-md-4">
                                        <h6>ปี 2023</h6>
                                        <h5>x.xx ล้านบาท</h5>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-12">
                                        <h6>ชื่อธนาคาร</h6>
                                        <h5>xxxxxxxxxxxx</h5>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-12">
                                        <h6>เลขที่บัญชีธนาคาร</h6>
                                        <h5>xxxxxxxxxxxx</h5>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-12">
                                        <h6>ชื่อบัญชี</h6>
                                        <h5>xxxxxxxxxxxx</h5>
                                      </div>
                                    </div>
                                    
                                </div>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </div>
                        </div>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_3">
                          <h3>My Asset</h3>
                          <div className="ltn__shop-options">
                            <Row>
                              <div className="col-md-5">
                                <div className="short-by text-center">
                                  <Form.Select
                                    className="rad-0"
                                    onChange={(e) =>

                                      getFilterSortParams("filterSort", e.target.value)
                                    }
                                  >
                                    <option value="default">ประเภท Asset</option>
                                    <option value="priceHighToLow">WareHouse</option>
                                    <option value="priceLowToHigh">Vehicle</option>
                                    <option value="priceHighToLow">Shipping</option>
                                  </Form.Select>
                                </div>
                              </div>
                              <div className="col-md-7">
                                <Search spaceBottom="mb-30" setQuery={setQuery} />
                              </div>  
                            </Row>
                            <div className="btn-wrapper">
                              <Link
                                href="/add-asset/add1"
                                className="theme-btn-1 btn btn-effect-1"
                              >
                                เพิ่ม Asset
                              </Link>
                            </div>
                          </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_4">
                            <div className="ltn__myaccount-tab-content-inner">
                              <p>
                                The following addresses will be used on the
                                checkout page by default.
                              </p>
                              <div className="ltn__form-box">
                                <form action="#">
                                  <div className="row mb-50">
                                    <Col xs={12} md={6}>
                                      <label>First name:</label>
                                      <input type="text" name="ltn__name" />
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <label>Last name:</label>
                                      <input type="text" name="ltn__lastname" />
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <label>Display Name:</label>
                                      <input
                                        type="text"
                                        name="ltn__lastname"
                                        placeholder="Ethan"
                                      />
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <label>Display Email:</label>
                                      <input
                                        type="email"
                                        name="ltn__lastname"
                                        placeholder="example@example.com"
                                      />
                                    </Col>
                                  </div>
                                  <fieldset>
                                    <legend>Password change</legend>
                                    <Row>
                                      <div className="col-md-12">
                                        <label>
                                          Current password (leave blank to leave
                                          unchanged):
                                        </label>
                                        <input
                                          type="password"
                                          name="ltn__name"
                                        />
                                        <label>
                                          New password (leave blank to leave
                                          unchanged):
                                        </label>
                                        <input
                                          type="password"
                                          name="ltn__lastname"
                                        />
                                        <label>Confirm new password:</label>
                                        <input
                                          type="password"
                                          name="ltn__lastname"
                                        />
                                      </div>
                                    </Row>
                                  </fieldset>
                                  <div className="btn-wrapper">
                                    <button
                                      type="submit"
                                      className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_5">
                          <h3>Book</h3>
                          <div className="row row-top-bottom">
                          <Col xs={12} md={4}>
                            <Form.Select
                              className="rad-0"
                              onChange={(e) =>

                                getFilterSortParams("filterSort", e.target.value)
                              }
                            >
                              <option value="default">ประเภท Asset</option>
                              <option value="priceHighToLow">WareHouse</option>
                              <option value="priceLowToHigh">Vehicle</option>
                              <option value="priceHighToLow">Shipping</option>
                            </Form.Select>
                            </Col>
                            <Col xs={12} md={4}>
                            <Form.Select
                              className="rad-0"
                              onChange={(e) =>

                                getFilterSortParams("filterSort", e.target.value)
                              }
                            >
                              <option value="default">ชื่อ Asset</option>
                              <option value="priceHighToLow">WareHouse</option>
                              <option value="priceLowToHigh">Vehicle</option>
                              <option value="priceHighToLow">Shipping</option>
                            </Form.Select>
                            </Col>
                            <Col xs={12} md={4}>
                            <Form.Select
                              className="rad-0"
                              onChange={(e) =>

                                getFilterSortParams("filterSort", e.target.value)
                              }
                            >
                              <option value="default">สถานะ</option>
                              <option value="priceHighToLow">WareHouse</option>
                              <option value="priceLowToHigh">Vehicle</option>
                              <option value="priceHighToLow">Shipping</option>
                            </Form.Select>
                            </Col>
                            </div>
                            <div className="ltn__myaccount-tab-content-inner">
                              <div className="ltn__my-properties-table table-responsive">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th scope="col">รหัสการจอง</th>
                                      <th scope="col">รายการ</th>
                                      <th scope="col">วันที่เริ่มจอง</th>
                                      <th scope="col">วันที่สิ้นสุด</th>
                                      <th scope="col">สถานะ</th>
                                      
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                         W000001
                                        </Link>  
                                      </td>
                                      <td>Warehouse Name</td>
                                      <td>Feb 22, 2022</td>
                                      <td>Feb 22, 2022</td>
                                      <td>อนุมัติ</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                         W000002
                                        </Link>  
                                      </td>
                                      <td>Warehouse Name</td>
                                      <td>Feb 22, 2022</td>
                                      <td>Feb 22, 2022</td>
                                      <td>อนุมัติ</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                         W000003
                                        </Link>  
                                      </td>
                                      <td>Warehouse Name</td>
                                      <td>Feb 22, 2022</td>
                                      <td>Feb 22, 2022</td>
                                      <td>อนุมัติ</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="ltn__pagination-area text-center">
                                <div className="ltn__pagination">
                                  <ul>
                                    <li>
                                      <Link href="#">
                                        <i className="fas fa-angle-double-left"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="#">1</Link>
                                    </li>
                                    <li className="active">
                                      <Link href="#">2</Link>
                                    </li>
                                    <li>
                                      <Link href="#">3</Link>
                                    </li>
                                    <li>
                                      <Link href="#">...</Link>
                                    </li>
                                    <li>
                                      <Link href="#">10</Link>
                                    </li>
                                    <li>
                                      <Link href="#">
                                        <i className="fas fa-angle-double-right"></i>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_6">
                          <h3>My Document</h3>
                            <div className="ltn__myaccount-tab-content-inner">
                              <div className="ltn__my-properties-table table-responsive">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th scope="col">เอกสาร</th>
                                      <th scope="col"></th>
                                      <th scope="col">วันที่เพิ่มเอกสาร</th>
                                      <th scope="col">จัดการ</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                         Document-000001
                                        </Link>  
                                      </td>
                                      <td></td>
                                      <td>Feb 22, 2022</td>
                                      <td><Link href="#">
                                          <span>
                                            <FaTrashAlt />
                                          </span>
                                        </Link></td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                        Document-000002
                                        </Link>  
                                      </td>
                                      <td></td>
                                      <td>Feb 22, 2022</td>
                                      <td><Link href="#">
                                          <span>
                                            <FaTrashAlt />
                                          </span>
                                        </Link></td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                        Document-000003
                                        </Link>  
                                      </td>
                                      <td></td>
                                      <td>Feb 22, 2022</td>
                                      <td><Link href="#">
                                          <span>
                                            <FaTrashAlt />
                                          </span>
                                        </Link></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="ltn__pagination-area text-center">
                                <div className="ltn__pagination">
                                  <ul>
                                    <li>
                                      <Link href="#">
                                        <i className="fas fa-angle-double-left"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="#">1</Link>
                                    </li>
                                    <li className="active">
                                      <Link href="#">2</Link>
                                    </li>
                                    <li>
                                      <Link href="#">3</Link>
                                    </li>
                                    <li>
                                      <Link href="#">...</Link>
                                    </li>
                                    <li>
                                      <Link href="#">10</Link>
                                    </li>
                                    <li>
                                      <Link href="#">
                                        <i className="fas fa-angle-double-right"></i>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_7">
                          <h3>Contact</h3>
                          <Row>
                <div className="col-md-5">
                      <div className="short-by text-center">
                        
                      </div>
                      </div>
                      <div className="col-md-12">
                        <Search spaceBottom="mb-30" setQuery={setQuery} />
                        </div>
                    
                  </Row>
                  <div className="btn-wrapper">
                        <button className="theme-btn-1 btn btn-effect-1" onClick={() => dispatch(addToCart(productData))}>
                          เพิ่มหัวข้อ
                        </button>
                        </div>

                            <div className="ltn__myaccount-tab-content-inner">
                              <div className="ltn__my-properties-table table-responsive">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th scope="col">หัวข้อ</th>
                                      <th scope="col"></th>
                                      <th scope="col">วันที่เพิ่ม</th>
                                      <th scope="col">สถานะ</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                         การเปลี่ยนที่อยู่จัดส่งเอกสาร
                                        </Link>  
                                      </td>
                                      <td></td>
                                      <td>Feb 22, 2022</td>
                                      <td></td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                        สอบถามข้อมูลการจัดส่ง
                                        </Link>  
                                      </td>
                                      <td></td>
                                      <td>Feb 22, 2022</td>
                                      <td></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="ltn__pagination-area text-center">
                                <div className="ltn__pagination">
                                  <ul>
                                    <li>
                                      <Link href="#">
                                        <i className="fas fa-angle-double-left"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="#">1</Link>
                                    </li>
                                    <li className="active">
                                      <Link href="#">2</Link>
                                    </li>
                                    <li>
                                      <Link href="#">3</Link>
                                    </li>
                                    <li>
                                      <Link href="#">...</Link>
                                    </li>
                                    <li>
                                      <Link href="#">10</Link>
                                    </li>
                                    <li>
                                      <Link href="#">
                                        <i className="fas fa-angle-double-right"></i>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_8">
                            <div className="ltn__myaccount-tab-content-inner">
                              <Row>
                                <div className="col-lg-12">
                                  <div className="ltn__checkout-inner">
                                    <div className="ltn__checkout-single-content ltn__returning-customer-wrap">
                                      <h5>
                                        Returning customer?
                                        <a
                                          className="ltn__secondary-color"
                                          href="#ltn__returning-customer-login"
                                          data-toggle="collapse"
                                        >
                                          Click here to login
                                        </a>
                                      </h5>
                                      <div
                                        id="ltn__returning-customer-login"
                                        className="collapse ltn__checkout-single-content-info"
                                      >
                                        <div className="ltn_coupon-code-form ltn__form-box">
                                          <p>Please login your accont.</p>
                                          <form action="#">
                                            <Row>
                                              <Col xs={12} md={6}>
                                                <div className="input-item input-item-name ltn__custom-icon">
                                                  <input
                                                    type="text"
                                                    name="ltn__name"
                                                    placeholder="Enter your name"
                                                  />
                                                </div>
                                              </Col>
                                              <Col xs={12} md={6}>
                                                <div className="input-item input-item-email ltn__custom-icon">
                                                  <input
                                                    type="email"
                                                    name="ltn__email"
                                                    placeholder="Enter email address"
                                                  />
                                                </div>
                                              </Col>
                                            </Row>
                                            <button className="btn theme-btn-1 btn-effect-1 text-uppercase">
                                              Login
                                            </button>
                                            <label className="input-info-save mb-0">
                                              <input
                                                type="checkbox"
                                                name="agree"
                                              />
                                              Remember me
                                            </label>
                                            <p className="mt-30">
                                              <Link href="/register">
                                                Lost your password?
                                              </Link>
                                            </p>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="ltn__checkout-single-content ltn__coupon-code-wrap">
                                      <h5>
                                        Have a coupon?
                                        <a
                                          className="ltn__secondary-color"
                                          href="#ltn__coupon-code"
                                          data-toggle="collapse"
                                        >
                                          Click here to enter your code
                                        </a>
                                      </h5>
                                      <div
                                        id="ltn__coupon-code"
                                        className="collapse ltn__checkout-single-content-info"
                                      >
                                        <div className="ltn__coupon-code-form">
                                          <p>
                                            If you have a coupon code, please
                                            apply it below.
                                          </p>
                                          <form action="#">
                                            <input
                                              type="text"
                                              name="coupon-code"
                                              placeholder="Coupon code"
                                            />
                                            <button className="btn theme-btn-2 btn-effect-2 text-uppercase">
                                              Apply Coupon
                                            </button>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="ltn__checkout-single-content mt-50">
                                      <h4 className="title-2">
                                        Billing Details
                                      </h4>
                                      <div className="ltn__checkout-single-content-info">
                                        <form action="#">
                                          <h6>Personal Information</h6>
                                          <Row>
                                            <Col xs={12} md={6}>
                                              <div className="input-item input-item-name ltn__custom-icon">
                                                <input
                                                  type="text"
                                                  name="ltn__name"
                                                  placeholder="First name"
                                                />
                                                <span className="inline-icon">
                                                  <FaUserAlt />
                                                </span>
                                              </div>
                                            </Col>
                                            <Col xs={12} md={6}>
                                              <div className="input-item input-item-name ltn__custom-icon">
                                                <input
                                                  type="text"
                                                  name="ltn__lastname"
                                                  placeholder="Last name"
                                                />
                                                <span className="inline-icon">
                                                  <FaUserAlt />
                                                </span>
                                              </div>
                                            </Col>
                                            <Col xs={12} md={6}>
                                              <div className="input-item input-item-email ltn__custom-icon">
                                                <input
                                                  type="email"
                                                  name="ltn__email"
                                                  placeholder="email address"
                                                />
                                                <span className="inline-icon">
                                                  <FaEnvelope />
                                                </span>
                                              </div>
                                            </Col>
                                            <Col xs={12} md={6}>
                                              <div className="input-item input-item-phone ltn__custom-icon">
                                                <input
                                                  type="text"
                                                  name="ltn__phone"
                                                  placeholder="phone number"
                                                />
                                                <span className="inline-icon">
                                                  <FaPhoneAlt />
                                                </span>
                                              </div>
                                            </Col>
                                            <Col xs={12} md={6}>
                                              <div className="input-item input-item-website ltn__custom-icon">
                                                <input
                                                  type="text"
                                                  name="ltn__company"
                                                  placeholder="Company name (optional)"
                                                />
                                                <span className="inline-icon">
                                                  <FaGlobe />
                                                </span>
                                              </div>
                                            </Col>
                                            <Col xs={12} md={6}>
                                              <div className="input-item input-item-website ltn__custom-icon">
                                                <input
                                                  type="text"
                                                  name="ltn__phone"
                                                  placeholder="Company address (optional)"
                                                />
                                                <span className="inline-icon">
                                                  <FaGlobe />
                                                </span>
                                              </div>
                                            </Col>
                                          </Row>
                                          <Row>
                                            <Col xs={12} md={6} lg={4}>
                                              <h6>Country</h6>
                                              <div className="input-item ltn__custom-icon">
                                                <select className="nice-select">
                                                  <option>
                                                    Select Country
                                                  </option>
                                                  <option>Australia</option>
                                                  <option>Canada</option>
                                                  <option>China</option>
                                                  <option>Morocco</option>
                                                  <option>Saudi Arabia</option>
                                                  <option>
                                                    United Kingdom (UK)
                                                  </option>
                                                  <option>
                                                    United States (US)
                                                  </option>
                                                </select>
                                                <span className="inline-icon">
                                                  <FaArrowDown />
                                                </span>
                                              </div>
                                            </Col>
                                            <Col xs={12}>
                                              <h6>Address</h6>
                                              <Row>
                                                <Col xs={12} md={6}>
                                                  <div className="input-item">
                                                    <input
                                                      type="text"
                                                      placeholder="House number and street name"
                                                    />
                                                  </div>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                  <div className="input-item">
                                                    <input
                                                      type="text"
                                                      placeholder="Apartment, suite, unit etc. (optional)"
                                                    />
                                                  </div>
                                                </Col>
                                              </Row>
                                            </Col>
                                            <Col xs={12} md={6} lg={4}>
                                              <h6>Town / City</h6>
                                              <div className="input-item">
                                                <input
                                                  type="text"
                                                  placeholder="City"
                                                />
                                              </div>
                                            </Col>
                                            <Col xs={12} md={6} lg={4}>
                                              <h6>State </h6>
                                              <div className="input-item">
                                                <input
                                                  type="text"
                                                  placeholder="State"
                                                />
                                              </div>
                                            </Col>
                                            <Col xs={12} md={6} lg={4}>
                                              <h6>Zip</h6>
                                              <div className="input-item">
                                                <input
                                                  type="text"
                                                  placeholder="Zip"
                                                />
                                              </div>
                                            </Col>
                                          </Row>
                                          <p>
                                            <label className="input-info-save mb-0">
                                              <input
                                                type="checkbox"
                                                name="agree"
                                              />
                                              Create an account?
                                            </label>
                                          </p>
                                          <h6>Order Notes (optional)</h6>
                                          <div className="input-item input-item-textarea ltn__custom-icon">
                                            <textarea
                                              name="ltn__message"
                                              placeholder="Notes about your order, e.g. special notes for delivery."
                                            ></textarea>
                                            <span className="inline-icon">
                                              <FaPencilAlt />
                                            </span>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Col xs={12} lg={6}>
                                  <div className="ltn__checkout-payment-method mt-50">
                                    <h4 className="title-2">Payment Method</h4>
                                    <Accordion defaultActiveKey="2">
                                      <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                          Check payments
                                        </Accordion.Header>
                                        <Accordion.Body>
                                          <p>
                                            Please send a check to Store Name,
                                            Store Street, Store Town, Store
                                            State / County, Store Postcode.
                                          </p>
                                        </Accordion.Body>
                                      </Accordion.Item>

                                      <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                          Cash on delivery
                                        </Accordion.Header>
                                        <Accordion.Body>
                                          <p>Pay with cash upon delivery.</p>
                                        </Accordion.Body>
                                      </Accordion.Item>
                                      <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                          PayPal
                                          <img
                                            src="/img/icons/payment-3.png"
                                            alt="#"
                                          />
                                        </Accordion.Header>
                                        <Accordion.Body>
                                          <p>
                                            Pay via PayPal; you can pay with
                                            your credit card if you don’t have a
                                            PayPal account.
                                          </p>
                                        </Accordion.Body>
                                      </Accordion.Item>
                                    </Accordion>
                                    <div className="ltn__payment-note mt-30 mb-30">
                                      <p>
                                        Your personal data will be used to
                                        process your order, support your
                                        experience throughout this website, and
                                        for other purposes described in our
                                        privacy policy.
                                      </p>
                                    </div>
                                    <button
                                      className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                      type="submit"
                                    >
                                      Place order
                                    </button>
                                  </div>
                                </Col>
                                <Col xs={12} lg={6}>
                                  <div className="shoping-cart-total mt-50">
                                    <h4 className="title-2">Cart Totals</h4>
                                    <table className="table">
                                      <tbody>
                                        <tr>
                                          <td>
                                            3 Rooms Manhattan
                                            <strong>× 2</strong>
                                          </td>
                                          <td>$298.00</td>
                                        </tr>
                                        <tr>
                                          <td>
                                            OE Replica Wheels
                                            <strong>× 2</strong>
                                          </td>
                                          <td>$170.00</td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Wheel Bearing Retainer
                                            <strong>× 2</strong>
                                          </td>
                                          <td>$150.00</td>
                                        </tr>
                                        <tr>
                                          <td>Shipping and Handing</td>
                                          <td>$15.00</td>
                                        </tr>
                                        <tr>
                                          <td>Vat</td>
                                          <td>$00.00</td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <strong>Order Total</strong>
                                          </td>
                                          <td>
                                            <strong>$633.00</strong>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_9">
                            <div className="ltn__myaccount-tab-content-inner">
                              <div className="account-login-inner">
                                <form
                                  action="#"
                                  className="ltn__form-box contact-form-box"
                                >
                                  <h5 className="mb-30">Change Password</h5>
                                  <input
                                    type="password"
                                    name="password"
                                    placeholder="Current Password*"
                                  />
                                  <input
                                    type="password"
                                    name="password"
                                    placeholder="New Password*"
                                  />
                                  <input
                                    type="password"
                                    name="password"
                                    placeholder="Confirm New Password*"
                                  />
                                  <div className="btn-wrapper mt-0">
                                    <button
                                      className="theme-btn-1 btn btn-block"
                                      type="submit"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </div>
                {/* <!-- PRODUCT TAB AREA END --> */}
              </Col>
            </Row>
          </Container>
        </div>
      </LayoutOne>
    </>
  );
}

export default MyAccount;
