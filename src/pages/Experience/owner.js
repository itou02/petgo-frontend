import React from "react";
import { Col,Row ,message} from "antd";
import ButtonComponent from "../../components/button/button";
import './owner.less'
import images from "../../config/images";



function Owner() {
    const add = () => {
        message.add("新增寵物成功");
    };
    const del = () => {
        message.del("確定移除寵物？");
    };
    const check = () => {
        message.check("確定移除寵物？");
    };

    return (
        <div className="container">
            <Row justify="center">
                <Col span={20} className="havePet">
                    <Col span={22} className="title">
                        <div style={{width:"100px"}}></div>
                        <h1>現有的體驗寵物</h1>
                        <ButtonComponent
                            text="新增寵物"
                            size="large"
                            name="addExPet"
                            handleSubmit={add}
                        />
                    </Col>
                    <Row justify="center">
                        <Col span={12} className="exPet">
                            <Row align="center">
                                <Col span={23}  className="exPetItem">
                                    <Col span={5} className="petImage">
                                        <img src={images.gimmy} />
                                    </Col>
                                    <Col span={15} className="petIntro">
                                        <Row className="trimIntroTitle">
                                            <Col offset={1}><h3>吉米</h3></Col>
                                        </Row>
                                        <Row className="trimIntroItem">
                                            <Col span={8} offset={2}>品種：</Col>
                                            <Col span={5}>年齡：</Col>
                                            <Col span={5}>性別：</Col>
                                        </Row>
                                        <Row className="trimIntroItem">
                                            <Col span={8} offset={2}>體型：</Col>
                                            <Col span={10}>飼養期間：</Col>
                                        </Row>
                                    </Col>
                                    <Col span={4} className="petBtn">
                                        <Row>
                                            <Col span={10} className="petBtnTrim">
                                                <ButtonComponent
                                                    text="移除"
                                                    name="del"
                                                    handleSubmit={del}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={10} className="petBtnTrim">
                                                <a href="/Experience/owner-illustrate/post/ex-pet-detail">
                                                    <ButtonComponent
                                                        text="查看詳細"
                                                        name="check"
                                                        handleSubmit={check}
                                                    />
                                                </a>
                                                
                                            </Col>
                                        </Row>
                                    </Col>
                                
                                </Col>
                            </Row>
                            
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Owner;