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
                            <td>สถานะ</td>     
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
                                    <Link href={`/book/detail`}>
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
                                อนุมัติ
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
