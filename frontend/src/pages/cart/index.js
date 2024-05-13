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
        <Container>
          <h4 className="title-2">All Cart</h4>
        </Container>
        </div>
        <div className="liton__shoping-cart-area mb-120">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <div className="row">
                <div className="col-lg-12">
                  <div className="shoping-cart-inner">
                    <div className="shoping-cart-table table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td colSpan={2}>รายการ</td>
                            <td>วันที่เริ่มจอง</td>
                            <td>วันที่สิ้นสุด</td>
                            <td>จัดการ</td>     
                          </tr>
                          {cartItems.map((product, key) => {
                            let imageCount = key + 1;
                            const slug = productSlug(product.title);
                            const discountedPrice = getDiscountPrice(
                              product.price,
                              product.discount
                            ).toFixed(2);

                            cartTotalPrice +=
                              discountedPrice * product.quantity;
                            return (
                              <tr key={key}>
                                <td className="cart-product-image">
                                  <Link href={`/shop/${slug}`}>
                                    <img
                                      src={`/img/product/${imageCount}.png`}
                                      alt="#"
                                    />
                                  </Link>
                                </td>
                                <td className="cart-product-info">
                                  <h4>
                                    <Link href={`/shop/${slug}`}>
                                      {product.title}
                                    </Link>
                                  </h4>
                                </td>
                                <td className="cart-product-price">
                                  03/04/2024
                                </td>
                                <td className="cart-product-price">
                                  03/04/2024
                                </td>
                                <td className="cart-product-price">
                                <MdDelete />
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <p>No items found in cart</p>
                <Link
                  href="/shop"
                  className="theme-btn-1 btn btn-effect-1"
                >
                  Shop Now
                </Link>
              </div>
            )}
          </div>
        </div>
        <Container>
            <Row>
              <Col xs={12}>
                <div className="ltn__checkout-inner">
                <h4 className="title-2">Customer Information</h4>
                  <div className="ltn__checkout-single-content ltn__checkout-form mt-50">
                    
                    <div className="ltn__checkout-single-content-info">
                    <form action="/register/supplier3" className="ltn__form-box contact-form-box-3 text-form">
                    <div className="row">
                        <Col xs={12} md={6}>
                          <label>ชื่อ</label>
                          <input type="text" name="ltn__name" />
                        </Col>
                        <Col xs={12} md={6}>
                          <label>นามสกุล</label>
                          <input type="text" name="ltn__lastname" />
                        </Col>
                        <Col xs={12} md={6}>
                          <label>อีเมล</label>
                          <input type="text" name="ltn__name" />
                        </Col>
                        <Col xs={12} md={6}>
                          <label>เบอร์โทร</label>
                          <input type="text" name="ltn__lastname" />
                        </Col>
                      </div>
                      <Row>
                        <div className="col-md-12">
                          <label>ชื่อบริษัท </label>
                          <input type="password" name="ltn__name"/>
                          <label>ที่อยู่ </label>
                          <input type="password" name="ltn__name"/>
                        </div>
                      </Row>
                      <div className="row">
                        <Col xs={12} md={6}>
                          <label>ตำบล</label>
                          <input type="text" name="ltn__name" />
                        </Col>
                        <Col xs={12} md={6}>
                          <label>อำเภอ</label>
                          <input type="text" name="ltn__lastname" />
                        </Col>
                        <Col xs={12} md={6}>
                          <label>จังหวัด</label>
                          <input type="text" name="ltn__name" />
                        </Col>
                        <Col xs={12} md={6}>
                          <label>รหัสไปรษณีย์</label>
                          <input type="text" name="ltn__lastname" />
                        </Col>
                        <Col xs={12} md={6}>
                          <label>เอกสารที่เกี่ยวกับบริษัท</label><br></br>
                          <button className="btn theme-btn-2 btn-effect-1 text-uppercase button-file">Upload File</button>
                        </Col>
                      </div>
                  </form>
                    </div>
                  </div>
                  <div className="btn-wrapper text-center">
              <Link
                href="/checkout"
                className="theme-btn-1 btn btn-effect-1"
              >
               Booking
              </Link>
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
