import images from "../../config/images";
import React, { useState } from "react";
import {
  Select,
  Col,
  Row,
  Button,
  Form,
  Input,
  Radio,
  DatePicker,
  message,
  Upload,
} from "antd";
import { AiOutlineFileSearch } from "react-icons/ai";
import "./ExperienceList.less";

function ExperienceListPage() {

  
  return (
    <div className="ExperienceList">
      <Row type="flex" justify="center" align="middle">
        <Col lg={16} md={18} sm={20} xs={22} className="RecordListwarp">
          <Row type="flex" justify="center">
            <Col md={24} sm={24} xs={24}>
              <p className="RecordListTitle">正在共養</p>

              <Row type="flex" justify="center">
                <Col
                  md={18}
                  sm={20}
                  xs={22}
                  className="ListWarp"
                  type="flex"
                  justify="center"
                  align="middle"
                >
                  <Row
                    className="ListPetCard"
                    type="flex"
                    justify="center"
                    align="middle"
                  >
                    <Col md={6} sm={8} xs={10}>
                      <img className="RearingPetJmimg" src={images.jm} />
                    </Col>
                    <Col md={18} sm={16} xs={14}>
                      <Row type="flex" align="middle">
                        <Col>
                          <p className="PetCardName">吉米</p>
                        </Col>
                      </Row>
                      <Row type="flex" align="bottom">
                        <Col xl={14} md={24} sm={22} xs={22}>
                          <div className="PetCardContentList">
                            <div className="PetCardContent1">
                              <div className="PetCardText">
                                品種：傑克羅素耿
                              </div>
                              <div className="PetCardText">年齡：5</div>
                              <div className="PetCardText">性別：男</div>
                            </div>
                            <div className="PetCardContent1">
                              <div className="PetCardText">體型：中型</div>
                              <div className="PetCardText">
                                飼養期間：2016/08~
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col xl={10} md={0} sm={0} xs={0}>
                          <Button className="PetCardBtn">查看詳細</Button>
                        </Col>
                      </Row>

                    </Col>
                  </Row>

                  <Row
                    className="ListPetCard"
                    type="flex"
                    justify="center"
                    align="middle"
                  >
                    <Col md={6} sm={8} xs={10}>
                      <img className="RearingPetJmimg" src={images.jm} />
                    </Col>
                    <Col md={18} sm={16} xs={14}>
                      <Row type="flex" align="middle">
                        <Col>
                          <p className="PetCardName">吉米</p>
                        </Col>
                      </Row>
                      <Row type="flex" align="bottom">
                        <Col xl={14} md={24} sm={22} xs={22}>
                          <div className="PetCardContentList">
                            <div className="PetCardContent1">
                              <div className="PetCardText">
                                品種：傑克羅素耿
                              </div>
                              <div className="PetCardText">年齡：5</div>
                              <div className="PetCardText">性別：男</div>
                            </div>
                            <div className="PetCardContent1">
                              <div className="PetCardText">體型：中型</div>
                              <div className="PetCardText">
                                飼養期間：2016/08~
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col xl={10} md={0} sm={0} xs={0}>
                          <Button className="PetCardBtn">查看詳細</Button>
                        </Col>
                      </Row>

                    </Col>
                   
                  </Row>

                  <Row
                    className="ListPetCard"
                    type="flex"
                    justify="center"
                    align="middle"
                  >
                    <Col md={6} sm={8} xs={10}>
                      <img className="RearingPetJmimg" src={images.jm} />
                    </Col>
                    <Col md={18} sm={16} xs={14}>
                      <Row type="flex" align="middle">
                        <Col>
                          <p className="PetCardName">吉米</p>
                        </Col>
                      </Row>
                      <Row type="flex" align="bottom">
                        <Col xl={14} md={24} sm={22} xs={22}>
                          <div className="PetCardContentList">
                            <div className="PetCardContent1">
                              <div className="PetCardText">
                                品種：傑克羅素耿
                              </div>
                              <div className="PetCardText">年齡：5</div>
                              <div className="PetCardText">性別：男</div>
                            </div>
                            <div className="PetCardContent1">
                              <div className="PetCardText">體型：中型</div>
                              <div className="PetCardText">
                                飼養期間：2016/08~
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col xl={10} md={0} sm={0} xs={0}>
                          <Button className="PetCardBtn">查看詳細</Button>
                        </Col>
                      </Row>

                    </Col>
                   
                  </Row>

                  <Row
                    className="ListPetCard"
                    type="flex"
                    justify="center"
                    align="middle"
                  >
                    <Col md={6} sm={8} xs={10}>
                      <img className="RearingPetJmimg" src={images.jm} />
                    </Col>
                    <Col md={18} sm={16} xs={14}>
                      <Row type="flex" align="middle">
                        <Col>
                          <p className="PetCardName">吉米</p>
                        </Col>
                      </Row>
                      <Row type="flex" align="bottom">
                        <Col xl={14} md={24} sm={22} xs={22}>
                          <div className="PetCardContentList">
                            <div className="PetCardContent1">
                              <div className="PetCardText">
                                品種：傑克羅素耿
                              </div>
                              <div className="PetCardText">年齡：5</div>
                              <div className="PetCardText">性別：男</div>
                            </div>
                            <div className="PetCardContent1">
                              <div className="PetCardText">體型：中型</div>
                              <div className="PetCardText">
                                飼養期間：2016/08~
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col xl={10} md={0} sm={0} xs={0}>
                          <Button className="PetCardBtn">查看詳細</Button>
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

export default ExperienceListPage;
