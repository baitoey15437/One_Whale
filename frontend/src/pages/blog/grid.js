import { useState, useEffect } from "react";
import { Layout } from "@/layouts";
import { Container, Row, Col,Tab ,Nav } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import { productSlug } from "@/lib/product";
import blogData from "@/data/blog";
import BlogItem from "@/components/blog";
import CallToAction from "@/components/callToAction";
import ReactPaginate from "react-paginate";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import TitleSection from "@/components/titleSection";
import Blog from "@/components/blog/blog";

function BlogGrid() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
        try {
          const response = await fetch("http://localhost:3001/api/news");
          const data = await response.json();
          setNews(data);
        } catch (error) {
            console.error("Error Fetching",error);
        }
    }
    fetchData();
  }, []);


  const uniqueTypeData = [];

    const map = new Map();

    news.forEach(item => {
        if (!map.has(item.newstype_id)) {
            map.set(item.newstype_id, true);
            uniqueTypeData.push({ id: item.newstype_id, typename: item.typename });
        }
    });


    const [selectedTypename, setSelectedTypename] = useState(null);

    const handleTabClick = (newstype_id) => {
        setSelectedTypename(newstype_id);
    };

    const filteredData = selectedTypename ? news.filter(item => item.newstype_id === selectedTypename) : news;


  const perPageLimit = 9;
  const [currentItems, setCurrentItems] = useState(blogData);
  //const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  // useEffect(() => {
  //   const endOffset = itemOffset + perPageLimit;
  //   setCurrentItems(blogData.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(blogData.length / perPageLimit));
  // }, [itemOffset, perPageLimit]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * perPageLimit) % blogData.length;
    setItemOffset(newOffset);
  };

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

  const [pageNumber, setPageNumber] = useState(0);

  // ฟังก์ชันที่จะเรียกเมื่อเปลี่ยนหน้า
  const handlePageChange1 = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo({
      top: 200, // ตำแหน่งที่คุณต้องการเลื่อนไป (หน่วยเป็น pixel)
      behavior: 'smooth' // เลื่อนไปโดยการ animate (smooth scroll)
  });
  };


 // จำนวนรายการต่อหน้า
 const itemsPerPage = 12;
 const pageCount = Math.ceil(filteredData.length / itemsPerPage);
 const offset = pageNumber * itemsPerPage;
 const currentPageData1 = filteredData.slice(offset, offset + itemsPerPage);


  return (
    <>
      <Layout topbar={true}>
        <ShopBreadCrumb
          title="News"
          sectionPace=""
          currentSlug="News"
        />

        <Row>
          <Col lg={12}>
          <div className={`section-title-area text-center`}>
              <h1 className="section-title"> News & Activity</h1>
            </div>
        
          </Col>
        </Row>
        <Container>
          <div className="ltn__our-history-area pb-25">
          <Row className="justify-content-md-center">
                      <Col xs={8}>
                          <Tab.Container defaultActiveKey="first">
                              <div className="ltn__our-history-inner">
                                  <div className="ltn__tab-menu text-uppercase">
                                      <Nav>
                                        <Nav.Link eventKey="first" onClick={() => handleTabClick(null)}>ทั้งหมด</Nav.Link>
                                        {uniqueTypeData && uniqueTypeData.map((data, key) => {
                                        return (
                                          <Nav.Link eventKey={key} key={key} onClick={() => handleTabClick(data.id)}>{data.typename}</Nav.Link>
                                          );
                                        })}
                                      </Nav>
                                  </div>
                                  
                              </div>
                          </Tab.Container>
                      </Col>
                </Row>
          </div>

      </Container>

      <div className="ltn__blog-area ltn__blog-item-3-normal">
        <Container>
          <Row>
            {currentPageData1.map((data, key) => {
              return (
                <Col xs={12} sm={6} lg={4} key={key}>
                  <BlogItem baseUrl="/blog/grid" data={data} />
                </Col>
              );
            })}
          </Row>
          </Container> 
      </div>
          <ReactPaginate
            onPageChange={handlePageChange1}
            initialPage={0}
            // ใช้ค่า pageNumber เพื่อกำหนดหน้าที่ถูกเลือกเป็นหน้าแรก
            forcePage={pageNumber}
            pageCount={pageCount}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            nextLabel={<FaAngleDoubleRight />}
            previousLabel={<FaAngleDoubleLeft />}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination ltn__pagination justify-content-center"
            activeClassName="active"
            renderOnZeroPageCount={null}
         />
      </Layout>
    </>
  );
}

export default BlogGrid;
