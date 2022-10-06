import images from "../../config/images";
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
  Collapse,InputNumber,Select
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
    <div className="SharerForm">
      <Row type="flex" justify="center">
        <Col lg={16} md={18} sm={20} xs={22} className="RequestFormwarp">
          <Row type="flex" justify="center">
            <Col md={24} xs={24}>
              <p className="SharerFormTitle">尋找共養者</p>
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
                  <Col md={24}>
                    <hr className="formHr"></hr>
                    <p className="formsubtitle">養寵經歷</p>
                  </Col>

                  <Col md={22} className="articleMoreWarp">
                    <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                      <Panel header="點擊查看更多經歷" key="1">
                      <Form>
          <h2 className="RearingPetSubheader">基本寵物資訊</h2>
            <Form.Item
            name="Basic-Pet-Information">
              
              <Checkbox.Group
              
                style={{
                  width: '100%',
                }}
                onChange={onChange}
              >
                <Row  className="RearingPetCheckboxWarp">
                  <Col md={8} sm={12} xs={12}>
                    <Checkbox disabled value="A">住處允許養寵</Checkbox>
                  </Col>
                  <Col md={8} sm={12} xs={12}>
                    <Checkbox disabled value="B">有照顧寵物的時間</Checkbox>
                  </Col>
                  <Col md={8} sm={12} xs={12}>
                    <Checkbox disabled value="C">有養寵經濟基礎</Checkbox>
                  </Col>
                  <Col md={8} sm={12} xs={12}>
                    <Checkbox disabled value="D">願意陪伴寵物</Checkbox>
                  </Col>
                  <Col md={8} sm={12} xs={12}>
                    <Checkbox disabled value="E">有責任感及耐心</Checkbox>
                  </Col>
                  <Col md={8} sm={12} xs={12}>
                    <Checkbox disabled value="F">同居者同意且支持</Checkbox>
                  </Col>
                  <Col md={8} sm={12} xs={12}>
                    <Checkbox disabled value="G">住處穩定</Checkbox>
                  </Col>
                  
                </Row>
                </Checkbox.Group>
            </Form.Item>
              <hr className="RearingPetHr"></hr>
              <Row>
              
              <h2 className="RearingPetSubheader">養寵經歷</h2>
              <Col  md={24}>
                <Row className="PetCard" md={22} xs={22} type="flex" justify="center" align="middle">
                  <Col span={6}>
                  <img className="RearingPetJmimg" src={images.jm}  /> 
                  </Col>
                  <Col span={18}>
                    <Row type="flex"  align="middle">
                      <Col >
                        <p className="PetCardName">吉米</p>
                      </Col>
                      <Col>
                        <div className="PetCardLabel1">自家寵物</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>
                          <div className="PetCardContent">
                            <div className="PetCardContent1">
                              <div className="PetCardText">品種：傑克羅素耿</div>
                              <div className="PetCardText">年齡：5</div>
                              <div className="PetCardText">性別：男</div>
                            </div>
                            <div className="PetCardContent1">
                              <div className="PetCardText">體型：中型</div>
                              <div className="PetCardText">飼養期間：2016/08~</div>
                            </div>
                          </div>
                          
                      </Col>

                    </Row>
                  </Col>
                </Row>

                <Row className="PetCard" md={22} type="flex" justify="center" align="middle">
                  <Col span={6}>
                  <img className="RearingPetJmimg" src={images.jm}  /> 
                  </Col>
                  <Col span={18}>
                    <Row type="flex"  align="middle">
                      <Col >
                        <p className="PetCardName">吉米</p>
                      </Col>
                      <Col>
                        <div className="PetCardLabel2">共養寵物</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>
                          <div className="PetCardContent">
                            <div className="PetCardContent1">
                              <div className="PetCardText">品種：傑克羅素耿</div>
                              <div className="PetCardText">年齡：5</div>
                              <div className="PetCardText">性別：男</div>
                            </div>
                            <div className="PetCardContent1">
                              <div className="PetCardText">體型：中型</div>
                              <div className="PetCardText">飼養期間：2016/08~</div>
                            </div>
                          </div>
                          
                      </Col>

                    </Row>
                  </Col>
                </Row>

                <Row className="PetCard" md={22} type="flex" justify="center" align="middle">
                  <Col span={6}>
                  <img className="RearingPetJmimg" src={images.jm}  /> 
                  </Col>
                  <Col span={18}>
                    <Row type="flex"  align="middle">
                      <Col >
                        <p className="PetCardName">吉米</p>
                      </Col>
                      <Col>
                        <div className="PetCardLabel3">體驗寵物</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>
                          <div className="PetCardContent">
                            <div className="PetCardContent1">
                              <div className="PetCardText">品種：傑克羅素耿</div>
                              <div className="PetCardText">年齡：5</div>
                              <div className="PetCardText">性別：男</div>
                            </div>
                            <div className="PetCardContent1">
                              <div className="PetCardText">體型：中型</div>
                              <div className="PetCardText">飼養期間：2016/08~</div>
                            </div>
                          </div>
                          
                      </Col>

                    </Row>
                  </Col>
                </Row>
              </Col>
            
              <hr className="RearingPetHr"></hr>
              </Row>

              <Row  className="RearingPet3" type="flex" justify="center" align="middle">
                <Col md={24} sm={21} xs={21}>
                  <Row  type="flex" justify="center" align="middle"> 
                    <Col md={10} sm={24} xs={12} >
                    <Form.Item 
                    className="RearingPet3Form"
                   
                    wrapperCol={{
                      span:14,
                    }}
                    label="飼養資歷"
                    name="BreedingSeniorityYear">
                  
                    </Form.Item>
                    </Col>

                    <Col md={10}  sm={24} xs={12} >
                      <Form.Item 
                      className="RearingPet3Form"

                      wrapperCol={{
                        span:22,
                      }}
                      label="飼養過寵物數量"
                      name="FeedingQuantity">
                    
                    </Form.Item>
                    </Col>
                  </Row>
                </Col>
          
                <Col md={20}  sm={21} xs={21} type="flex" justify="center" >
                  <Form.Item 
                    className="RearingPet3Form"
                    
                    wrapperCol={{
                      span:14,
                    }}
                    label="飼養過哪些動物"
                    name="WhichPets">
                    
                    
                  </Form.Item>
                </Col>
                <Col md={20} sm={21} xs={21} type="flex" justify="center" >
                  <Form.Item 
                    className="RearingPet3Form"
                    
                    wrapperCol={{
                      span:6,
                    }}
                    label="家中可活動範圍"
                    name="HomeRange">
                    
                    
                  </Form.Item>
                </Col>

                <Col md={20} sm={21} xs={21} type="flex" justify="center" >
                <Form.Item
                className="RearingPet3FormTextArea"
                  wrapperCol={{
                    span: 24,
                  }}
                  label="自我介紹"
                >
  
                </Form.Item>
                  
                </Col>

                
                
              </Row>
          
       
                  
        </Form>
                      </Panel>
                        

                    </Collapse>
                  </Col>

                  <Col md={24}>
                    <hr className="formHr"></hr>
                    <p className="formsubtitle">申請要共養人的原因</p>
                  </Col>
                  <Col md={22}>
                    <Form.Item
                      name="ReasonApplication"
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
