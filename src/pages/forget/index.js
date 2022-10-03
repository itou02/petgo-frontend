import React from 'react';
import { Link } from "react-router-dom";
import ButtonComponent from "../../components/button/button";
import { Row, Col, Button, Checkbox, Form, Icon, Input, Space, Radio, } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { AiFillLock } from "react-icons/ai";
import images from '../../config/images';
import './index.less'



function Forget(props) {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div id="forget">
      <Row justify="center" align="center" className="container">
        <Col xs={22} md={20} className="login">
          <Row className="bannerBlock" >
            <Col xs={24} md={12}>
              <div className="imgBlock">
                <img src={images.bg1} alt="bg-1" />
              </div>
            </Col>
            <Col xs={24} md={12} className="titleBlock">
              <Row className='a' align="center">
                <Col xs={24} md={14} >
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
                    <h1>忘記密碼</h1>
                    <hr></hr>
                    <Input size="large" placeholder="輸入電子郵件" prefix={<UserOutlined />} />
                    <Row align='center' justify='center' className='verification'>
                      <Col span={14}>
                        <Input size="large" placeholder="輸入驗證碼" />
                      </Col>
                      <Col span={10} className='verify'>
                        <ButtonComponent
                          text="傳送驗證碼"
                          size="large"
                          name="verifybtn"
                        />
                      </Col>
                    </Row>

                    <Form.Item
                      wrapperCol={{
                        span: 16,
                      }}
                    >
                      <ButtonComponent
                        text="登入"
                        size="large"
                        name="loginbtn"
                      // handleSubmit={()=>}
                      />
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

  )

}

export default Forget;
