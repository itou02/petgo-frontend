import React, { useState,createContext } from 'react';
import {FacebookFilled} from '@ant-design/icons';
import { Col,Row ,message,Space,Modal} from "antd";
import ButtonComponent from "../../components/button/button";
// import './owner.less'
import './adoptionCheckPet.less'
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

/*共養專區-查看詳細寵物頁面*/
function AdoptionCheckPet() {

    const [modal, contextHolder] = Modal.useModal();

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

    const info = () => {
        Modal.info({
          title: 'This is a notification message',
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
      
          onOk() {},
        });
      };

    return (
        <div id="adoptionCheckPet">
            <Row justify="center">
                <Col span={16} className="fullPet">
                    <Col span={18} className="checkItem">
                        <Row>
                            <Col span={6} className="petImage">
                                <img src={images.expet} />
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
                    <h1>共養人員</h1>
                    <hr />
                </Col>
            </Row>
            <Row justify="center">
                <Col span={13} className="commentary">
                    <Col span={5} className="peopleImage">
                        <img src={images.bb} />
                    </Col>
                    <Row className="trimSharePeople">
                        <Col span={22} className="SharePeople">
                            <div className='leftPart'>
                                <div className='trimLable'>
                                    <h2>白婷鈺</h2>
                                    <div>主要飼主</div>
                                </div>
                                <div className='sharePeopleItem'>
                                    <p>地區：</p>
                                    <p>年齡：</p>
                                    <p>性別：</p>
                                </div>
                            </div>                            
                            <div className='rightPart'>
                                <h2>聯絡資訊</h2>
                                <hr />
                                <h3>
                                    <FacebookFilled />
                                    <p>ID：a52195219a</p>
                                </h3>
                            </div>
                            
                            
                        </Col>
                        <Col span={23} className="commDate">
                            <span>2022/06/16</span>
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
            <Row justify="center" style={{marginbottom:'10%'}}>
                <ButtonComponent
                    type="primary"
                    text="請求共養"
                    size="large"
                    name="goToEx"
                    handleSubmit={info}
                />
                
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                
            </Row>

        </div>
    );
}

export default AdoptionCheckPet;