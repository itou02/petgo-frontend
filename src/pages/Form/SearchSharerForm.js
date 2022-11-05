import images from "../../config/images";
import ButtonComponent from "../../components/button/button";
import React, { useState } from "react";
import {
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
  Checkbox,
  Collapse,
  InputNumber,
  Select,
} from "antd";

import "./SearchSharerForm.less";

function SearchRequestFormPage() {
  const { Panel } = Collapse;

  const onChange1 = (key) => {
    console.log(key);
  };

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

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
    <div id="SharerForm">
      <Row type="flex" justify="center">
        <Col
          xl={16}
          lg={16}
          md={18}
          sm={22}
          xs={24}
          className="RequestFormwarp"
        >
          <Row type="flex" justify="center">
            <Col span={24}>
              <p className="SharerFormTitle">請求共養</p>
            </Col>

            <Col xl={16} lg={18} md={20} xs={22}>
              <Form>
                <Row type="flex" justify="center">
                  <Col lg={24} md={24} sm={24} xs={24}>
                    <p className="formsubtitle">基本資料</p>
                  </Col>

                  <Col md={22} sm={22} xs={22}>
                    <Row className="formContent">
                      <Col

                        xl={24}
                        lg={24}
                        md={24}
                        sm={24}
                        xs={24}
                        className="formContentText"
                      >
                        姓名：黃婷鈺
                      </Col>
                      <Col
                        xxl={3}
                        xl={4}
                        lg={5}
                        md={5}
                        sm={5}
                        xs={4}
                        className="formContentText"
                      >
                        性別：女
                      </Col>
                      <Col
                       xxl={3}
                        xl={4}
                        lg={5}
                        md={5}
                        sm={5}
                        xs={4}
                        className="formContentText"
                      >
                        年齡：19
                      </Col>
                      <Col
                       xxl={6}
                        xl={8}
                        lg={10}
                        md={10}
                        sm={10}
                        xs={10}
                        className="formContentText"
                      >
                        地區：台中市大里區
                      </Col>
                    </Row>

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
                        name="line"
                        className="lineFormItem"
                        wrapperCol={{
                          span: 22,
                        }}
                      >
                        <Input placeholder="輸入ID" />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={24}>
                    <hr className="formHr"></hr>
                    <p className="formsubtitle">養寵經歷</p>
                  </Col>

                  <Col md={22} className="articleMoreWarp">
                    <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                      <Panel header="點擊查看更多經歷" key="1">
                        <Form>
                          <h2 className="RearingPetSubheader">基本寵物資訊</h2>
                          <Form.Item name="Basic-Pet-Information">
                            <Checkbox.Group
                              style={{
                                width: "100%",
                              }}
                              onChange={onChange}
                            >
                              <Row className="RearingPetCheckboxWarp">
                                <Col md={8} sm={12} xs={12}>
                                  <Checkbox disabled value="A">
                                    住處允許養寵
                                  </Checkbox>
                                </Col>
                                <Col md={8} sm={12} xs={12}>
                                  <Checkbox disabled value="B">
                                    有照顧寵物的時間
                                  </Checkbox>
                                </Col>
                                <Col md={8} sm={12} xs={12}>
                                  <Checkbox disabled value="C">
                                    有養寵經濟基礎
                                  </Checkbox>
                                </Col>
                                <Col md={8} sm={12} xs={12}>
                                  <Checkbox disabled value="D">
                                    願意陪伴寵物
                                  </Checkbox>
                                </Col>
                                <Col md={8} sm={12} xs={12}>
                                  <Checkbox disabled value="E">
                                    有責任感及耐心
                                  </Checkbox>
                                </Col>
                                <Col md={8} sm={12} xs={12}>
                                  <Checkbox disabled value="F">
                                    同居者同意且支持
                                  </Checkbox>
                                </Col>
                                <Col md={8} sm={12} xs={12}>
                                  <Checkbox disabled value="G">
                                    住處穩定
                                  </Checkbox>
                                </Col>
                              </Row>
                            </Checkbox.Group>
                          </Form.Item>
                          <hr className="RearingPetHr"></hr>
                          <Row>
                            <h2 className="RearingPetSubheader">養寵經歷</h2>
                            <Col md={24}>
                              <Row
                                className="ListPetCard"
                                justify="center"
                                align="end"
                              >
                                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                                  <Row type="flex" align="strat">
                                    <Col
                                      xxl={5}
                                      xl={6}
                                      lg={8}
                                      md={10}
                                      sm={10}
                                      xs={10}
                                      className="listPetJmimgWarp"
                                    >
                                      <img
                                        className="listPetJmimg"
                                        src={images.jm}
                                      />
                                    </Col>
                                    <Col
                                      xxl={16}
                                      xl={16}
                                      lg={16}
                                      md={14}
                                      sm={14}
                                      xs={14}
                                      className="PetCardCenter"
                                    >
                                      <Row type="flex" align="middle">
                                        <Col>
                                          <p className="PetCardName">吉米</p>
                                        </Col>
                                        <Col>
                                          <div className="PetCardLabel1">
                                            自家寵物
                                          </div>
                                        </Col>
                                      </Row>
                                      <Row type="flex" align="bottom">
                                        <Col
                                          xl={24}
                                          lg={24}
                                          md={24}
                                          sm={22}
                                          xs={22}
                                        >
                                          <Row align="middle">
                                            <span className="PetCardText">
                                              品種：傑克羅素耿
                                            </span>
                                            <span className="PetCardText">
                                              性別：男
                                            </span>
                                            <span className="PetCardText">
                                              年齡：5
                                            </span>

                                            <span className="PetCardText">
                                              體驗日期：2022/06/12-2022/06/30
                                            </span>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                              <Row
                                className="ListPetCard"
                                justify="center"
                                align="end"
                              >
                                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                                  <Row type="flex" align="strat">
                                    <Col
                                      xxl={5}
                                      xl={6}
                                      lg={8}
                                      md={10}
                                      sm={10}
                                      xs={10}
                                      className="listPetJmimgWarp"
                                    >
                                      <img
                                        className="listPetJmimg"
                                        src={images.jm}
                                      />
                                    </Col>
                                    <Col
                                      xxl={16}
                                      xl={16}
                                      lg={16}
                                      md={14}
                                      sm={14}
                                      xs={14}
                                      className="PetCardCenter"
                                    >
                                      <Row type="flex" align="middle">
                                        <Col>
                                          <p className="PetCardName">吉米</p>
                                        </Col>
                                        <Col>
                                          <div className="PetCardLabel2">
                                            共養寵物
                                          </div>
                                        </Col>
                                      </Row>
                                      <Row type="flex" align="bottom">
                                        <Col
                                          xl={24}
                                          lg={24}
                                          md={24}
                                          sm={22}
                                          xs={22}
                                        >
                                          <Row align="middle">
                                            <span className="PetCardText">
                                              品種：傑克羅素耿
                                            </span>
                                            <span className="PetCardText">
                                              性別：男
                                            </span>
                                            <span className="PetCardText">
                                              年齡：5
                                            </span>

                                            <span className="PetCardText">
                                              體驗日期：2022/06/12-2022/06/30
                                            </span>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>

                              <Row
                                className="ListPetCard"
                                justify="center"
                                align="end"
                              >
                                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                                  <Row type="flex" align="strat">
                                    <Col
                                      xxl={5}
                                      xl={6}
                                      lg={8}
                                      md={10}
                                      sm={10}
                                      xs={10}
                                      className="listPetJmimgWarp"
                                    >
                                      <img
                                        className="listPetJmimg"
                                        src={images.jm}
                                      />
                                    </Col>
                                    <Col
                                      xxl={16}
                                      xl={16}
                                      lg={16}
                                      md={14}
                                      sm={14}
                                      xs={14}
                                      className="PetCardCenter"
                                    >
                                      <Row type="flex" align="middle">
                                        <Col>
                                          <p className="PetCardName">吉米</p>
                                        </Col>
                                        <Col>
                                          <div className="PetCardLabel3">
                                            體驗寵物
                                          </div>
                                        </Col>
                                      </Row>
                                      <Row type="flex" align="bottom">
                                        <Col
                                          xl={24}
                                          lg={24}
                                          md={24}
                                          sm={22}
                                          xs={22}
                                        >
                                          <Row align="middle">
                                            <span className="PetCardText">
                                              品種：傑克羅素耿
                                            </span>
                                            <span className="PetCardText">
                                              性別：男
                                            </span>
                                            <span className="PetCardText">
                                              年齡：5
                                            </span>

                                            <span className="PetCardText">
                                              體驗日期：2022/06/12-2022/06/30
                                            </span>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </Col>

                            <hr className="RearingPetHr"></hr>
                          </Row>

                          <Row
                            className="RearingPet3"
                            type="flex"
                            justify="center"
                            align="middle"
                          >
                            <Col
                              md={10}
                              sm={21}
                              xs={21}
                              type="flex"
                              justify="center"
                            >
                              <h3>飼養資歷:</h3>
                            </Col>

                            <Col
                              md={10}
                              sm={21}
                              xs={21}
                              type="flex"
                              justify="center"
                            >
                              <h3>飼養過寵物數量:</h3>
                            </Col>

                            <Col
                              md={20}
                              sm={21}
                              xs={21}
                              type="flex"
                              justify="center"
                            >
                              <h3>飼養過哪些動物:</h3>
                            </Col>
                            <Col
                              md={20}
                              sm={21}
                              xs={21}
                              type="flex"
                              justify="center"
                            >
                              <h3>家中可活動範圍:</h3>
                            </Col>

                            <Col
                              md={20}
                              sm={21}
                              xs={21}
                              type="flex"
                              justify="center"
                            >
                              <h3>自我介紹:</h3>
                            </Col>
                          </Row>
                        </Form>
                      </Panel>
                    </Collapse>
                  </Col>

                  <Col span={24}>
                    <hr className="formHr"></hr>
                    <p className="formsubtitle">申請要共養人的原因</p>
                  </Col>
                  <Col span={22}>
                    <Form.Item
                      name="ReasonApplication"
                      className="formContentTextArea"
                    >
                      <TextArea rows={3} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row justify="center">
                  <Col lg={6} md={8} sm={10} xs={10} className="formBtnWarp">
                    <ButtonComponent
                      text="送出"
                      size="large"
                      name="gotoexperence "
                    />
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
