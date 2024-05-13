import { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Slider from "react-slick";
import BreadCrumb from "@/components/breadCrumbs";
import { Layout } from "@/layouts";
import { useSelector } from "react-redux";
import { getProducts, productSlug, getDiscountPrice } from "@/lib/product";
import products from "@/data/products.json";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import RelatedProduct from "@/components/product/related-product";
import FollowUs from "@/components/followUs";
import Tags from "@/components/tags";
import blogData from "@/data/blog";
import {
  FaArrowRight,
  FaArrowLeft,
  FaPlay,
  FaStar,
  FaStarHalfAlt,
  FaSearch,
  FaRegStar,
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaUserAlt,
  FaEnvelope,
  FaGlobe,
  FaPencilAlt,
  FaCalendarAlt
} from "react-icons/fa";
import CallToAction from "@/components/callToAction";


function ProductDetails({ product }) {
  const { products } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  const relatedProducts = getProducts(
    products,
    product.category[0],
    "popular",
    2
  );

  const topRatedProducts = getProducts(
    products,
    product.category[0],
    "topRated",
    2
  );
  const popularProducts = getProducts(
    products,
    product.category[0],
    "popular",
    4
  );

  const discountedPrice = getDiscountPrice(
    product.price,
    product.discount
  ).toFixed(2);
  const latestdBlogs = getProducts(blogData, "buying", "featured", 4);
  const productPrice = product.price.toFixed(2);
  const cartItem = cartItems.find((cartItem) => cartItem.id === product.id);
  const wishlistItem = wishlistItems.find(
    (wishlistItem) => wishlistItem.id === product.id
  );
  const compareItem = compareItems.find(
    (compareItem) => compareItem.id === product.id
  );


  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FaArrowLeft />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaArrowRight />
    </button>
  );
  const productDetailsCarouselSettings = {
    centerMode: true,
    infinite: true,
    centerPadding: "450px",
    slidesToShow: 1,
    dots: false,
    speed: 500,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          dots: true,
        },
      },
    ],
  };

  const popular_product = {
    infinite: true,
    slidesToShow: 1,
    dots: true,
    speed: 500,
    arrows: false,
  };

  const [quickViewShow, SetQuickViewShow] = useState(false);
  const quickViewCloseHandle = () => SetQuickViewShow(false);
  const showQuickViewHandle = () => SetQuickViewShow(true);

  const [wishlistShow, SetWishlistShow] = useState(false);
  const wishlistCloseHandle = () => SetWishlistShow(false);
  const showWishlistHandle = () => SetWishlistShow(true);
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout topbar={true}>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="X7R-q9rsrtU"
          onClose={() => setOpen(false)}
        />
        {/* <!-- BREADCRUMB AREA START --> */}

        <BreadCrumb
          title="Product Details"
          sectionPace="mb-0"
          currentSlug={product.title}
        />

        {/* <!-- BREADCRUMB AREA END --> */}

        {/* <!-- IMAGE SLIDER AREA START (img-slider-3) --> */}
        <div className="ltn__img-slider-area mb-90">
          <Container fluid>
            <Slider
              {...productDetailsCarouselSettings}
              className="row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all g-0"
            >
              {product.carousel.map((single, key) => {
                return (
                  <div className="col-lg-12" key={key}>
                    <div className="ltn__img-slide-item-4">
                      <Link href="#?">
                        <img
                          src={`/img/img-slide/${single.img}`}
                          alt={`${single.title}`}
                        />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </Container>
        </div>
        {/* <!-- IMAGE SLIDER AREA END -->

    <!-- SHOP DETAILS AREA START --> */}
        <div className="ltn__shop-details-area pb-10">
          <Container>
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                  <div className="ltn__blog-meta">
                    <ul>
                      {
                        (product.featured ? (
                          <li className="ltn__blog-category">
                            <Link href="#">Featured</Link>
                          </li>
                        ) : (
                          ""
                        ),
                          product.rent ? (
                            <li className="ltn__blog-category">
                              <Link className="bg-orange" href="#">
                                For Rent
                              </Link>
                            </li>
                          ) : (
                            ""
                          ))
                      }

                      <li className="ltn__blog-date">
                        <i className="far fa-calendar-alt"></i>
                        {product.date}
                      </li>
                    </ul>
                  </div>
                  <h1> {product.title}</h1>
                  <label>
                    <span className="ltn__secondary-color">
                      <i className="flaticon-pin"></i>
                    </span>{" "}
                    {product.locantion}
                  </label>
                  <h4 className="title-2">คำอธิบาย</h4>
                  <p>{product.description.fullDescription}</p>
                  <p>{product.description.shortDescription}</p>

                  <h4 className="title-2">รายละเอียดเพิ่มเติม</h4>
                  <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                    <ul>
                      <li>
                        <label>Property ID:</label>{" "}
                        <span>{product.propertyDetails.propertyId}</span>
                      </li>
                      <li>
                        <label>Home Area: </label>{" "}
                        <span>{product.propertyDetails.area} sqft</span>
                      </li>
                      <li>
                        <label>Rooms:</label>{" "}
                        <span>{product.propertyDetails.rooms}</span>
                      </li>
                      <li>
                        <label>Baths:</label>{" "}
                        <span>{product.propertyDetails.baths}</span>
                      </li>
                      <li>
                        <label>Year built:</label>{" "}
                        <span>{product.propertyDetails.createdYear}</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <label>Lot Area:</label>{" "}
                        <span>{product.propertyDetails.propertyId}</span>
                      </li>
                      <li>
                        <label>Lot dimensions:</label>{" "}
                        <span>{product.propertyDetails.area} sqft</span>
                      </li>
                      <li>
                        <label>Beds:</label>{" "}
                        <span>{product.propertyDetails.bedrooms}</span>
                      </li>
                      <li>
                        <label>Price:</label> <span>{product.price}</span>
                      </li>
                      <li>
                        <label>Property Status:</label>{" "}
                        <span>{product.propertyDetails.propertyStatus}</span>
                      </li>
                    </ul>
                  </div>

                  <h4 className="title-2 mb-10">สิ่งอำนวยความสะดวก</h4>
                  
                  <div className="property-details-amenities mb-60">
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="ltn__list-item-1 ltn__list-item-1-before clearfix">
                          <li> Live Music Cocerts at Luviana</li>
                          <li>Our SecretIsland Boat Tour is Just for You</li>
                          <li>Live Music Cocerts at Luviana</li>
                          <li>Live Music Cocerts at Luviana</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="ltn__list-item-1 ltn__list-item-1-before clearfix">
                          <li> Live Music Cocerts at Luviana</li>
                          <li>Our SecretIsland Boat Tour is Just for You</li>
                          <li>Live Music Cocerts at Luviana</li>
                          <li>Live Music Cocerts at Luviana</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h4 className="title-2">From Our Gallery</h4>
                  <div className="ltn__property-details-gallery mb-30">
                    <div className="row">
                      <div className="col-md-6">
                        <Link
                          href={`/img/others/${product.gallery.img1}`}
                          data-rel="lightcase:myCollection"
                        >
                          <img
                            className="mb-30"
                            src={`/img/others/${product.gallery.img1}`}
                            alt={`${product.title}`}
                          />
                        </Link>
                        <Link
                          href={`/img/others/${product.gallery.img2}`}
                          data-rel="lightcase:myCollection"
                        >
                          <img
                            className="mb-30"
                            src={`/img/others/${product.gallery.img2}`}
                            alt={`${product.title}`}
                          />
                        </Link>
                      </div>
                      <div className="col-md-6">
                        <Link
                          href={`/img/others/${product.gallery.img3}`}
                          data-rel="lightcase:myCollection"
                        >
                          <img
                            className="mb-30"
                            src={`/img/others/${product.gallery.img3}`}
                            alt={`${product.title}`}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  
                  <h4 className="title-2">Location</h4>
                  <div className="property-details-google-map mb-60">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen=""
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
                  {/* <!-- Author Widget --> */}
                  <div className="widget ltn__author-widget">
                    <div className="ltn__author-widget-inner text-center">
                      <img
                        src={`/img/team/${product.agent.img}`}
                        alt={`${product.agent.fullName}`}
                      />
                      <h5>{product.agent.fullName}</h5>
                      <small>{product.agent.designation}</small>
                      <div className="product-ratting">
                        <ul>
                          <li>
                            <a href="#">
                              <FaStar />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaStar />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaStar />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaStar />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaRegStar />
                            </a>
                          </li>
                          <li className="review-total">
                            {" "}
                            <Link href="#">
                              {" "}
                              ( {product.agent.raiting} Reviews )
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <p>{product.agent.description}</p>

                      <div className="ltn__social-media">
                        <ul>
                          <li>
                            <a href="#" title="Facebook">
                              <FaFacebookF />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Twitter">
                              <FaTwitter />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Linkedin">
                              <FaInstagram />
                            </a>
                          </li>

                          <li>
                            <a href="#" title="Youtube">
                              <FaDribbble />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Form Widget --> */}
                  <div className="widget ltn__form-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border-2">
                      ติดต่อเรา
                    </h4>
                    <form action="#">
                      <input
                        type="text"
                        name="yourname"
                        placeholder="Your Name*"
                      />
                      <input
                        type="text"
                        name="youremail"
                        placeholder="Your e-Mail*"
                      />
                      <textarea
                        name="yourmessage"
                        placeholder="Write Message..."
                      ></textarea>
                      <button type="submit" className="btn theme-btn-1">
                        Send Messege
                      </button>
                    </form>
                  </div>
                </aside>
              </div>
            </div>
          </Container>
          <div className="btn-wrapper text-center">
              <Link
                href="/checkout"
                className="theme-btn-1 btn btn-effect-1"
              >
                เพิ่มลงในตะกร้า
              </Link>
            </div>
        </div>
      </Layout>

    </>
  );
}

export default ProductDetails;

export async function getStaticProps({ params }) {
  // get product data based on slug
  const product = products.filter(
    (single) => productSlug(single.title) === params.slug
  )[0];

  return { props: { product } };
}

export async function getStaticPaths() {
  // get the paths we want to pre render based on products
  const paths = products.map((product) => ({
    params: { slug: productSlug(product.title) },
  }));

  return { paths, fallback: false };
}
