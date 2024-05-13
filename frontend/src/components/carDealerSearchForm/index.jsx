import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import { FaCarAlt, FaUserAlt,FaSearch } from "react-icons/fa";
import Link from "next/link";
import Search from "../search";
import { useState,useRef  } from "react";


function CarDealerSearchForm({ navMenuClass, customClasses, onSearchChange }) {
  
  const [keyword, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // window.location.href = `/shop/right-sidebar?keyword=${keyword}`;
    onSearchChange({keyword: keyword});
  }

  return (
    <>
      <div
        className={`ltn__car-dealer-form-area mt--65 mt-120 ${customClasses}`}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="ltn__car-dealer-form-tab">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Tab.Content className="tab-content bg-white box-shadow-1 ltn__border position-relative pb-10">
                    <Tab.Pane eventKey="first">
                      <div className="car-dealer-form-inner">
                        <form onSubmit={handleSubmit} className="ltn__car-dealer-form-box">
                          <Row>
                            <Col
                              xs={9}
                              className="ltn__car-dealer-form-item"
                            >
                                <input
                                   type="text" 
                                   onChange={(e) => setSearch(e.target.value)}
                                  placeholder="Search your keyword..."
                                />
                            </Col>
                            <Col
                              xs={12}
                              lg={3}
                              className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar"
                            >
                              <div className="btn-wrapper text-center mt-0">
                                <button
                                  type="submit"
                                  className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                >
                                  Search
                                </button>
                              </div>
                            </Col>
                          </Row>
                        </form>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default CarDealerSearchForm;
