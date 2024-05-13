import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TitleSection from "@/components/titleSection";
import { productSlug } from "@/lib/product";

const Asset = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
        try {
          const response = await fetch("http://localhost:3001/asset");
          const data = await response.json();
          setData(data);
        } catch (error) {
            console.error("Error Fetching",error);
        } 
    }
    fetchData();
  }, []);

  const servicebtn=true
  const iconTag=false
  const headingClasses="section-subtitle-2"
  const titleSectionData={
          sectionClasses: "text-center",
          subTitle: "Our Asset",
          title: "Our Main Asset"}

// console.log(data)


return (
  <>
  <div className={`ltn__feature-area pt-115 pb-90`}>
    <Container>
      <Row>
        <Col xs={12}>
          <TitleSection
            titleSectionData={titleSectionData}
            sectionClasses={titleSectionData.sectionClasses}
            headingClasses={headingClasses}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        {data.map((item, key) => {
          return (
            <Col key={key} xs={12} sm={6} lg={4}>
              <div
                className={`ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 ${
                  item.active ? "active" : ""
                }`}
              >
                <div className="ltn__feature-icon">
                  {iconTag ? (
                    <span>
                      <i className={`${item.icon}`}></i>
                    </span>
                  ) : (
                    <img
                      src={item.asset_icon}
                      // alt={`${item.asset_type}`}
                    />
                  )}
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link href={`/shop/right-sidebar?asset=${item.asset_id}`}>{item.asset_type}</Link>
                  </h3>
                  <p>{item.asset_det}</p>

                  {servicebtn ? (
                    <Link
                      className="ltn__service-btn"
                      href={`/shop/right-sidebar?asset=${item.asset_id}`}
                    >
                      Find More

                      <i className="flaticon-right-arrow"></i>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  </div>
</>

)
}

export default Asset;