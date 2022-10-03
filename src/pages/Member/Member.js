import images from "../../config/images";
import React, { useState } from 'react';
import {
  Select,
  Col,
  Row,
  Button,
  Form,
  Input,
  Radio,
  DatePicker,
  message, 
  Upload, 
 
  
} from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';  

import "./Member.less";

function MemberPage() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { TextArea } = Input;
  const { Option } = Select;
  const provinceData = ['台中市', '台北市'];
  const cityData = {
    台中市: ['大里區', '北區', '南區'],
    台北市: ['東區', '大安區', '萬華區'],
  };

  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);

  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
  
    const isLt2M = file.size / 1024 / 1024 < 2;
  
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
  
    return isJpgOrPng && isLt2M;
  };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }

    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        上傳圖片
      </div>
    </div>
  );

  return (
    <Row type="flex" justify="center" align="middle">
      <Col md={15} xs={22} type="flex" justify="center" align="middle">
        <img className="Member1" src={images.Member1} />
        <p className="M-title">會員資料</p>
      </Col>
      <Col md={15} xs={22} type="flex" justify="center" align="center">
        <hr></hr>
      </Col>

      <Col md={10} xs={22}  className="MemberFormWarp" type="flex" justify="center" align="center">
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >

        <Row span={24} type="flex" justify="space-between" align="middle">
          <Col  md={8} xs={24} type="flex" justify="center" >
          <Upload

            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="avatar"
                style={{
                  width: '100%',
                }}
            />
      ) : (
        uploadButton
      )}
    </Upload>
          </Col >
          <Col md={16} xs={24}>
          <Row md={24}  type="flex"  align="middle">
            <Col md={16} xs={16}>
              <Form.Item
                 wrapperCol={{
                  span: 22,
                }}
                label="姓名"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "請輸入姓名",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="性別"
                name="sex"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Radio.Group>
                  <Radio value="apple"> 女生 </Radio>
                  <Radio value="pear"> 男生 </Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>

            <Row type="flex"  align="center">
                <Col span={16}>
                    <Form.Item   
                    wrapperCol={{
                  span: 22,
                }} name="date-picker" label="生日" >
                                <DatePicker type="text"
                disabled="disabled" placeholder="請選擇日期" />
                            </Form.Item>
                            `
                </Col>
                <Col span={8}>
                <Form.Item
                label="年齡"
                name="old"
                
                
            >
                <Input  type="text"
                disabled="disabled"/>
            </Form.Item>
                    </Col>

            </Row>
          </Col>
      </Row>
          <Row>
              <Col md={10} xs={24} >
                <Form.Item
                  wrapperCol={{
                    md: 22,
                    xs:24,
                  }}
                  label="行動電話"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input placeholder="09XX-XXX-XXX" />
                </Form.Item>

              </Col>
              <Col md={14} xs={24}>
              <Form.Item
                
                label="居住地區"
                name="Area"
                rules={[
                  {
                    required: true,
                    
                  },
                ]}
          >
                <Select 
                  className="AreaSelect"
                  defaultValue={provinceData[0]}
                  
                  onChange={handleProvinceChange}
                >
                  {provinceData.map((province) => (
                    <Option key={province}>{province}</Option>
                  ))}
                </Select>
                <Select
                 
                  value={secondCity}
                  onChange={onSecondCityChange}
                >
                  {cities.map((city) => (
                    <Option key={city}>{city}</Option>
                  ))}
                </Select>
                </Form.Item>
              </Col>
          </Row>
          


          <Row>
          <Col span={24}>
            <Form.Item
              wrapperCol={{
                span: 24,
              }}
              label="電子郵件"
              name="Email"
              rules={[
                {
                  required: true,
                
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          </Row>
         <Row type="flex" justify="space-between" align="bottom">
          <Col span={18}>
          <Form.Item
          wrapperCol={{
            md: 22,
            xs:22,
          }}
            label="密碼"
            name="password"
            rules={[
              {
                required: true,
              
              },
            ]}
          >
            <Input.Password />

            
          </Form.Item>
          </Col>
          <Col span={6}>
          <Form.Item>
                <Button className="password_btn">更改密碼</Button>
          </Form.Item>
            </Col>
            
         </Row>
         <Row>
         <Col span={24}>
          <Form.Item
            wrapperCol={{
              span: 24,
            }}
            label="自我介紹"
          >
            <TextArea rows={4} />
          </Form.Item>
          </Col>
          </Row>
          <Row span={24} type="flex" justify="space-between" align="middle">
            <Col span={11} >
              <Button    style={{ height: 30  }}   className="FormCancel">取消</Button>
            </Col>
            <Col span={11}>
              <Button    style={{ height: 30 }}  className="FormSave">儲存</Button>
            </Col>

            <Col span={24} type="flex" justify="center" align="center">
              <hr></hr>
            </Col>

            <Col span={24} type="flex" justify="center" align="center">
            <Button   style={{ height: 40 }}  className="FormSave"> 編輯寵物經歷</Button>
            </Col>
          </Row>
        </Form>

        
      </Col>
      
     
     
    </Row>
  );
}

export default MemberPage;
