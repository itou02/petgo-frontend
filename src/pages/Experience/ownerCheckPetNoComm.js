import React from "react";
import { Col,Row ,message,Space} from "antd";
import ButtonComponent from "../../components/button/button";
// import './owner.less'
import './ownerCheckPet.less'
import images from "../../config/images";


/*飼主專區-寵物詳細資料-無評論*/
function OwnerCheckPet() {

    return (
        <div className="container">
            <Row justify="center">
                <Col span={16} className="fullPet">
                    <Col span={18} className="checkItem">
                        <Row>
                            <Col span={6} className="petImage">
                                <img src={images.gimmy} />
                            </Col>
                            <Col span={18} className="trimSpace">
                                <Row>
                                    <Col span={10} offset={2} className="petDetails">
                                        <Row>姓名：</Row>
                                        <Row>體型：</Row>
                                        <Row>年齡：</Row>
                                        <Row>來源方：</Row>
                                    </Col>
                                    <Col span={10} offset={1} className="petDetails">
                                        <Row>品種：</Row>
                                        <Row>性別：</Row>
                                        <Row>絕育狀況：</Row>
                                        <Row>飼養期間：</Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={20} offset={2} className="exPeriod">
                                        <Row>體驗期間：</Row>
                                    </Col>
                                </Row>
                            </Col> 
                        </Row>
                        
                            <Row className="detailIntro">
                                <Col span={9} className="intro">
                                    <h2>個性</h2>
                                    <hr />
                                    <p>害羞，內向。是個小公主
                                        同時也是個吃貨，每次吃完都嫌不夠
                                    </p>
                                </Col>
                                <Col span={9} className="intro">
                                    <h2>提醒</h2>
                                    <hr />
                                    <p>運動量很大也需要大量的運動</p>
                                </Col>
                            </Row>
                            <Row className="detailIntro">
                                <Col span={9} className="intro">
                                    <h2>尋找體驗者的原因</h2>
                                    <hr />
                                    <p>那幾天要去玩，希望有個愛狗狗的人可以帶帶</p>
                                </Col>
                                <Col span={9} className="intro">
                                    <h2>體驗需求</h2>
                                    <hr />
                                    <p>住附近，有耐心</p>
                                </Col>
                            </Row>
                        
                        
                    </Col>
                    
                </Col>
            </Row>
            <Row justify="center">
                <Col span={5} className="caption">
                    <hr />
                    <h1>評論</h1>
                    <hr />
                </Col>
            </Row>
            <Row justify="center">
                <Col span={15} className="noCommentary">
                    <h1>目前尚無評論</h1>
                </Col>
            </Row>

        </div>
    );
}

export default OwnerCheckPet;