import { useState,useEffect  } from "react";
import Link from "next/link";
import {
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaCheck,
  FaCalendarAlt,
  FaUserAlt,
  FaEnvelope,
  FaGlobe,
  FaPencilAlt,
  FaComments,
  FaArrowRight, FaArrowLeft,
} from "react-icons/fa";

import blogData from "@/data/blog";
import { Layout } from "@/layouts";
import { useSelector } from "react-redux";
import { getProducts, productSlug } from "@/lib/product";
import { Container, Row, Col } from "react-bootstrap";
import BlogSideBar from "@/components/blog/sidebar";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import Slider from "react-slick";
import BlogItem from "@/components/blog";
import { format } from 'date-fns';
import { th } from 'date-fns/locale';

function BlogtDetails({blog}) {

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

  // const blogSettings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   prevArrow: <SlickArrowLeft />,
  //   nextArrow: <SlickArrowRight />,
  //   responsive: [
  //     {
  //       breakpoint: 1199,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 575,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  const brandSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    autoplay: true,
    autoplaySpeed: 2500
   
  };


  const blogSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    autoplay: true,
    autoplaySpeed: 2500
   
  };


  const getProductIDFromURL = () => {
    const url = window.location.pathname;
    const regex = /\/grid\/(\d+)/;
    const match = url.match(regex);
    if (match && match.length > 1) {
        return match[1]; // เอาค่า ID ออกมาจากการ match
    } else {
        return null; // หากไม่พบ ID ใน URL
    }
}

const id = getProductIDFromURL();

const [data, setData] = useState([]);
const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
        try {
          const response = await fetch(`http://localhost:3001/api/news/${id}`);
          const data = await response.json();
          setData(data);
          const response_news = await fetch("http://localhost:3001/api/news");
          const data_news = await response_news.json();
          setNews(data_news);
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:4, // กำหนด slidesToShow ให้เป็นจำนวนรูปภาพทั้งหมด
    slidesToScroll: 1,
  };

  function SliderItem({ src, alt }) {
    return <img src={`/imagehead/${src}`} alt={alt} />;
  }


  return (
    <>
      <Layout topbar={true}>
        {/* <!-- BREADCRUMB AREA START --> */}

        <ShopBreadCrumb
          title="News Details"
          sectionPace=""
          currentSlug="News Details"
        />

        {/* <!-- BREADCRUMB AREA END --> */}

        {/*  <!-- PAGE DETAILS AREA START (blog-details) -->*/}
        <div className="ltn__page-details-area ltn__blog-details-area mb-120">
          <Container>
          {data.map((item, key) => {
              return (
            <Row className="justify-content-center mlr--200">
              <Col className="col-lg-8 col-md-12">
                <div className="ltn__blog-details-wrap2">
                  <div className="ltn__page-details-inner ltn__blog-details-inner">
                    <h2 className="ltn__blog-title">{item.news.news_name}</h2>
                    <div className="ltn__blog-meta">
                      <ul>
                      <li className="ltn__blog-category">
                            <Link className="bg-orange" href="#">
                            ข่าว{item.news.typename}
                            </Link>
                          </li>
                        <li className="ltn__blog-date">
                          <FaCalendarAlt />
                          {formatDate(item.news.update_date)}
                        </li>
                      </ul>
                    </div>
                    <div className="justify-content-center display-grid">
                      <img src={`/imagehead/${item.news.head_img}/`} alt="Image" />
                    </div>
                    <p>{item.news.news_det}</p>
                    <div className="ltn__blog-area">
                      { item.img.length > 2?
                      <Container>
                        <Slider
                          {...blogSettings}
                          className="ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-4-normal"
                        >
                        {item.img.map((img, key) => (
                          <div key={key}>
                            <img src={`/imagehead/${img.document}/`} alt="Image" />
                          </div>
                        ))}
                        </Slider>
                      </Container>
                       : 
                        <div className="row">
                       {item.img.map((img, key) => (
                         <div className="col-lg-6">
                           <img src={`/imagehead/${img.document}/`} alt="Image" />
                         </div>
                       ))} </div>
                     }
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            );
          })}
          </Container>
        </div>



        <div className="ltn__blog-area">
          <Container>
            <Slider
              {...brandSettings}
              className="ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal"
            >
              {news.map((data, key) => {
                return (
                  <BlogItem baseUrl="/blog/grid" data={data} />
                );
              })}
            </Slider>
          </Container>
        </div>

        <div className="btn-wrapper text-center mb-50">
              <Link
                href="/blog/grid"
                className="theme-btn-1 btn btn-effect-1"
              >
                Read All +
              </Link>
            </div>
      </Layout>
    </>
  );
}

export default BlogtDetails;
