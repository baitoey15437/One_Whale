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

function Blog({count}) {

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

    const visibleData = filteredData.slice(0, count);


  const perPageLimit = 9;
  const [currentItems, setCurrentItems] = useState(blogData);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + perPageLimit;
    setCurrentItems(blogData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(blogData.length / perPageLimit));
  }, [itemOffset, perPageLimit]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * perPageLimit) % blogData.length;
    setItemOffset(newOffset);
  };

  return (
    <>

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
            {visibleData.map((data, key) => {
              return (
                <Col xs={12} sm={6} lg={4} key={key}>
                  <BlogItem baseUrl="/blog/grid" data={data} />
                </Col>
              );
            })}
          </Row>
          </Container> 
      </div>
   
  </>
  );
}

export default Blog;
