import React, { useState,useEffect } from 'react';
import { Row, Col, Button, Checkbox, Form, Icon, Input, Space, Modal } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import ButtonComponent from "../../components/button/button";
import { AiFillLock } from "react-icons/ai";
import images from '../../config/images';
import axios from 'axios';
import './index.less'

function Revise() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const hideModal = () => {
        setVisible(false);
    };

    const [posts,setPosts]=useState([])
  useEffect(() => {
    // fetch_data()
    const config = {
      url: 'http://127.0.0.1:8000/api/forget/revise/8b68a9ed-0eea-4216-8183-034823b58bca',  // 只有此為必需
      method: 'patch', // 大小寫皆可
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers':'*',
        'X-Requested-With':'XMLHttpRequest',
      },
      
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
        <div id="login">
            <Row justify="center" align="center" className="container">
                <Col xs={22} md={20} className="login">
                    <Row className="bannerBlock" >
                        <Col xs={0} sm={0} md={10}>
                            <div className="imgBlock">
                                <img src={images.bg1} alt="bg-1" className="" />
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={14} className="titleBlock">
                            <Row className='a' align="center">
                                <Col sm={24} md={14} >
                                    <Form
                                        name="basic"
                                        labelCol={{
                                            span: 8,
                                        }}
                                        wrapperCol={{
                                            span: 16,
                                        }}
                                        initialValues={{
                                            remember: true,
                                        }}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        autoComplete="off"
                                        className="form"
                                    >
                                        <h1>修改密碼</h1>
                                        <hr></hr>
                                        <Input.Password size="large" placeholder="輸入密碼" prefix={<AiFillLock />} iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                                        <Input.Password size="large" placeholder="確認密碼" prefix={<AiFillLock />} iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                                        <Form.Item
                                            wrapperCol={{
                                                span: 24,
                                            }}
                                        >
                                            {/* <ButtonComponent
                                                text="登入"
                                                size="large"
                                                name="loginbtn"
                                                onClick={showModal}
                                                htmlType="submit"
                                            /> */}
                                            <Button type="primary" size="large" onClick={showModal} className='changebtn'>
                                                確認
                                            </Button>
                                            <Modal
                                                // title="提示"
                                                visible={visible}
                                                onOk={hideModal}
                                                onCancel={hideModal}
                                                okText="確認"
                                                cancelText="取消"
                                            >
                                                <p>確定要更改密碼嗎</p>
                                            </Modal>
                                        </Form.Item>
                                    </Form>
                                </Col>
                            </Row>


                            {/* <div className="alertBlock">
                
              </div> */}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Revise;
