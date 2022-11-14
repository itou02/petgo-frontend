import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import createRoot from 'react-dom';
import { Provider } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
import { HashRouter, redirect, Route } from "react-router-dom";
import { Row, Col, Button, Checkbox, Form, Icon, Input, Space } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import ButtonComponent from "../../components/button/button";
import { AiFillLock } from "react-icons/ai";
import images from '../../config/images';
import { useNavigate } from "react-router-dom";
import './index.less';
// const userRequest = axios.create({
//   baseURL: 'http://localhost:8000/login',
//   headers: { 'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin':'*',
//             'Access-Control-Allow-Headers':'*',
//             'X-Requested-With':'XMLHttpRequest',
//             'X-CSRF-TOKEN': document.querySelector('meta[name="csrftoken"]')
//   },
// })
// export const login = (email,userPassword) => {
//   return userRequest.post("/routes/auth/login",
//   JSON.stringify({
//       email,
//       userPassword,})
//       ).then((res) => res.data).catch((err)=>console.log(err));
// };


function Login() {
  // let navigate = useNavigate();


  // const submit=(e)=>{
  //   e.preventDefault(); 
  //   navigate('/home')
  // }

  // const handleLogin = (payload) => {
  //   dispatch({ type: "POST_UserLogin", payload });
  // };
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Success:', values);
    const config = {
      url: 'http://127.0.0.1:8000/login',  // 只有此為必需
      method: 'post', // 大小寫皆可
      headers: {
        'Accept': 'text/html',
        'Content-Type': 'text/html; charset=utf-8',
        // 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrftoken"]')
      },
      data: values,
      // responseType: 'json' // 伺服器回應的數據類型
    }
    try {
      axios(config)
        .then(res => {
          console.log(res, "測試格線", res.data.csrftoken)
          if (res.data.csrftoken != null)
            navigate('/');
          // setPosts(values)
        }, []);
    }
    catch (error) {
      throw error;
      // Do  with error
    }
  };
  // createRoot(
  //   document.getElementById('/home')
  // );

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [posts, setPosts] = useState([]);
  console.log(setPosts);
  // const [password, setPassword] = useState([]);

  // const handleLogin = (e) => {
  //   Login(useremail,password).then((data) => {
  //     if (data.token ==null) {
  //       return console(data.status);
  //     }
  //   });
  // };

  // const handleUseremail = (e) => {
  //   setUseremail(e.target.value);
  // };

  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  // let navigate = useNavigate();
  // const csrf = () => axios.get('/sanctum/csrf-cookie')
  // const login = async ({setSuccessResponse }) => {

  //     await csrf()
  //     axios
  //       .post('http://127.0.0.1:8000/login')
  //       try {
  //         setSuccessResponse()
  //         .then(res =>{
  //           console.log(res.data)
  //         });
  //         navigate('/');
  //       } catch (error) {
  //         console.log(error);
  //       }

  // }

  // console.log('posts=>',posts);

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
              <Row align="center">
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
                    // onClick={login}
                    autoComplete="off"
                    className="form"
                  >
                    <h1>登入</h1>
                    <hr></hr>

                    <Form.Item
                      label="email"
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
                      <Input size="large" placeholder="輸入帳號" prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item
                      label="password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
                      <Input.Password size="large" placeholder="輸入密碼" prefix={<AiFillLock />} iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                    </Form.Item>
                    <Form.Item
                      className='loginbtndiv'
                      wrapperCol={{ span: 24, }}
                    // onClick={submit}
                    >
                      <ButtonComponent
                        text="登入"
                        size="large"
                        name="loginbtn"
                        htmlType="submit"
                        type="primary"
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
                        <a href="Forget">忘記密碼</a>
                      </div>
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
