import Link from "next/link";
import { useState,useEffect   } from "react";
import Slider from "react-slick";
import { FaHome, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Container, Col, Row } from "react-bootstrap";

function HeroSectionStyleThree() {
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

  const Herosettings = {
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    fade: true,
    cssEase: "linear",
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const handleClickScroll = () => {
    const element = document.getElementById('asset');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () =>{
        try {
          const response = await fetch("http://localhost:3001/contact");
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
             <Slider
          {...Herosettings}
          className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1"
        >
          {data.map((item, key) => {
            return (
              <div key={key}>
                <div
                className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3 bg-image bg-overlay-theme-black-60"
                  style={{
                    backgroundImage: `${item.bg_img}`,
                  }}
                >
                  <div
                    className="ltn__slide-item-inner text-center"
                  >
                    <Container>
                      <Row>
                        <Col xs={12} className="align-self-center">
                          <div className="slide-item-info">
                            <div className="slide-item-info-inner ltn__slide-animation">
                              <h4 className="slide-sub-title animated">
                                {item.subtitle_name}
                              </h4>
                              <h1 className="slide-title text-title animated">
                                {item.title_name}
                              </h1>
                              <div className="slide-brief animated">
                                <p>{item.desc}</p>
                              </div>
                              <div className="btn-wrapper animated">
                                <button className="theme-btn-1 btn btn-effect-1" 
                                  onClick={handleClickScroll}>{item.button_text}
                                </button>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
    </>
  );
}

export default HeroSectionStyleThree;
