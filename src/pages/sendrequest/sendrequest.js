import React from 'react';
import ButtonComponent from "../../components/button/button";
import { Row, Col } from 'antd';
import images from '../../config/images';
import './sendrequest.less'


function Comment() {

    return (
        <div id='Sendrequest'>
            <Row justify="center" align="center" className='container'>
                <Col span={15} className='Commentlist'>
                    <Row className='Commentlistrow'>
                        <div className='Commenttitle'>
                            <h1>我送出的請求</h1>
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
                                                        <h2>飼主體驗</h2>
                                                    </div>
                                                    <div className='Data'>
                                                        <div className='Probably'>
                                                            <div className='first'>
                                                                <p>名字：幼幼</p>
                                                                <p>品種：法鬥</p>
                                                                <p>年齡：15</p>

                                                            </div>
                                                            <div className='second'>
                                                                <p>性別：男</p>
                                                                <p>體型：小</p>
                                                                <p>飼養期間：2015-</p>
                                                            </div>
                                                        </div>

                                                        <div className='Detailed'>
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
                                                        <h2>飼主體驗</h2>
                                                    </div>
                                                    <div className='Data'>
                                                        <div className='Probably'>
                                                            <div className='first'>
                                                                <p>名字：幼幼</p>
                                                                <p>品種：法鬥</p>
                                                                <p>年齡：15</p>

                                                            </div>
                                                            <div className='second'>
                                                                <p>性別：男</p>
                                                                <p>體型：小</p>
                                                                <p>飼養期間：2015-</p>
                                                            </div>
                                                        </div>

                                                        <div className='Detailed'>
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
                                                        <h2>飼主體驗</h2>
                                                    </div>
                                                    <div className='Data'>
                                                        <div className='Probably'>
                                                            <div className='first'>
                                                                <p>名字：幼幼</p>
                                                                <p>品種：法鬥</p>
                                                                <p>年齡：15</p>

                                                            </div>
                                                            <div className='second'>
                                                                <p>性別：男</p>
                                                                <p>體型：小</p>
                                                                <p>飼養期間：2015-</p>
                                                            </div>
                                                        </div>

                                                        <div className='Detailed'>
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


