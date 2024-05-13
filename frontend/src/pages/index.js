import { useState,useRef , useEffect } from "react";
import Slider from "react-slick";
import path from "path";
import fs from "fs/promises";
import Link from "next/link";
import { Layout } from "@/layouts";
import { Container, Row, Col, Nav, Tab,Form } from "react-bootstrap";
import { getProducts, productSlug, getDiscountPrice } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import Feature from "@/components/features";
import featuresData from "@/data/service";
import Asset from "@/components/product/data";
import HeroSectionStyleThree from "@/components/hero/styleThree";
import PropertyItem from "@/components/product/properties";
import { useSelector } from "react-redux";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import blogData from "@/data/blog";
import BlogItem from "@/components/blog";
import BlogType from "@/components/blog/type";
import ShopRightSideBar from "@/components/shopSideBar/search";
import CallToAction from "@/components/callToAction";
import VideoBanner from "@/components/banner/videoBanner";
import ProductItem from "@/components/product";
import CarDealerSearchForm from "@/components/carDealerSearchForm";
import BrandCarouselOne from "@/components/brandCarousel";
import TestimonialStyleThree from "@/components/testimonialCarousel/indexThree";
import TestimonialCarouselItem from "@/components/testimonialCarousel";
import Blog from "@/components/blog/blog";


function HomeVersionThree(props,ref) {

  const [news, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () =>{
        try {
          const response = await fetch("http://localhost:3001/news");
          const data = await response.json();
          setData(data);
        } catch (error) {
            console.error("Error Fetching",error);
        } finally {
          setLoading(false)
        }
    }
    fetchData();
  }, []);

  const [isOpen, setOpen] = useState(false);
  const { products } = useSelector((state) => state.product);
  const featureData = getProducts(featuresData, "buying", "country", 5);
  const countryProducts = getProducts(products, "buying", "country", 5);
  const featuredProducts = getProducts(products, "buying", "featured", 5);
  // const News = getProducts(blogData, "buying", "featured", 6);
  const { data, brand, testimonialData } = props;

  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
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

  const productsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const productCarouselsettings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const testiMonialsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };



  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [keyword, setKeyword] = useState('');

  const handleSearchChange = (selectedProvince) => {
    // console.log(selectedProvince.keyword);
    setKeyword(selectedProvince.keyword);
   
  };

  const [count, setVisibleDataCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleDataCount(prevCount => prevCount + 3);
};

  return (
    <Layout topbar={true}>

      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="LjCzPp-MK48"
        onClose={() => setOpen(false)}
      /> */}
      {/* <!-- SLIDER AREA START (slider-11) --> */}
      <div className="ltn__slider-area ltn__slider-3 section-bg-2">
        <HeroSectionStyleThree/>
      </div>
      {/* <!-- SLIDER AREA END --> */}
      <div id="asset"></div>
      <CarDealerSearchForm navMenuClass="d-none" customClasses="" onSearchChange={handleSearchChange}/>
      {/* <!-- CAR DEALER FORM AREA END --> */}
      
      <ShopRightSideBar keyword={keyword}/>

      {/* <!-- FEATURE AREA START ( Feature - 6) --> */}
      {/* <Asset/> */}
      {/* <!-- FEATURE AREA END -->
 
      {/* <!-- BRAND LOGO AREA START --> */}
      <div className="ltn__brand-logo-area ltn__brand-logo-1 section-bg-1 pt-110 pb-110 plr--9">
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col xs={10}>
              <BrandCarouselOne/>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- BRAND LOGO AREA END --> */}


       {/* <!-- BLOG AREA START (blog-3) -->  */}
       <div className="ltn__blog-area pt-120 pb-70">
        <Container>
          <Row>
            <Col lg={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2"
                titleSectionData={{
                  subTitle: "News",
                  title: "News & Activity",
                }}
              />
            </Col>
          </Row>
          <Blog count={count}/>
            {/* <Row 
              {...blogSettings}
              className="ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal"
            >
              {news.map((data, key) => {
                const slug = productSlug(data.news_name);
                return (
                  <Col key={key} xs={12} sm={6} lg={4} >
                    <BlogItem baseUrl="blog" data={data} slug={slug} />
                  </Col>
                );
              })}
            </Row> */}

            <div className="btn-wrapper text-center">
              <button  className="btn btn-transparent btn-effect-1 btn-border" onClick={handleLoadMore}>LOAD MORE +</button>
              <Link
                href="/blog/grid"
                className="theme-btn-1 btn btn-effect-1"
              >
                Read All +
              </Link>
            </div>
        </Container>
    
      </div>
      {/* <!-- BLOG AREA END -->


      {/* <!-- BRAND LOGO AREA START --> */}

             {/* <!-- TESTIMONIAL AREA START (testimonial-7) -->  */}
        <div
          className="ltn__testimonial-area bg-image-top pt-115 pb-70"
          style={{ backgroundImage: `url("../img/bg/20.jpg")` }}
        >
          <Container>
            <Row>
              <Col lg={12}>
                <TitleSection
                  sectionClasses="text-center"
                  headingClasses="section-subtitle-2"
                  titleSectionData={{
                    subTitle: "About Us",
                    title: "เลือกเราดีอย่างไร",
                  }}
                />
              </Col>
            </Row>

            <Row>
              {testimonialData.map((data, key) => {
                return (
                  <TestimonialCarouselItem key={key} data={data} />
                );
              })}
            </Row>
          </Container>
        </div>
        {/* <!-- TESTIMONIAL AREA END --> */}
    </Layout>
  );
}

export async function getStaticProps() {

  const filePath = path.join(process.cwd(), "src/data/hero/", "index-three.json");

  const brandfilePath = path.join(process.cwd(), "src/data/brand-logo/", "index.json");

  const testimonialFilePath = path.join(process.cwd(), "src/data/testimonial/", "index-three.json");

  const data = JSON.parse(await fs.readFile(filePath));
  const brand = JSON.parse(await fs.readFile(brandfilePath));
  const testimonialData = JSON.parse(await fs.readFile(testimonialFilePath));

  return {
    props: {
      data,
      brand,
      testimonialData
    },
  };
}
export default HomeVersionThree;
