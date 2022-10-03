import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ButtonComponent from "../../components/button/button";
import { Row, Col, Button, Checkbox, Form, Icon, Input, Space, Radio, DatePicker, Select } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, PhoneOutlined, CalendarOutlined } from '@ant-design/icons';
import { AiFillLock } from "react-icons/ai";
import images from '../../config/images';
import './index.less'



const Signup = (props) => {

  const provinceData = ['Zhejiang', 'Jiangsu'];
  const cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const { Option } = Select;

  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);

  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };

  return (
    <div id="signup">
      <Row justify="center" className="container">
        <Col offset={2} xs={0} md={10}>
          <div className="imgBlock">
            <img src={images.bg1} alt="bg-1" />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} className="titleBlock">
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
            <h1>註冊</h1>
            <hr></hr>
            <Row align='center' justify='center' className='personal'>
              <Col span={10}>
                <Input size="large" placeholder="姓名" />
              </Col>
              <Col span={14} className='sex'>
                <Form.Item  label="性別">
                  <Radio.Group >
                    <Radio value="apple">男</Radio>
                    <Radio value="pear">女</Radio>
                  </Radio.Group>
                </Form.Item></Col>
            </Row>


            <Input size="large" placeholder="輸入帳號" prefix={<UserOutlined />} />
            <Input.Password size="large" placeholder="輸入密碼" prefix={<AiFillLock />} iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
            <Input.Password size="large" placeholder="確認密碼" prefix={<AiFillLock />} iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
            <Input size="large" placeholder="輸入手機號碼" prefix={<PhoneOutlined />} />
            <DatePicker size="large" placeholder="輸入生日" onChange={onChange} className='date' />
            <Row className='place'>
              <Col>
                <h2>居住地區：</h2>
              </Col>
              <Col>
                <Select
                  size="large"
                  defaultValue={provinceData[0]}
                  style={{
                    width: 205,
                  }}
                  onChange={handleProvinceChange}
                >
                  {provinceData.map((province) => (
                    <Option key={province}>{province}</Option>
                  ))}
                </Select>
              </Col>
              <Col>
                <Select
                  size="large"
                  style={{
                    width: 205,
                  }}
                  value={secondCity}
                  onChange={onSecondCityChange}
                >
                  {cities.map((city) => (
                    <Option key={city}>{city}</Option>
                  ))}
                </Select>
              </Col>
            </Row>

            <Form.Item
              wrapperCol={{
                span: 16,
              }}
              className='btn'
            >
              <ButtonComponent
                text="註冊"
                size="large"
                name="loginbtn"
                htmlType="submit"
              />
            </Form.Item>
          </Form>



        </Col>
      </Row>
    </div>

  )

}

export default Signup;
