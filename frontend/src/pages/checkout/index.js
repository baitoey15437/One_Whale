import { useState } from "react";
import { LayoutOne } from "@/layouts";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import { addToCart } from "@/store/slices/cart-slice";
import CallToAction from "@/components/callToAction";
import Collapse from "react-bootstrap/Collapse";
import Accordion from "react-bootstrap/Accordion";
import {
  FaArrowDown,
  FaUserAlt,
  FaEnvelope,
  FaGlobe,
  FaPencilAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import Link from "next/link";

const Wishlist = ({productData}) => {
  const [open, setOpen] = useState(false);
  const [vissible, setVissible] = useState(false);
  const dispatch = useDispatch();
  
  return (
    <>
      <LayoutOne topbar={true}>
        {/* <!-- BREADCRUMB AREA START --> */}
        <ShopBreadCrumb
          title="Checkout"
          sectionPace=""
          currentSlug="Checkout"
        />
        {/* <!-- BREADCRUMB AREA END --> */}

        {/* <!-- WISHLIST AREA START --> */}
        <div className="ltn__checkout-area mb-105">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="ltn__checkout-inner">
                <h4 className="title-2">Booking Details</h4>
                  <div className="ltn__checkout-single-content ltn__checkout-form mt-50">
                    <div className="ltn__checkout-single-content-info">
                      <form action="#">
                        <div className="row">
                          <div className="col-md-6">
                            <h6>ชื่อ Asset</h6>
                            <h4>Warehose Name</h4>
                          </div>
                          <div className="col-md-6">
                            <h6>ประเภท Asset</h6>
                            <h4>Warehose</h4>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <h6>ขนาดพื้นที่</h6>
                            <h4>2,000 ตารางวา</h4>
                          </div>
                          <div className="col-md-6">
                            <h6>ประเภทการถือครอง</h6>
                            <h4>เช่าระยะยาว</h4>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <h6>สถานที่ตั้ง Asset</h6>
                            <h4>1355 Market St, Suite 900 San Francisco, CA 94103</h4>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <h6>ชื่อบริษัท Supplier</h6>
                            <h4>Lorem ipsum dolor sit amet</h4>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                          <h6>สิ่งอำนวยความสะดวก</h6>
                          <div className="ltn__menu-widget">
                          <h4>
                            <label className="checkbox-item">ที่จอดรถ
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label><br></br>
                            <label className="checkbox-item">เครื่องปรับอากาศ
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label><br></br>
                            <label className="checkbox-item">ระบบรักษาความปลอดภัย 24 ชม.
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label><br></br>
                          </h4>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                        <h6>วันที่จอง</h6>
                        <Col xs={12} md={4}>
                          <h6>ตั้งแต่</h6>
                          <input type="text" name="ltn__name" />
                        </Col>
                        <Col xs={12} md={4}>
                          <h6>ถึง</h6>
                          <input type="text" name="ltn__lastname" />
                        </Col>
                      </div>
                        <h6>ระบุรายละเอียดเพิ่มเติม</h6>
                        <div className="input-item input-item-textarea ltn__custom-icon">
                          <textarea
                            name="ltn__message"
                          ></textarea>
                        </div>

                        <div className="btn-wrapper text-center">
                        <button className="theme-btn-1 btn btn-effect-1" onClick={() => dispatch(addToCart(productData))}>
                          เพิ่มลงในตะกร้า
                        </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- WISHLIST AREA START --> */}
      </LayoutOne>
    </>
  );
};

export default Wishlist;
