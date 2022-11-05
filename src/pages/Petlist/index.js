import React from 'react';
import ButtonComponent from "../../components/button/button";
import { Row, Col, Modal, Button } from 'antd';
import { useState,useEffect } from 'react';
import images from '../../config/images';
import axios from 'axios';
import './index.less'


const contentStyle = {
    height: '450px',
    color: '#fff',
    // lineHeight: '30px',
    textAlign: 'center',
    background: '#364d79',
};

function Comment() {

    const [posts,setPosts]=useState([])
    useEffect(() => {
    // fetch_data()
        const config = {
        url: 'http://127.0.0.1:8000/api/pet-list',  // 只有此為必需
        method: 'get', // 大小寫皆可
        headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers':'*',
            'X-Requested-With':'XMLHttpRequest',
        },
        // data: {
        //   email: "bruce@gmail.com",
        //   password: "vul t/6u.4"
        // },
        responseType: 'json', // 伺服器回應的數據類型
        }
        try {
            axios(config)
            .then(res =>{
                console.log(res.data.req)
                setPosts(res.data.req)
            },[]);   
        }
        catch (error) {
            throw error;
            // Do  with error
        }
    },[]);
    console.log('posts=>',posts);

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
                                    <div className='Detailed'>
                                        <ButtonComponent
                                            text="查看詳細"
                                            size="large"
                                            name="more-detail"
                                        />
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


