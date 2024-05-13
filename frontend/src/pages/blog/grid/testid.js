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
import { LayoutOne } from "@/layouts";
import { useSelector } from "react-redux";
import { getProducts, productSlug } from "@/lib/product";
import { Container, Row, Col } from "react-bootstrap";
import BlogSideBar from "@/components/blog/sidebar";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import Slider from "react-slick";
import BlogItem from "@/components/blog";

function BlogtDetails({ blog }) {
  const { products } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  const relatedBlogs = getProducts(blogData, blog.category[0], "popular", 2);

  const latestdBlogs = getProducts(blogData, "buying", "featured", 4);

  const topRatedProducts = getProducts(products, "buying", "featured", 3);

  const popularProducts = getProducts(products, "buying", "featured", 3);

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


  return (
    <>
      <LayoutOne topbar={true}>
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
            <Row className="justify-content-center mlr--200">
              <Col className="col-lg-8 col-md-12">
                <div className="ltn__blog-details-wrap">
                  <div className="ltn__page-details-inner ltn__blog-details-inner">
                    <h2 className="ltn__blog-title">{blog.title}</h2>
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <FaCalendarAlt />
                          {blog.date}
                        </li>
                      </ul>
                    </div>
                    <div className="justify-content-center display-grid">
                      <img src={`/img/blog/${blog.thumbImg}`} alt="Image" />
                    </div>
                    <p>{blog.fullDescription}</p>
                    <p>{blog.shortDescription}</p>
                    
                    {blog.extraInformation.map((extra, key) => {
                      return (
                        <div key={key}>
                          <h2>{extra.title}</h2>
                          <p>{extra.description}</p>
                        </div>
                      );
                    })}

            
                    <p>{blog.extraContent.description1}</p>

                    <img
                      className="alignleft"
                      src="/img/blog/blog-details/1.jpg"
                      alt="Image"
                    />
                    <p>{blog.extraContent.description2}</p>
                    <p>{blog.extraContent.description3}</p>

                    <h4>{blog.extraContent.title}</h4>
                    <p>{blog.extraContent.description4}</p>

                    <div className="row">
                      <div className="col-lg-6">
                        <img
                          src={`/img/service/${blog.extraContent.caption.img1}`}
                          alt="Image"
                        />
                      </div>
                      <div className="col-lg-6">
                        <img
                          src={`/img/service/${blog.extraContent.caption.img2}`}
                          alt="Image"
                        />
                      </div>
                    </div>
                    <p>{blog.extraContent.caption.imageCaptionDetails}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="ltn__blog-area pb-70">
          <Container>
            <Slider
              {...blogSettings}
              className="ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal"
            >
              {blogData.map((data, key) => {
                const slug = productSlug(data.title);
                return (
                  <BlogItem key={key} baseUrl="blog" data={data} slug={slug} />
                );
              })}
            </Slider>
          </Container>
        </div>

        <div className="btn-wrapper text-center">
              <Link
                href="/blog/grid"
                className="theme-btn-1 btn btn-effect-1"
              >
                Read All +
              </Link>
            </div>
      </LayoutOne>
    </>
  );
}

export default BlogtDetails;

export async function getStaticProps({ params }) {
  // get blog data based on slug
  const blog = blogData.filter(
    (single) => productSlug(single.title) === params.slug
  )[0];

  return { props: { blog } };
}

export async function getStaticPaths() {
  // get the paths we want to pre render based on blogs
  const paths = blogData.map((singleBlog) => ({
    params: {
      slug: productSlug(singleBlog.title, {
        lower: true, // convert to lower case, defaults to `false`
      }),
    },
  }));

  return { paths, fallback: false };
}
