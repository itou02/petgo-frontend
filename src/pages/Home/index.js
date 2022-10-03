import React from 'react';
import { Carousel } from 'antd';
import ButtonComponent from "../../components/button/button";
import { Row, Col, message, Card } from 'antd';
import { useEffect, useState } from "react";
import Slider from "react-slick";
import images from '../../config/images';
import './index.less'


const contentStyle = {
  height: '450px',
  color: '#fff',
  // lineHeight: '30px',
  textAlign: 'center',
  background: '#364d79',
};

function Index(props) {
  const [dotPosition, setDotPosition] = useState('top');

  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };
  const petGo = () => {
    message.petGo("預約成功");
  };
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  console.log("111", windowSize);

  const autoplay = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 100,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const { Meta } = Card;
  return (
    <div id='Home'>
      <Row className='containter'>
        <Col span={16} >
          <div className='Carousel'>
            <div className='Carouselson'>
              <Slider {...autoplay}>
                <div className='autoblock'>
                  <img src={images.auto1} />
                </div>
                <div className='autoblock'>
                  <img src={images.auto1} />
                </div>
                <div className='autoblock'>
                  <img src={images.auto1} />
                </div>
              </Slider>
            </div>
          </div>
          <div className='Chooseall'>
            <Row className='Choosemain'>
              <Col xs={24} md={11} className='Choose'>
                <div className='title'><h1 style={{ color: '#FF6B6B' }}>飼主體驗</h1></div>
                <span><h1>飼主體驗是一個基於......</h1></span>
                <ButtonComponent
                  text="前往體驗"
                  size="large"
                  name="pet"
                  handleSubmit={petGo}
                />
              </Col>
              <Col xs={24} md={11} className='Choose'>
                <div className='title'><h1 style={{ color: 'rgba(251, 213, 52, 0.94)' }}>寵物供養</h1></div>
                <span><h1>寵物供養是一個基於......</h1></span>
                <ButtonComponent
                  text="前往體驗"
                  size="large"
                  name="together"
                  handleSubmit={petGo}
                />
              </Col>
            </Row>
          </div>
          <div className='Comment'>
            <div className="site-card-wrapper">
              <Slider {...settings}>
                <div className='Commentcard'>
                  <Row className="bannerBlock">
                    <Col sm={24} className="pictureBlock">
                      <div className="imgblock">
                        {/* <img src={images.gold} /> */}
                      </div>
                    </Col>
                    <Col sm={24} md={12} className="titleBlock">
                      <span>
                        <h1 >
                          <strong>1</strong>
                        </h1></span>
                    </Col>
                  </Row>
                </div>
                <div className='Commentcard'>
                  <Row className="bannerBlock">
                    <Col sm={24} className="pictureBlock">
                      <div className="imgblock">
                        {/* <img src={images.gold} /> */}
                      </div>
                    </Col>
                    <Col sm={24} md={12} className="titleBlock">
                      <span>
                        <h1 >
                          <strong>1</strong>
                        </h1></span>
                    </Col>
                  </Row>
                </div>
                <div className='Commentcard'>
                  <Row className="bannerBlock">
                    <Col sm={24} className="pictureBlock">
                      <div className="imgblock">
                        {/* <img src={images.gold} /> */}
                      </div>
                    </Col>
                    <Col sm={24} md={12} className="titleBlock">
                      <span>
                        <h1 >
                          <strong>1</strong>
                        </h1></span>
                    </Col>
                  </Row>
                </div>
              </Slider>
            </div>
          </div>
          <div className='Idea'>
            <Row>
              <Col span={24} className='title'><h1>我們的理念</h1></Col>
              <Col span={24} className='introduce'>
                <Row className="bannerBlock">
                  <Col sm={24} md={12}>
                    <div className="imgBlock">
                      <img src={images.gold} />
                    </div>
                  </Col>
                  <Col sm={24} md={12} className="titleBlock">
                    <span level={windowSize.width < 576 ? 4 : 2}>
                      <h1 >
                        <strong>領養代替購買<br></br>
                          減少寵物拋棄率</strong>
                      </h1></span>
                  </Col>
                </Row>
                {/* <Row className='introduce'>
                  <Col sm={18} md={10}>
                    <div className="imgBlock">
                      <img src={images.gold} />
                    </div>
                  </Col>
                  <Col sm={20} md={10}><h1 >以其他形式給牠們一個家，...............................
                    ............................................
                    ............................................
                    ............................................
                    領養代替購買<br></br>
                    減少寵物拋棄率</h1></Col>
                </Row> */}
              </Col>

            </Row>
          </div>
        </Col>

      </Row>
    </div>

  )

}

export default Index;
// function Index(props) {

//   const success = () => {
//     message.success("預約成功");
//   };
//   const warning = () => {
//     message.warning('滾出去');
//   };
//   return (
//     <div>
//       <ButtonComponent
//         text="立即預約"
//         size="large"
//         handleSubmit={success}
//       />
//       <ButtonComponent
//         text="退出頁面"
//         size="large"
//         handleSubmit={warning}
//       />
//     </div>

//   )
// }


