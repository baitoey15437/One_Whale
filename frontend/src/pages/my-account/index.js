import { Layout } from "@/layouts";
import { useState, useEffect } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";


import Dashboard from "./tab/dashboard";
import Profiles from "./tab/profiles";
import Address from "./tab/address";
import Assets from "./tab/assets";
import MyBook from "./tab/mybook";
import Payments from "./tab/payments";
import Document from "./tab/document";
import Contact from "./tab/contact";
import Schedule from "./tab/schedule";
import ChangePassword from "./tab/changepassword";
import Logout from "./tab/logout";

function MyAccount() {

  const [menu, setMenu] = useState([]);
  const [data, setData] = useState([]);

  const location = window.location.pathname
  const license_id = JSON.parse(localStorage.getItem('license_id'));
  const users_id = JSON.parse(localStorage.getItem('users_id'));

  const [document_type, setDocumentType] = useState([]);
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
        try {
          const response_menu = await fetch(`http://localhost:3001/api/menu/${license_id}`);
          const data_menu = await response_menu.json();
          const response_content = await fetch(`http://localhost:3001/api/my_account/${users_id}`);
          const data_content = await response_content.json();
          setMenu(data_menu);
          setData(data_content);
          const response_document_type = await fetch(`http://localhost:3001/api/document_type/attribute/${'supplier'}`);
          const data_document_type = await response_document_type.json();
          setDocumentType(data_document_type[0].id);
          const response_attribute = await fetch(`http://localhost:3001/api/attribute/${data_document_type[0].id}`);
          const data_attribute = await response_attribute.json();
          setAttributes(data_attribute);
        } catch (error) {
            console.error("Error Fetching",error);
        }
    }
    fetchData();
  }, []);

  const Tabdata = (tabname) => {
    switch(tabname){
      case "Dashboard":
        return <Dashboard/>
        break;
      case "Profiles":
        return <Profiles data = {data}/>
        break;
      case "Address":
        return <Address data = {data.address}/>
        break;
      case "Assets":
        return <Assets data = {data.sup[0]}/>
        break;
      case "MyBook":
        return <MyBook/>
        break;
      case "Payments":
        return <Payments/>
        break;
      case "Document":
        return <Document data = {data.sup[0]} attributes = {attributes}/>
        break;
      case "Contact":
        return <Contact/>
        break;
      case "Schedule":
        return <Schedule/>
        break;
      case "ChangePassword":
        return <ChangePassword/>
        break;
      case "Logout":
        return <Logout/>
        break;
      default:
          console.log("Unknown");
    }
  }

  return (
    <>
      <Layout topbar={true}>
        <ShopBreadCrumb
          title="My Account"
          sectionPace=""
          currentSlug="My Account"
        />

        {/* <!-- LOGIN AREA START --> */}
        <div className="liton__wishlist-area pb-70">
          <Container>
            <Row>
              <Col xs={12}>
                {/* <!-- PRODUCT TAB AREA START --> */}
                <div className="ltn__product-tab-area">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="ltn_tab_1_1"
                  >
                    <Row>
                      <Col xs={12} lg={4}>
                        <div className="ltn__tab-menu-list mb-50">
                          <Nav variant="pills" className="flex-column">

                          {menu.map((data, key) => {
                              return (
                                <Nav.Item>
                                  <Nav.Link eventKey={`ltn_tab_1_${key+1}`}>
                                  {data.menu_name}
                                  </Nav.Link>
                                </Nav.Item>
                                  );
                                })}
                          </Nav>
                        </div>
                      </Col>
                      <Col xs={12} lg={8}>
                        <Tab.Content>
                          {menu.map((data, key) => {
                            return (
                            <Tab.Pane eventKey={`ltn_tab_1_${key+1}`}>
                              {Tabdata(data.menu_name.replace(/\s+/g, ""))}
                              
                            </Tab.Pane>
                            );
                          })}
                        </Tab.Content>  
                      </Col>
                    </Row>
                  </Tab.Container>
                </div>
                {/* <!-- PRODUCT TAB AREA END --> */}
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </>
  );
}

export default MyAccount;
