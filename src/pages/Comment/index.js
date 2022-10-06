import React from 'react';
import { Carousel } from 'antd';
import ButtonComponent from "../../components/button/button";
import { Row, Col, message, Card } from 'antd';
import { useEffect, useState } from "react";
import Slider from "react-slick";
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
        <div id='Comment'>
            <Row justify="center" align="center" className='container'>
                <Col span={15} className='Commentlist'>
                    <Row className='Commentlistrow'>
                        <div className='Commenttitle'>
                            <h1>我的評論</h1>
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
                                                <div className='Content'>
                                                    <div className='Name'>
                                                        <h2>臭臭</h2>
                                                        <hr></hr>
                                                    </div>
                                                    <span>
                                                        很肥很可愛
                                                    </span>
                                                    <div className='Time'>
                                                        2022/03/20
                                                    </div>
                                                </div>
                                            </Row>
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
                                            <Row className='wrapper'>
                                                <div className='Content'>
                                                    <div className='Name'>
                                                        <h2>臭臭</h2>
                                                        <hr></hr>
                                                    </div>
                                                    <span>
                                                        很肥很可愛
                                                    </span>
                                                    <div className='Time'>
                                                        2022/03/20
                                                    </div>
                                                </div>
                                            </Row>
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
                                                <div className='Content'>
                                                    <div className='Name'>
                                                        <h2>臭臭</h2>
                                                        <hr></hr>
                                                    </div>
                                                    <span>
                                                        很肥很可愛
                                                    </span>
                                                    <div className='Time'>
                                                        2022/03/20
                                                    </div>
                                                </div>
                                            </Row>
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


