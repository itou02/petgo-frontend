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
            <Row align='center' className='container'>
                <Col span={15} className='Commentlist'>
                    <Row className='Commentlistrow'>
                        <div className='Commenttitle'>
                            <h1>我的評論</h1>
                        </div>
                        <Col span={20} className='commentary'>
                            <div className="pictureBlock">
                                <div className="imgBlock">
                                    <img src={images.gold} />
                                </div>
                            </div>
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
                        </Col>

                    </Row>

                </Col>
            </Row>
        </div>

    )

}

export default Comment;


