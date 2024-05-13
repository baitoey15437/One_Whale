import { LayoutOne } from "@/layouts";
import { useState, useEffect } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import Accordion from "react-bootstrap/Accordion";
import {
  FaHome,
  FaUserAlt,
  FaMapMarkerAlt,
  FaList,
  FaHeart,
  FaMapMarked,
  FaDollarSign,
  FaSignOutAlt,
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
                                Address <FaMapMarkerAlt />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_4">
                                My Book <FaBook />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_5">
                                Payments <FaDollarSign />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_6">
                                Document <IoDocumentTextSharp />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_7">
                                Contact <IoChatboxSharp />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_8">
                                Schedule <FaTable />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_9">
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
                                    <h6>Customer Account</h6>
                                    <h2>Rosalina D. William</h2>
                                    <div className="footer-address">
                                      <ul>
                                        <li>
                                          <div className="footer-address-icon">
                                            <i className="icon-placeholder"></i>
                                          </div>
                                          <div className="footer-address-info">
                                            <p>
                                              Thailand
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
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_3">
                          <h3>Address</h3>
                          <div className="ltn-author-introducing clearfix">
                            <Container>
                                <h4 className="title-2">Billing Address</h4>
                              </Container>
                            <div className="ltn__myaccount-tab-content-inner">
                              <div className="row">
                                <div className="col-md-6">
                                  <h6>ชื่อผู้รับ</h6>
                                  <h5>Name</h5>
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
                            </div>
                          </div>
                          <div className="ltn-author-introducing clearfix">
                            <Container>
                                <h4 className="title-2">Shipping Address</h4>
                              </Container>
                            <div className="ltn__myaccount-tab-content-inner">
                              <div className="row">
                                <div className="col-md-6">
                                  <h6>ชื่อผู้รับ</h6>
                                  <h5>Name</h5>
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
                            </div>
                          </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_4">
                          <h3>My Book</h3>
                            <div className="ltn__myaccount-tab-content-inner">
                              <div className="ltn__my-properties-table table-responsive">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th scope="col">รหัสการจอง</th>
                                      <th scope="col"></th>
                                      <th scope="col">วันที่ขอเช้า</th>
                                      <th scope="col">สถานะ</th>
                                      
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <Link href="/book">
                                         W000001
                                        </Link>  
                                      </td>
                                      <td></td>
                                      <td>Feb 22, 2022</td>
                                      <td>อนุมัติ</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link href="/book">
                                         W000002
                                        </Link>  
                                      </td>
                                      <td></td>
                                      <td>Feb 22, 2022</td>
                                      <td>อนุมัติ</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link href="/book">
                                         W000003
                                        </Link>  
                                      </td>
                                      <td></td>
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

                          <Tab.Pane eventKey="ltn_tab_1_5">
                          <h3>My Billing</h3>
                            <div className="ltn__myaccount-tab-content-inner">
                              <div className="ltn__my-properties-table table-responsive">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th scope="col">บิลเลขที่</th>
                                      <th scope="col">รหัสการจอง</th>
                                      <th scope="col">วันที่อนุมัติ</th>
                                      <th scope="col">สถานะ</th>
                                      
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                         Bill-000001
                                        </Link>  
                                      </td>
                                      <td>W000001</td>
                                      <td>Feb 22, 2022</td>
                                      <td>อนุมัติ</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                        Bill-000002
                                        </Link>  
                                      </td>
                                      <td>W000002</td>
                                      <td>Feb 22, 2022</td>
                                      <td>อนุมัติ</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                        Bill-000003
                                        </Link>  
                                      </td>
                                      <td>W000003</td>
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
