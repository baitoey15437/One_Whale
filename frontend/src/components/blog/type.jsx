import Link from "next/link";
import { Row, Col, Nav, Tab } from "react-bootstrap";
import React,{ useState , useEffect } from "react";

const BlogType = () => {

  const [newstype, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () =>{
        try {
          const response = await fetch("http://localhost:3001/api/newstype");
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

  return (
    <>
      <div className="ltn__our-history-area pb-25 plr--12">
        <Row className="justify-content-md-center">
          <Col xs={8}>
            <Tab.Container defaultActiveKey="first">
              <div className="ltn__our-history-inner">
                <div className="ltn__tab-menu text-uppercase">
                  <Nav>
                    <Nav.Link eventKey="first">ทั้งหมด</Nav.Link>
                    {newstype.map((data, key) => {
               
                return (
                  <React.Fragment>
                      <Nav.Link eventKey="second">{data.typename}</Nav.Link>
                  </React.Fragment>
                  );
                })}
                  </Nav>
                </div>
              </div>
            </Tab.Container>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default BlogType;
