import { useState } from "react";
import { Layout, LayoutTwo,LayoutThree } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ModalData from "@/components/modals/modal";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import Link from "next/link";

function Register() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState();
  const [status, setStatus] = useState();
  
  const handleShow = () => setShow(true);

  const [firstname , setFirstname] = useState('');
  const [lastname , setLastname] = useState('');
  const [email , setEmail] = useState('');
  const [phone , setPhone] = useState('');
  const [password , setPassword] = useState('');
  const [confirmPassword , setConfirmPassword] = useState('');
  const [isValidFirstname, setIsValidFirstname] = useState(false);
  const [isValidLastname, setIsValidLastname] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(false);

  const handleChangeEmail = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
  };

  const handleChangePassword = (event) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);
    setIsValidPassword(inputPassword.length >= 6);
    setIsValidConfirmPassword(inputPassword === confirmPassword);
  };

  const handleChangeConfirmPassword = (event) => {
    const inputConfirmPassword = event.target.value;
    setConfirmPassword(inputConfirmPassword);
    setIsValidConfirmPassword(inputConfirmPassword === password);
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'firstname') {
      setFirstname(value);
      setIsValidFirstname(value.trim().length > 0);
    } else if (name === 'lastname') {
      setLastname(value);
      setIsValidLastname(value.trim().length > 0);
    } else if (name === 'phone') {
      setPhone(value);
      setIsValidPhone(value.trim().length > 0);
    }
  };

  const validateEmail = (email) => {
    // ใช้ Regular Expression เพื่อตรวจสอบรูปแบบของ email address
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isFormValid = isValidFirstname && isValidLastname && isValidPhone && isValidEmail && isValidPassword && isValidConfirmPassword
    if (isFormValid) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
    "firstname": firstname,
    "lastname": lastname,
    "email": email,
    "tel_contact": phone,
    "password": password,
    "license_id": "1"
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch("http://localhost:3001/api/create_account", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result.err)
          if(result.err){
            setMessage(result.err);
            setStatus(1);
          }else{
            setMessage('Your account has been create successfully');
            setStatus(0);
          }
          handleShow()
        })
        .catch((error) => console.error(error));
      } else {
        // แสดงข้อความข้อผิดพลาดหรือทำอย่างอื่น
        alert('กรุณากรอกข้อมูลให้ครบถ้วน')
      }
    }

   

  return (
    <>
      <Layout topbar={true}>
        <ShopBreadCrumb title="Account" sectionPace="" currentSlug="Register" />

        {/* <!-- LOGIN AREA START (Register) --> */}
        <div className="ltn__login-area pb-110">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="section-title-area text-center">
                  <h1 className="section-title">
                    Register <br />
                    <div className="color-secondary">Customer</div> Account
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                    <br />
                    Sit aliquid, Non distinctio vel iste.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={{ span: 6, offset: 3 }}>
                <div className="account-login-inner">
                  <form onSubmit={handleSubmit} className="ltn__form-box contact-form-box">
                    <label>
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      value={firstname}
                      onChange={handleChange}
                    />
                    {!isValidFirstname && <p className="ltn__bs-red">Please enter a valid first name</p>}
                    <label>
                      Last Name
                      </label>
                    <input
                      type="text"
                      name="lastname"
                      value={lastname}
                      onChange={handleChange}
                    />
                     {!isValidLastname && <p className="ltn__bs-red">Please enter a valid last name</p>}
                     <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      onChange={handleChangeEmail}
                    />
                    {!isValidEmail && <p className="ltn__bs-red">Please enter a valid email address</p>}
                    <label>
                    Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={handleChange}
                    />
                     {!isValidPhone && <p className="ltn__bs-red">Please enter a valid phone number</p>}
                     <label>
                          Password
                          </label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChangePassword}
                    />
                     {!isValidPassword && <p className="ltn__bs-red">Password must be at least 6 characters long</p>}
                     <label>Confirm  Password</label>
                    <input
                      type="password"
                      name="confirmpassword"
                      onChange={handleChangeConfirmPassword}
                    />
                     {!isValidConfirmPassword && <p className="ltn__bs-red">Passwords do not match</p>}
                    <div className="btn-wrapper">
                      <button 
                        className="theme-btn-1 btn reverse-color btn-block"
                        type="submit"
                      >
                        CREATE ACCOUNT
                      </button>
                    </div>
                  </form>
                  <div className="by-agree text-center">
                    <p>By creating an account, you agree to our:</p>
                    <p>
                      <Link href="#">
                        TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp;
                        PRIVACY POLICY
                      </Link>
                    </p>
                    <div className="go-to-btn mt-50">
                      <Link href="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
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
    </>
  );
}

export default Register;
