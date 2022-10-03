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
  TextArea,
  Modal,
} from "antd";

import "./SearchRequestForm.less";

function SearchRequestFormPage() {
  const { TextArea } = Input;

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
    <div className="RequestForm">
      <Row type="flex" justify="center">
        <Col lg={16} md={18} sm={20} xs={22} className="RequestFormwarp">
          <Row type="flex" justify="center">
            <Col md={24} xs={24}>
              <p className="RequestFormTitle">尋找共養者</p>
            </Col>

            <Col md={16} xs={22}>
              <Form>
                <Row type="flex" justify="center">
                  <Col md={24}>
                    <p className="formsubtitle">基本資料</p>
                  </Col>

                  <Col md={22}>
                    <div className="formContent">
                      <p className="formContentText">姓名：黃婷鈺</p>
                      <p className="formContentText">性別：女</p>
                      <p className="formContentText">年齡：19</p>
                      <p className="formContentText">地區：台中市大里區</p>
                    </div>

                    <Form.Item
                      className="formContentTextArea"
                      name="SelfIntroduction"
                      label="自我介紹"
                    >
                      <TextArea rows={3} />
                    </Form.Item>

                    <div className="LineWrap">
                      <p className="LineLable">第三方聯絡資訊：</p>
                      <img className="formLineImg" src={images.line} />
                      <Form.Item
                        className="lineFormItem"
                        wrapperCol={{
                          span: 22,
                        }}
                        name="line"
                      >
                        <Input placeholder="輸入ID" />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col md={24}>
                    <hr className="formHr"></hr>
                    <p className="formsubtitle">寵物資訊</p>
                  </Col>
                  <Col md={22}>
                    <Radio.Group
                      className="petListSelect"
                      defaultValue="a"
                      buttonStyle="solid"
                    >
                      <Radio.Button className="ListPetCardRadio" value="a">
                        <Row
                          className="ListPetCardForm"
                          type="flex"
                          justify="center"
                          align="middle"
                        >
                          <Col md={6} sm={8} xs={10}>
                            <img className="RearingPetJmimg" src={images.jm} />
                          </Col>
                          <Col md={13} sm={11} xs={9}>
                            <Row type="flex" align="middle">
                              <Col>
                                <p className="PetCardName">吉米</p>
                              </Col>
                            </Row>
                            <Row type="flex" align="middle">
                              <Col
                                xl={22}
                                md={24}
                                sm={24}
                                xs={24}
                                className="PetCardText"
                              >
                                品種：傑克羅素耿
                              </Col>
                              <Col
                                xl={6}
                                md={8}
                                sm={8}
                                xs={24}
                                className="PetCardText"
                              >
                                年齡：5
                              </Col>
                              <Col
                                xl={6}
                                md={8}
                                sm={8}
                                xs={24}
                                className="PetCardText"
                              >
                                性別：男
                              </Col>
                            </Row>
                          </Col>

                          <Col xl={5} md={5} sm={5} xs={5}>
                            <Button type="primary" onClick={showModal}>
                              Open Modal
                            </Button>
                            <Modal
                              title="Basic Modal"
                              open={isModalOpen}
                              onOk={handleOk}
                              onCancel={handleCancel}
                            >
                              <p>Some contents...</p>
                              <p>Some contents...</p>
                              <p>Some contents...</p>
                            </Modal>
                          </Col>
                        </Row>
                      </Radio.Button>
                      <Radio.Button value="b">Shanghai</Radio.Button>
                      <Radio.Button value="c">Beijing</Radio.Button>
                      <Radio.Button value="d">Chengdu</Radio.Button>
                    </Radio.Group>
                    <Button className="addPetBtn">選擇寵物</Button>
                  </Col>
                  <Col md={24}>
                    <hr className="formHr"></hr>
                    <p className="formsubtitle">尋找共養人的原因</p>
                  </Col>
                  <Col md={22}>
                    <Form.Item
                      name="find-reason"
                      className="formContentTextArea"
                    >
                      <TextArea rows={3} />
                    </Form.Item>
                  </Col>
                  <Col md={24}>
                    <p className="formsubtitle">共養需求</p>
                  </Col>
                  <Col md={22}>
                    <Form.Item
                      name="seach-needs"
                      className="formContentTextArea"
                    >
                      <TextArea rows={3} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col md={24} className="formBtnWarp">
                    <Button className="Btn1">返回</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default SearchRequestFormPage;
