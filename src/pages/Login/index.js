import React from 'react';
import { Row, Col, Button, Checkbox, Form, Icon, Input, Space } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import ButtonComponent from "../../components/button/button";
import { AiFillLock } from "react-icons/ai";
import images from '../../config/images';
import './index.less'

function Login() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



  return (
    <div id="login">
      <Row className="container">
        <Col xs={22} md={24} className="login">
          <Row className="bannerBlock1" type="flex" justify="center" align="middle">
            <Col xs={0} sm={0} md={14}>
              <div className="imgBlock">
                <img src={images.bg1} alt="bg-1" />
              </div>
            </Col>
            <Col xs={24} sm={24} md={10} className="titleBlock">
              <Row  align="center">
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
                    <h1>登入</h1>
                    <hr></hr>
                    <Input size="large" placeholder="輸入帳號" prefix={<UserOutlined />} />
                    <Input.Password size="large" placeholder="輸入密碼" prefix={<AiFillLock />} iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />

                    <Form.Item
                    className='loginbtndiv'
                      wrapperCol={{
                        span: 24,
                      }}
                    >
                      <ButtonComponent
                        text="登入"
                        size="large"
                        name="loginbtn"
                        htmlType="submit"
                      />
                    </Form.Item>
                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                      wrapperCol={{
                        span: 24,
                      }}
                    >
                      <Checkbox>記住我</Checkbox>
                      <div className="link"><a href="Signup">前往註冊</a><h3>/</h3>
                        <a href="Forget">忘記密碼</a></div>

                    </Form.Item>


                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
