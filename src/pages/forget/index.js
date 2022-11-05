import React,{useEffect,useState} from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import ButtonComponent from "../../components/button/button";
import { Row, Col, Button, Checkbox, Form, Icon, Input, Space, Modal } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { AiFillLock } from "react-icons/ai";
import images from '../../config/images';
import axios from 'axios';
import './index.less'



function Forget(props) {
  // const { confirm } = Modal;
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  // const showDeleteConfirm = () => {
  //   confirm({
  //     title: 'Are you sure delete this task?',
  //     icon: <ExclamationCircleOutlined />,
  //     content: 'Some descriptions',
  //     okText: 'Yes',
  //     okType: 'danger',
  //     cancelText: 'No',

  //     onOk() {
  //       console.log('OK');
  //     },

  //     onCancel() {
  //       console.log('Cancel');
  //     },
  //   });
  // };
 const[posts,setPosts]=useState([])
  React.useEffect(() => {
    // fetch_data()

    const config = {
      url: 'http://127.0.0.1:8000/forgot-password',  // 只有此為必需
      method: 'post', // 大小寫皆可
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers':'*',
        'X-Requested-With':'XMLHttpRequest',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      },
      data: {
          email: "bruce@gmail.com",
          password: "vul t/6u.4"
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
                        text="確認修改"
                        size="large"
                        name="loginbtn"
                        // handleSubmit={showDeleteConfirm}
                        type="dashed"
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
