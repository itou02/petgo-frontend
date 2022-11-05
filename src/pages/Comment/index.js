import React from "react";
import { Carousel } from "antd";
import ButtonComponent from "../../components/button/button";
import { Row, Col, message, Card } from "antd";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import images from "../../config/images";
import "./index.less";

const contentStyle = {
  height: "450px",
  color: "#fff",
  // lineHeight: '30px',
  textAlign: "center",
  background: "#364d79",
};

function Comment() {
  return (
    <div id="Comment">
      <Row justify="center" align="center" className="container">
        <Col lg={16} md={18} sm={20} xs={22} className="Commentlist">
      
          <div className="Commenttitle">
            <h1>我的評論</h1>
          </div>
          <Row className="CommentlistrowWarp">
            <Col lg={24}
                  md={24}
                  sm={24}
                  xs={24}>
              <Row className="Commentlistshow">
                <Col  lg={18}
                  md={20}
                  sm={22}
                  xs={24}>
                  <Row className="commentary">
                    <Col xl={5} md={6} sm={8} xs={8} className="peopleImage">
                      <img src={images.bb} />
                    </Col>

                    <Col xl={19} md={18} sm={16} xs={16}>
                      <Row className="trimPeopleComm">
                        <Col span={24} className="peopleComm">
                          <h2>白婷鈺</h2>
                          <hr />
                          <p>牠很好帶又乖乖的，個性溫馴可愛</p>
                        </Col>
                        <Col span={24} className="commDate">
                          <span>2022/06/16</span>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="Commentlistshow">
                <Col  lg={18}
                  md={20}
                  sm={22}
                  xs={24}>
                  <Row className="commentary">
                    <Col xl={5} md={6} sm={8} xs={8} className="peopleImage">
                      <img src={images.bb} />
                    </Col>

                    <Col xl={19} md={18} sm={16} xs={16}>
                      <Row className="trimPeopleComm">
                        <Col span={24} className="peopleComm">
                          <h2>白婷鈺</h2>
                          <hr />
                          <p>牠很好帶又乖乖的，個性溫馴可愛</p>
                        </Col>
                        <Col span={24} className="commDate">
                          <span>2022/06/16</span>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>


             
            </Col>

            
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Comment;
