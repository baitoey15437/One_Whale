import React,{ useState,useEffect  } from "react";
import Button from "react-bootstrap/Button";
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
// import CallToAction from "@/components/callToAction";
// import CalendarTable from "@/components/schedule/asset";
import { format } from 'date-fns';
import { th } from 'date-fns/locale';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
//import ReactMapGL, { Marker } from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Modal from "react-bootstrap/Modal";

function AssetDetail() {

    const { products } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

//   const relatedProducts = getProducts(
//     products,
//     product.category[0],
//     "popular",
//     2
//   );

//   const topRatedProducts = getProducts(
//     products,
//     product.category[0],
//     "topRated",
//     2
//   );
//   const popularProducts = getProducts(
//     products,
//     product.category[0],
//     "popular",
//     4
//   );

//   const discountedPrice = getDiscountPrice(
//     product.price,
//     product.discount
//   ).toFixed(2);
//   const latestdBlogs = getProducts(blogData, "buying", "featured", 4);
//   const productPrice = product.price.toFixed(2);
//   const cartItem = cartItems.find((cartItem) => cartItem.id === product.id);
//   const wishlistItem = wishlistItems.find(
//     (wishlistItem) => wishlistItem.id === product.id
//   );
//   const compareItem = compareItems.find(
//     (compareItem) => compareItem.id === product.id
//   );


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


const getProductIDFromURL = () => {
    const url = window.location.pathname;
    const regex = /\/asset\/(\d+)/;
    const match = url.match(regex);
    if (match && match.length > 1) {
        return match[1]; // เอาค่า ID ออกมาจากการ match
    } else {
        return null; // หากไม่พบ ID ใน URL
    }
}

const id = getProductIDFromURL();
const users_id = JSON.parse(localStorage.getItem('users_id'));

const [data, setData] = useState([]);
const [user, setUser] = useState([]);

const fullName = user && user.firstname && user.lastname ? `${user.firstname} ${user.lastname}` : null;

  useEffect(() => {
    const fetchData = async () =>{
        try {
          const response = await fetch(`http://localhost:3001/api/asset/detail/${id}`);
          const data = await response.json();
          setData(data);
          const response_user = await fetch(`http://localhost:3001/api/my_account/${users_id}`);
          const data_user = await response_user.json();
          setUser(data_user.profile[0]);
        } catch (error) {
            console.error("Error Fetching",error);
        }
    }
    fetchData();
  }, []);


  const formatDate = (data) =>{
    const date = new Date(data);
    const formattedDate = format(date, "d MMM yyyy", { locale: th });
    return formattedDate;
  }

  const formattedNumber = (numberString) => {
    // แปลง string เป็นตัวเลข
  const number = parseFloat(numberString);

  // ตรวจสอบว่าเป็นตัวเลขที่ถูกต้องหรือไม่
  if (isNaN(number)) {
    return 'Invalid number';
  }

  // แปลงตัวเลขเป็นรูปแบบที่มีลูกน้ำ
  return number.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  };


  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleNotShow = () => {
    setShowAll(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(isModalOpen);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
            title="Asset Details"
            sectionPace="mb-0"
            currentSlug="Asset"
          />
  
          {/* <!-- BREADCRUMB AREA END --> */}
         
          {/* <!-- IMAGE SLIDER AREA START (img-slider-3) --> */}
          <div className="ltn__img-slider-area mb-50 mt-90">
            <Container fluid>

              <Slider
                {...productDetailsCarouselSettings}
                className="row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all g-0"
              >
                 <div className="col-lg-12">
                      <div className="ltn__img-slide-item-4">
                        <Link href="#?">
                        {data[0]?.asset?.head_img && ( 
                        <img
                          src={`/assets/${data[0].asset.head_img}`}
                          />
                        )}
                        </Link>
                      </div>
                    </div>
                    {data[0]?.img && (
                      data[0].img.map((img, key) => (
                        <div className="col-lg-12" key={key}>
                          <div className="ltn__img-slide-item-4">
                            <Link href="#?">
                              <img
                                src={`/assets/${img.document}`}
                                alt={`Image ${key}`}
                              />
                            </Link>
                          </div>
                        </div>
                      ))
                    )}
              </Slider>
            </Container>
          </div>
          {/* <!-- IMAGE SLIDER AREA END -->
  
      <!-- SHOP DETAILS AREA START --> */}
          <div className="ltn__shop-details-area pb-10">
            <Container>
            {data && data.map((item, key) => {
              return (
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-category">
                          <Link href="#">{item.asset.zone}</Link>
                        </li>
                          <li className="ltn__blog-category">
                            <Link className="bg-orange" href="#">
                            {item.asset.zone_type}
                            </Link>
                          </li>
                          <li className="ltn__blog-date">
                            <FaCalendarAlt />
                            {formatDate(item.asset.update_date)}
                          </li>
                      </ul>
                    </div>
                   <h1> {item.asset.asset_name}</h1>
                     <label>
                      <span className="ltn__secondary-color">
                        <i className="flaticon-pin"></i>
                      </span>{" "}
                      {item.location.amphure_name} {item.location.province_name}
                    </label>
                    <h4 className="title-2">คำอธิบาย</h4>
                     <p>{item.asset.description}</p>
  
                    <h4 className="title-2">รายละเอียดเพิ่มเติม</h4>
                    <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                      <ul>
                        <li>
                          <label>Asset Type:</label>{" "}
                          <span>{item.asset.asset_type_name}</span>
                        </li>
                        <li>
                          <label>Asset Area: </label>{" "}
                          <span>{item.asset.size} &nbsp;ตารางเมตร</span>
                        </li>
                        <li>
                          <label>Zone:</label>{" "}
                          <span>{item.asset.zone}</span>
                        </li>
                        <li>
                          <label>Type:</label>{" "}
                          <span>{item.asset.zone_type}</span>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <label>การถือครอง</label>{" "}
                          <span>{item.asset.holding}</span>
                        </li>
                        <li>
                          <label>ราคา:</label>{" "}
                          <span>{formattedNumber(item.asset.range_min)} - {formattedNumber(item.asset.range_max)} บาท</span>
                        </li>
                        <li>
                          <label>ลงประกาศเมื่อ:</label> <span>{formatDate(item.asset.datatime)}</span>
                        </li>
                      </ul>
                    </div>
  
                    <h4 className="title-2 mb-10">สิ่งอำนวยความสะดวก</h4>
                    <div className="property-details-amenities mb-60">
                      <div className="row">
                        {item.option && item.option.map((option, key) => {
                        return (
                          <div className="col-md-4">
                            <ul>
                              <li>{option.option_name}</li>
                            </ul>
                        </div>
                        );
                      })}
                      </div>
                    </div>
                    
                      <h4 className="title-2">From Our Gallery</h4>
                      <div className="row">
                        {data[0].img.slice(0, 4).map((img, key) => (
                          <div className="col-md-6" key={key}>
                              {key === 3 && ( // เพิ่มเงื่อนไขเพื่อแสดงปุ่ม "ดูทั้งหมด" ที่รูปที่ 4
                                <div className="overlay">
                                  <button onClick={handleOpenModal}>ดูทั้งหมด</button>
                                </div>
                              )}
                              <img className="mb-30" src={`/assets/${img.document}`} />
                          </div>
                         ))}
                      </div>
                      <Modal
                        show={isModalOpen}
                        onHide={handleCloseModal}
                        backdrop="static"
                        keyboard={false}
                        size="md"
                        className="ltn__modal-area"
                      >
                        <Modal.Header>
                        <Button className="close" variant="secondary" onClick={handleCloseModal}>
                          <span aria-hidden="true">&times;</span>
                        </Button>
                      </Modal.Header>
                        <Modal.Body>
                        <div className="row">
                          {data[0].img.map((img, key) => (
                            <div className="col-md-6" key={key}>
                              <img className="mb-30" src={`/assets/${img.document}`} alt="Image" />
                            </div>
                          ))}
                        </div>
                        </Modal.Body>
                  
                      </Modal>
   
                        {/* <div className="ltn__property-details-gallery mb-30">
                          <div className="row">
                            {data[0]?.img &&
                              (showAll ? (
                                data[0].img.map((img, key) => (
                                  <div className="col-md-6" key={key}>
                                      <img className="mb-30" src={`/assets/${img.document}`} />
                                      {key === data[0].img.length - 1 && ( // เพิ่มเงื่อนไขเพื่อแสดงปุ่ม "ดูทั้งหมด" ที่รูปที่ 4
                                        <div className="overlay">
                                          <button onClick={handleNotShow}>ซ่อน</button>
                                        </div>
                                )}
                                  </div>
                                )) 
                              ) : (
                                data[0].img.slice(0, 4).map((img, key) => (
                                  <div className="col-md-6" key={key}>
                                      {key === 3 && ( // เพิ่มเงื่อนไขเพื่อแสดงปุ่ม "ดูทั้งหมด" ที่รูปที่ 4
                                        <div className="overlay">
                                          <button onClick={handleShowAll}>ดูทั้งหมด</button>
                                        </div>
                                      )}
                                      <img className="mb-30" src={`/assets/${img.document}`} />
                                  </div>
                                ))
                              ))}
                          </div>
                        </div> */}
                      
                    {/* <div className="ltn__property-details-gallery mb-30">
                      <div className="row">
                        {data[0]?.img && (
                          data[0].img.map((img, key) => (
                            <div className="col-md-6">
                              <Link href="#?" data-rel="lightcase:myCollection">
                                <img
                                  className="mb-30"
                                  src={`/assets/${img.document}`}
                                />
                              </Link>
                              </div>
                          ))
                        )}
                      </div>
                    </div> */}
                    <h4 className="title-2">Location</h4>
                    <p>{item.location.address} ตำบล{item.location.amphure_name} อำเภอ{item.location.amphure_name} จังหวัด{item.location.province_name} {item.location.zip_code}</p>
                    <div className="property-details-google-map mb-60">
                    <iframe
                      src={`https://maps.google.com/maps?q=${item.location.latitude},${item.location.longitude}&hl=es;&t=&z=20&ie=UTF8&iwloc=&output=embed`}
                      width="100%"
                      height="100%"
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
                        {/* <img
                          src={`/img/team/${product.agent.img}`}
                          alt={`${product.agent.fullName}`}
                        /> */}
                        
                        <Link href={item.supplier.website} target="_blank">
                        <h5 className="ltn__secondary-color">บริษัท {item.supplier.company_name}</h5>
                        </Link>
                        <div className="product-ratting">
                          <ul>
                            {/* <li>
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
                            </li> */}
                            {/* <li className="review-total">
                              {" "}
                              <Link href="#">
                                {" "}
                               
                              </Link>
                            </li> */}
                          </ul>
                        </div>
                        {/* <p>{product.agent.description}</p> */}
  
                        <div className="ltn__social-media">
                          {/* <ul>
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
                          </ul> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- Form Widget --> */}
                    <div className="widget ltn__form-widget">
                      <h4 className="ltn__widget-title ltn__widget-title-border-2">
                        ติดต่อเรา
                      </h4>
                      <form action="#">
                      {fullName ? '' : <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          readOnly
                        />
                        <input
                          type="text"
                          name="email"
                          placeholder="Your email"
                          readOnly
                        />
                      </div>}
                        <textarea
                          name="yourmessage"
                          placeholder="Write Message..."
                        ></textarea>
                        <button type="submit" className="btn theme-btn-1">
                          Send Messege
                        </button>
                      </form>
                    </div>
                    <div className="widget ltn__form-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border-2">
                        Schedule
                      </h4>
                    {/* <CalendarTable/> */}
                    </div>
                  </aside>
                </div>
              </div>
            );
          })}
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

export default AssetDetail;