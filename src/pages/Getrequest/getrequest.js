import React from 'react';
import ButtonComponent from "../../components/button/button";
import { Row, Col } from 'antd';
import images from '../../config/images';
import './getrequest.less'


function Comment() {

    return (
        <div id='Sendrequest'>
            <Row justify="center" align="center" className='container'>
                <Col span={15} className='Commentlist'>
                    <Row className='Commentlistrow'>
                        <div className='Commenttitle'>
                            <h1>我收到的請求</h1>
                        </div>
                        <Col span={24}>
                            <Row className='Commentlistshow'>
                                <Col className='commentary'>
                                    <Row className='commentaryrow'>
                                        <Col className='left'>
                                            <div className="imgBlock">
                                                <img src={images.gold} />
                                            </div>
                                        </Col>
                                        <Col xs={0} sm={0} md={15} className='right'>
                                            <Row className='wrapper' align="center">
                                                <Col xs={0} md={0} className='Content'>
                                                    <div className='Name'>
                                                        <h2>朱嬤嬤</h2>
                                                    </div>
                                                    <div className='Data'>
                                                        <div className='Probably'>
                                                            <p>地區：台中市大里區</p>
                                                            <p>年齡：15</p>
                                                            <p>性別：女</p>
                                                        </div>

                                                        <div className='Detailed'>
                                                            <ButtonComponent
                                                                text="接受請求"
                                                                size="large"
                                                                name="accept-request"
                                                            />
                                                            <ButtonComponent
                                                                text="取消請求"
                                                                size="large"
                                                                name="cancel-request"
                                                            />
                                                            <ButtonComponent
                                                                text="查看詳細"
                                                                size="large"
                                                                name="more-detail"
                                                            />
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>


                                            {/* <div className="alertBlock">
                
              </div> */}
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>

    )

}

export default Comment;


