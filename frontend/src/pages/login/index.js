import { useState } from "react";
import { Layout } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import ModalData from "@/components/modals/modal";
import Link from "next/link";

function Login() {

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState();
  const [status, setStatus] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = event => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
    "email": email,
    "password": password
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };


    fetch("http://localhost:3001/api/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {console.log(result)
          if(result.err){
            setMessage(result.err);
            setStatus(1);
            handleShow()
          }else{
            localStorage.setItem('users_id', JSON.stringify(result.users_id));
            localStorage.setItem('status_login', JSON.stringify(result.status_login));
            localStorage.setItem('license_id', JSON.stringify(result.license_id));
            window.location.href = '/';
          }
          
          ;
      })
        .catch((error) => console.error(error));
    }

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');


  return (
    <>
      <Layout topbar={true}>
        <ShopBreadCrumb title="Account" sectionPace="" currentSlug="Login" />

        {/* <!-- LOGIN AREA START --> */}
        <div className="ltn__login-area pb-65">
          <div className="container">
            <Row>
              <Col xs={12}>
                <div className="section-title-area text-center">
                  <h1 className="section-title">Sign In <br />To  Your Account</h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                    Sit aliquid,  Non distinctio vel iste.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={6}>
                <div className="account-login-inner ltn__form-box contact-form-box">
                  <form onSubmit={handleSubmit}>
                  <input
                      type="text"
                      name="email"
                      placeholder="Email*"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password*"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="btn-wrapper mt-0">
                      <button className="theme-btn-1 btn btn-block" type="submit">SIGN IN</button>
                    </div>
                  </form>
                  <div className="go-to-btn mt-20">
                    <button onClick={handleShow}><small>FORGOTTEN YOUR PASSWORD?</small></button>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className="account-create text-center pt-50">
                  <h4>{`DON'T HAVE AN ACCOUNT?`}</h4>
                  <p>Add items to your wishlistget personalised recommendations <br />
                    check out more quickly track your orders register</p>
                  <div className="btn-wrapper">
                    <Link href="/register" className="theme-btn-5 btn black-btn">CREATE ACCOUNT for Customer</Link>
                  </div>
                  <div className="btn-wrapper">
                  <Link href="/register/supplier1" className="theme-btn-2 btn black-btn">&nbsp;&nbsp;CREATE ACCOUNT for Supplier&nbsp;&nbsp;</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* <!-- LOGIN AREA END --> */}
        <ModalData 
          show={show}  
          onHide={() => setShow(false)}
          status={status}
          message={message}  
          action="/login"
        />

      </Layout>


      {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="md"
        className="ltn__modal-area"
      >
        <Modal.Header>
          <Button
            onClick={handleClose}
            className="close"
            variant="secondary"

          >
            <span aria-hidden="true">&times;</span>
          </Button>
        </Modal.Header>

        <Modal.Body>
          <div className="ltn__quick-view-modal-inner">
            <div className="modal-product-item">
              <div className="row">
                <div className="col-12">
                  <div className="modal-product-info text-center">
                    <h4>FORGET PASSWORD?</h4>
                    <p className="added-cart"> Enter you register email.</p>
                    <form action="#" class="ltn__form-box">
                      <input type="text" name="email" placeholder="Type your register email*" />
                      <div className="btn-wrapper mt-0">
                        <button className="theme-btn-1 btn btn-full-width-2" type="submit">Submit</button>
                      </div>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}
    </>
  );
}

export default Login;
