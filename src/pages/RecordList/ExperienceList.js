import images from "../../config/images";
import ButtonComponent from "../../components/button/button";
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
  Modal,
} from "antd";
import { AiOutlineFileSearch } from "react-icons/ai";
import "./ExperienceList.less";

function ExperienceListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="ExperienceList">
      <Row type="flex" justify="center" align="middle">
        <Col lg={16} md={18} sm={20} xs={22} className="RecordListwarp">
          <Row type="flex" justify="center">
            <Col md={24} sm={24} xs={24}>
              <p className="RecordListTitle">體驗紀錄</p>

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
                          <Button
                            className="PetCardBtn"
                            type="primary"
                            onClick={showModal}
                          >
                            查看詳細
                          </Button>
                          <Modal
                            title="寵物資訊"
                            className="PetListModal"
                            open={isModalOpen}
                            onCancel={handleCancel}
                            cancelText="返回"
                          >
                            <Row
                              className="PetListDetail"
                              type="flex"
                              justify="center"
                            >
                              <Col>
                                <Row type="flex" justify="center" align="top">
                                  <Col xl={8} md={8} sm={8} xs={24} className="RearingPetJmimgWarp">
                                    <img
                                      className="RearingPetJmimg"
                                      src={images.jm}
                                    />
                                  </Col>

                                  <Col xl={14} md={14} sm={16} xs={22}>
                                    <Row type="flex" align="middle">
                                      <Col
                                        xl={12}
                                        md={12}
                                        sm={12}
                                        xs={12}
                                        className="PetCardTextDetail"
                                      >
                                        <div className="PetCardTextDetailText">
                                          姓名：阿金
                                        </div>
                                        <div className="PetCardTextDetailText">
                                          體型：大
                                        </div>
                                        <div className="PetCardTextDetailText">
                                          年齡：5
                                        </div>
                                      </Col>
                                      <Col
                                        xl={12}
                                        md={12}
                                        sm={12}
                                        xs={12}
                                        className="PetCardTextDetail"
                                      >
                                        <div className="PetCardTextDetailText">
                                          品種：拉不拉多
                                        </div>
                                        <div className="PetCardTextDetailText">
                                          性別：女
                                        </div>
                                        <div className="PetCardTextDetailText">
                                          絕育狀況：已結紮
                                        </div>
                                      </Col>

                                      <Col span={24}>
                                        <div className="PetCardTextDetailText">
                                          飼養期間：2016/08~2016/08
                                        </div>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                                <Row type="flex" align="top"  justify="center" className="PetCardTextDetailbottom">
                                  <Col xl={11}
                                        md={11}
                                        sm={11}
                                        xs={24} >
                                      <div className="PetCardTextDetailBottomTitle">個性</div>
                                      <hr></hr>
                                      <p className="PetCardTextDetailText">羞，內向。是個小公主
                                        同時也是個吃貨，每次吃完都嫌不夠</p>
                                  </Col>
                                  <Col xl={11}
                                        md={11}
                                        sm={11}
                                        xs={24} >
                                      <div className="PetCardTextDetailBottomTitle">提醒</div>
                                      <hr></hr>
                                      <p className="PetCardTextDetailText">運動量很大也需要大量的運動</p>
                                  </Col>


                                </Row>


                              </Col>
                            </Row>
                          </Modal>
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
