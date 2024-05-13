import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import {
  addToCart,
  decreaseQuantity,
  deleteFromCart,
  deleteAllFromCart,
} from "@/store/slices/cart-slice";
import { getDiscountPrice, cartItemStock, productSlug } from "@/lib/product";
import Link from "next/link";

const Cart = () => {
  const [quantityCount] = useState(1);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  let cartTotalPrice = 0;


  return (
    <>
      <LayoutOne topbar={true}>
        {/* <!-- BREADCRUMB AREA START --> */}
        <ShopBreadCrumb title="Cart" sectionPace="" currentSlug="Cart" />
        {/* <!-- BREADCRUMB AREA END --> */}

        {/* <!-- SHOPING CART AREA START --> */}
        <div className="ltn__checkout-area mb-105">
        </div>
        <Container>
        <Row>
              <Col xs={12}>
                <div className="section-title-area text-center">
                  <h1 className="section-title">
                  Booking Details
                  </h1>
                  <p>
                    รหัสการจอง : W000001
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div className="ltn__checkout-inner">
                <h4 className="title-2">Booking Details</h4>
                  <div className="ltn__checkout-single-content ltn__checkout-form mt-50">
                    <div className="ltn__checkout-single-content-info">
                      <form action="#">
                      <div className="row">
                          <div className="col-md-6">
                            <h6>Booking ID</h6>
                            <h4>W000001</h4>
                          </div>
                          <div className="col-md-6">
                            <h6>วันที่เพิ่ม</h6>
                            <h4>20 Mar 2024</h4>
                          </div>
                        </div>
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
                            <h4>ที่จอดรถ, เครื่องปรับอากาศ, ระบบรักษาความปลอดภัย 24 ชม.</h4>
                          </div>
                        </div>
                        <div className="row">
                        <h6>วันที่จอง</h6>
                        <Col xs={12} md={4}>
                          <h6>ตั้งแต่</h6>
                          <h4>21 Mar 2024</h4>
                        </Col>
                        <Col xs={12} md={4}>
                          <h6>ถึง</h6>
                          <h4>22 Mar 2024</h4>
                        </Col>
                      </div>
                        <h6>ระบุรายละเอียดเพิ่มเติม</h6>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor incididunt ut labore et</h4>
                      </form>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        <Container>
            <Row>
              <Col xs={12}>
                <div className="ltn__checkout-inner">
                <h4 className="title-2">Customer Information</h4>
                  <div className="ltn__checkout-single-content ltn__checkout-form mt-50">
                    <div className="ltn__checkout-single-content-info">
                    <form action="#">
                        <div className="row">
                          <div className="col-md-6">
                            <h6>ชื่อ</h6>
                            <h4>xxxxxxx</h4>
                          </div>
                          <div className="col-md-6">
                            <h6>นามสกุล</h6>
                            <h4>xxxxxxx</h4>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <h6>อีเมล</h6>
                            <h4>example@email.com</h4>
                          </div>
                          <div className="col-md-6">
                            <h6>เบอร์โทร</h6>
                            <h4>0123456789</h4>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <h6>ชื่อบริษัท</h6>
                            <h4>Lorem ipsum dolor sit amet</h4>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <h6>ที่อยู่</h6>
                            <h4>1355 Market St, Suite 900 San Francisco, CA 94103</h4>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <h6>เอกสารเกี่ยวกับบริษัท</h6>
                            <h4>................</h4>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
      </LayoutOne>
    </>
  );
};

export default Cart;
