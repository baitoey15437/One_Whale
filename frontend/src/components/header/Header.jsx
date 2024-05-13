import { useState, useEffect } from "react";
import Link from "next/link";
import HeaderTopBarTwo from "./headerTopBar/headerTopBarStyleTwo";
import HeaderCartMenu from "./elements/headerCartMenu";
import MobileMenu from "./elements/mobileMennu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import clsx from "clsx";
import { useSelector } from "react-redux";
import MenuList from "@/components/header/elements/menuList";
import { FaCartArrowDown, FaRegUser, FaSearch, FaTimes,FaBell  } from "react-icons/fa";

const HeaderStyle = function ({ SetToggleClassName, topbar }) {

  // console.log("status_login : " + localStorage.getItem('status_login'));
  // console.log("license_id : " + localStorage.getItem('license_id'));
  // console.log("users_id : " + localStorage.getItem('users_id'));

  const location = window.location.pathname;

  const [status_login, setLogin] = useState();
  const [license_id, setLicense] = useState();

  useEffect(() => {
    if(localStorage.getItem('status_login') === "undefined"){
      setLogin("N");
      setLicense(null)
    }else{
      setLogin(JSON.parse(localStorage.getItem('status_login')));
      setLicense(JSON.parse(localStorage.getItem('license_id')))
    }
  }, []);

  const [cartMenuOpener, cartMenuOpenerSet] = useState(false);
  const [overlayBtn, SetoverlayBtn] = useState(false);
  const [offCanVastoggleBtn, SetOffCanVastoggleBtn] = useState(false);

  function offcanVasToggler() {
    SetToggleClassName(true);
    SetoverlayBtn(true);
    SetOffCanVastoggleBtn((offCanVastoggleBtn) => !offCanVastoggleBtn);
  }

  function cartMenu() {
    SetoverlayBtn(true);
    cartMenuOpenerSet((cartMenuOpener) => !cartMenuOpener);
    SetToggleClassName(false);
  }

  function closeSideBar() {
    SetoverlayBtn(false);
    cartMenuOpenerSet(false);
    SetOffCanVastoggleBtn(false);
  }

  function overlay() {
    SetoverlayBtn((overlayBtn) => !overlayBtn);
    cartMenuOpenerSet(false);
    SetOffCanVastoggleBtn(false);
    SetToggleClassName(false);
  }

  const [scroll, setScroll] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    const header = document.querySelector(".ltn__header-sticky");
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const location_className = () => {
    if(location == "/"){
      return "ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent";
    }else{
      return "ltn__header-area ltn__header-5"
    };
  };

  const logout = () => {
    alert('ออกจากระบบ');
    localStorage.setItem('status_login', JSON.stringify('N'));
    localStorage.setItem('users_id', JSON.stringify(null));
    localStorage.setItem('license_id', JSON.stringify(null));
    window.location.href = "/";
  }

  const [searchFormOpener, searchFormOpenerSet] = useState(false);

  
  function offcanVasToggler() {
    SetToggleClassName(true);
    SetoverlayBtn(true);
    SetOffCanVastoggleBtn((offCanVastoggleBtn) => !offCanVastoggleBtn);
  }

  function searchForm() {
    searchFormOpenerSet((searchFormOpener) => !searchFormOpener);
  }

  function cartMenu() {
    SetoverlayBtn(true);
    cartMenuOpenerSet((cartMenuOpener) => !cartMenuOpener);
    SetToggleClassName(false);
  }

  function closeSideBar() {
    SetoverlayBtn(false);
    cartMenuOpenerSet(false);
    SetOffCanVastoggleBtn(false);
  }

  function overlay() {
    SetoverlayBtn((overlayBtn) => !overlayBtn);
    cartMenuOpenerSet(false);
    SetOffCanVastoggleBtn(false);
    SetToggleClassName(false);
  }

  const { cartItems } = useSelector((state) => state.cart);

  
  useEffect(() => {
    const header = document.querySelector(".ltn__header-sticky");
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  const { products } = useSelector((state) => state.product);
  const [currentItems, setCurrentItems] = useState([]);

  const [query, setQuery] = useState("");
  const keys = ["title"];
  const SearchProduct = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  const updatedProducts = query.length ? SearchProduct(products) : [];

  useEffect(() => {
    setCurrentItems(updatedProducts);
  }, [products, query]);


  return (
    <>
      <header className={location_className()}>
        {topbar ? <HeaderTopBarTwo /> : null}
        <div
          className={clsx(
            "ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black",
            scroll > headerHeight && "sticky-active"
          )}
        >
          <Container>
            <Row>
              <Col>
                <div className="site-logo-wrap">
                  <div className="site-logo">
                    <Link href="/">
                      <img src="/img/logo-2.png" alt="Logo" />
                    </Link>
                  </div>
                </div>
              </Col>
              <Col className="header-menu-column">
                <div className="header-menu d-none d-xl-block">
                  <nav>
                    <div className="ltn__main-menu">
                      <MenuList addListing={status_login == "Y" ? false : true} />
                    </div>
                  </nav>
                </div>
              </Col>
              {status_login == "Y" ? (
                <Col className="ltn__header-options ltn__header-options-2 mb-sm-20">
                {/* <!-- header-search-1 --> */}
                <div className="header-search-wrap">
                  <div
                    className={`header-search-1`}
                  >
                    <div className="mini-cart-icon user-menu">
                    <button
                      onClick={cartMenu}
                      className={`ltn__utilize-toggle ${
                        cartMenuOpener ? "close" : ""
                      }`}
                    >
                      <FaBell />
                    </button>
                    </div>
                  </div>
                </div>
                <div className="mini-cart-icon">
                  <button
                    onClick={cartMenu}
                    className={`ltn__utilize-toggle ${
                      cartMenuOpener ? "close" : ""
                    }`}
                  >
                    <FaCartArrowDown />
                    {/* <sup>6</sup> */}

                    {cartItems.length > 0 ? (
                      <sup>{cartItems.length}</sup>
                    ) : (
                      <sup>0</sup>
                    )}
                  </button>
                </div> 
                <div className={`ltn__drop-menu user-menu ${license_id == "1" ? "bg-cus" : "bg-sup"}`}>
                  <ul>
                    <li>
                      <Link href="/my-account">
                        <FaRegUser />
                        <span>{license_id == "1" ? "Customer " : "Supplier "} Account</span>
                      </Link>
                      <ul>
                      <li>
                          <Link href="/my-account">My Account</Link>
                        </li>
                        <li>
                          <Link href="/wishlist">Wishlist</Link>
                        </li>
                        <li>
                          <Link href="" onClick={logout}>Logout</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </Col>
              ) : ""}
              
            </Row>
          </Container>
        </div>
      </header>

      <HeaderCartMenu
        cartMenu={cartMenu}
        cartMenuOpener={cartMenuOpener}
        closeSideBar={closeSideBar}
      />

      <MobileMenu
        offCanVastoggleBtn={offCanVastoggleBtn}
        offcanVasToggler={offcanVasToggler}
        closeSideBar={closeSideBar}
      />

      <div
        className="ltn__utilize-overlay"
        style={{
          display: overlayBtn ? "block" : "none",
          opacity: overlayBtn ? "1" : "0",
        }}
        onClick={overlay}
      ></div>
    </>
  );
};

export default HeaderStyle;
