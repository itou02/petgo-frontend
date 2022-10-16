import React, { useState,createContext } from 'react';
import { Col,Row ,message,Space,Modal,Form,Panel,Collapse,Checkbox,} from "antd";
import ButtonComponent from "../../components/button/button";
// import './owner.less'
import './memberDetail.less'
import images from "../../config/images";

const ReachableContext = createContext(null);
const UnreachableContext = createContext(null);

const config = {
    title: 'Use Hook!',
    content: (
      <>
        <ReachableContext.Consumer>{(name) => `Reachable: ${name}!`}</ReachableContext.Consumer>
        <br />
        <UnreachableContext.Consumer>{(name) => `Unreachable: ${name}!`}</UnreachableContext.Consumer>
      </>
    ),
  };

/*我收到的請求-查看會員詳細*/
function memberDetail() {

    const { Panel } = Collapse;

    const onChange1 = (key) => {
        console.log(key);
    };



    const onChange = (checkedValues) => {
        console.log("checked = ", checkedValues);
    };


    const info = () => {
        Modal.info({
            title: 'This is a notification message',
            content: (
            <div>
                <p>some messages...some messages...</p>
                <p>some messages...some messages...</p>
            </div>
        ),onOk() {},
        });
    };

    return (
        <div id="memberDetail">
            <Row justify="center">
                <Col span={13} className="fullMember">
                    <Col span={18} className="checkItem">
                        <Row>
                            <Col span={6} className="memberImage">
                                <img src={images.bb} />
                            </Col>
                            <Col span={16} className="trimSpace">
                                <Row>
                                    <Col span={15} offset={2} className="petDetails">
                                        <Row>
                                            <Col>姓名：</Col>
                                            <Col offset={13}>性別：</Col>
                                        </Row>
                                        <Row>年齡：</Row>
                                        <Row>地區：</Row>
                                        <Row>聯絡方式：</Row>
                                    </Col>
                                </Row>
                            </Col> 
                        </Row>
                        
                        <Row className="detailIntro" justify="center">
                            
                            <Col span={22} className="requestItem">
                                <h2>請求項目</h2>
                                <Row className="PetCard" md={22} xs={22} type="flex" justify="center" align="middle">
                                    <Col span={6}>
                                    <img className="RearingPetJmimg" src={images.jm}  /> 
                                    </Col>
                                    <Col span={18}>
                                        <Row type="flex"  align="middle">
                                            <Col >
                                                <p className="PetCardName">寵物體驗</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={24}>
                                                <div className="PetCardContent">
                                                    <div className="PetCardContent1">
                                                    <div className="PetCardText">名字：吉米</div>
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
                            <Col span={22} className="requestItem">
                                <h2>個人介紹</h2>
                                <Row  md={22} xs={22} type="flex" justify="center" align="middle">
                                    <div className='memberIntroduction'>
                                        
                                    </div>
                                </Row>
                                <h2>想體驗的原因</h2>
                                <Row  md={22} xs={22} type="flex" justify="center" align="middle">
                                    <div className='memberIntroduction'>
                                        
                                    </div>
                                    <hr />
                                </Row>
                                <h2>養寵經歷</h2>
                                <Row justify="center">
                                    <Col md={22} className="articleMoreWarp">
                                        <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                                            <Panel header="點擊查看更多經歷" key="1">
                                                <Form>
                                                    <h2 className="RearingPetSubheader">基本寵物資訊</h2>
                                                    <Form.Item
                                                        name="Basic-Pet-Information">                                                    
                                                        <Checkbox.Group style={{width: '100%',}} onChange={onChange}>
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
                                                                    <Form.Item className="RearingPet3Form" wrapperCol={{span:14,}} label="飼養資歷" name="BreedingSeniorityYear">                                                        
                                                                    </Form.Item>
                                                                </Col>
                                                                <Col md={10}  sm={24} xs={12} >
                                                                    <Form.Item className="RearingPet3Form" wrapperCol={{span:22,}} label="飼養過寵物數量" name="FeedingQuantity">
                                                                    </Form.Item>
                                                                </Col>
                                                            </Row>
                                                        </Col>                                                
                                                        <Col md={20}  sm={21} xs={21} type="flex" justify="center" >
                                                            <Form.Item className="RearingPet3Form"wrapperCol={{span:14,}} label="飼養過哪些動物"name="WhichPets">
                                                            </Form.Item>
                                                        </Col>
                                                        <Col md={20} sm={21} xs={21} type="flex" justify="center" >
                                                            <Form.Item className="RearingPet3Form" wrapperCol={{span:6,}} label="家中可活動範圍" name="HomeRange">
                                                            </Form.Item>
                                                        </Col>

                                                        <Col md={20} sm={21} xs={21} type="flex" justify="center" >
                                                            <Form.Item className="RearingPet3FormTextArea" wrapperCol={{span: 24,}} label="自我介紹">
                                                            </Form.Item>              
                                                        </Col>                                    
                                                    </Row>
                                                </Form>
                                            </Panel>
                                        </Collapse>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row justify="center">
                            <Col span={10} className="trimBtn">
                                <a href='/Receive-request'>
                                    <ButtonComponent
                                        text="稍後"                    
                                        name="memberDetailBtn1"
                                    />
                                </a>
                                <a href='/Receive-request'>
                                    <ButtonComponent
                                        text="接受"                    
                                        name="memberDetailBtn2"
                                    />
                                </a>
                                <a href='/Receive-request'>
                                    <ButtonComponent
                                        text="拒絕"                    
                                        name="memberDetailBtn3"
                                    />
                                </a>

                                
                            </Col>
                        </Row>
                    </Col>  
                </Col>
            </Row>
        </div>
    );
}

export default memberDetail;