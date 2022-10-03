import React from 'react';
import ButtonComponent from "../../components/button/button";
import { Row, Col } from 'antd';
import images from '../../config/images';
import './index.less'


const contentStyle = {
    height: '450px',
    color: '#fff',
    // lineHeight: '30px',
    textAlign: 'center',
    background: '#364d79',
};

function Comment() {

    return (
        <div id='Petlist'>
            <Row align='center' className='container'>
                <Col span={15} className='Commentlist'>
                    <Row className='Commentlistrow'>
                        <div className='Commenttitle'>
                            <h1>寵物清單</h1>
                        </div>
                        <Col span={24} className='commentary'>
                            <div className="pictureBlock">
                                <div className="imgBlock">
                                    <img src={images.gold} />
                                </div>
                            </div>
                            <div className='Content'>
                                <div className='Name'>
                                    <h2>臭臭</h2>
                                </div>
                                <div className='Data'>
                                    <div className='Probably'>
                                        <div className='first'>
                                            <p>品種：</p>
                                            <p>年齡：</p>
                                            <p>性別：</p>
                                        </div>
                                        <div className='second'>
                                            <p>體型：</p>
                                            <p>飼養期間：</p>
                                        </div>
                                    </div>
                                    <ButtonComponent
                                        text="查看詳細"
                                        size="large"
                                        name="more-detail"
                                    />
                                    <div className='Detailed'>

                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>

                </Col>
            </Row>
        </div>

    )

}

export default Comment;


