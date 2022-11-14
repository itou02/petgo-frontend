import React from "react";
import ButtonComponent from "../../components/button/button";
import { Row, Col, Modal, Button } from "antd";
import { useState ,useEffect} from "react";
import images from "../../config/images";
import { MdAddBox } from "react-icons/md";
import "./index.less";
import axios from 'axios';


const contentStyle = {
  height: "450px",
  color: "#fff",
  // lineHeight: '30px',
  textAlign: "center",
  background: "#364d79",
};

function Comment() {
  const [posts,setPosts]=useState([])
  useEffect(() => {
  // fetch_data()
      const config = {
      url: 'http://127.0.0.1:8000/api/pet-list',  // 只有此為必需
      method: 'get', // 大小寫皆可
      headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Headers':'*',
          'X-Requested-With':'XMLHttpRequest',
      },
      // data: {
      //   email: "bruce@gmail.com",
      //   password: "vul t/6u.4"
      // },
      responseType: 'json', // 伺服器回應的數據類型
      }
      try {
          axios(config)
          .then(res =>{
              console.log(res.data.req)
              setPosts(res.data.req)
          },[]);   
      }
      catch (error) {
          throw error;
          // Do  with error
      }
  },[]);
  console.log('posts=>',posts);

  return (
    <div id="Petlist">
      <Row align="center" className="container">
        <Col lg={16} md={18} sm={20} xs={22} className="Commentlist">
          <Row className="Commentlistrow">
            <Col className="Commenttitle">
              <h1>寵物清單</h1>

              <div className="addiconWarp">
                <a href="/pet-list/pet">
                  <MdAddBox className="addicon" />
                </a>
              </div>
            </Col>

            <Col lg={24}
                  md={24}
                  sm={24}
                  xs={24}>
              <Row justify="center"    className="PetlistCardWarp">
              
                <Col
                  lg={18}
                  md={20}
                  sm={22}
                  xs={24}
               
                >
                  <Row className="ListPetCard" justify="center" align="end">
                    <Col xl={19} lg={19} md={24} sm={24} xs={24}>
                      <Row type="flex" align="strat">
                        <Col
                          xxl={6}
                          xl={7}
                          lg={8}
                          md={8}
                          sm={8}
                          xs={10}
                          className="listPetJmimgWarp"
                        >
                          <img className="listPetJmimg" src={images.jm} />
                        </Col>
                        <Col
                          xxl={18}
                          xl={16}
                          lg={16}
                          md={16}
                          sm={16}
                          xs={14}
                          className="PetCardCenter"
                        >
                          <Row>
                            <Col>
                              <p className="PetCardName">吉米</p>
                            </Col>
                          </Row>
                          <Row type="flex" align="bottom">
                            <Col xl={24} lg={24} md={24} sm={22} xs={22}>
                              <Row align="middle">
                                <span className="PetCardText">
                                  品種：傑克羅素耿
                                </span>
                                <span className="PetCardText">性別：男</span>
                                <span className="PetCardText">年齡：5</span>

                                <span className="PetCardText">
                                  體驗日期：2022/06/12-2022/06/30
                                </span>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>

                    <Col
                      xl={5}
                      lg={5}
                      md={24}
                      sm={24}
                      xs={24}
                      className="ListButtonWarp"
                    >
                      <a href="/Record/Experience/detailed">
                        <ButtonComponent
                          text="查看詳細"
                          size="large"
                          name="more-detail"
                        />
                      </a>
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
