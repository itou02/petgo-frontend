import images from "../../config/images";
import React, { useState } from "react";
import ButtonComponent from "../../components/button/button";
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
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import axios from 'axios';
import _ from "lodash";
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

  const provinceData = ["臺北市", "臺中市"];

  // const provinceData = [  '嘉義縣', '新北市', '嘉義市', '新竹縣', '新竹市',
  // '臺北市', '臺南市', '宜蘭縣', '苗栗縣', '雲林縣',
  // '花蓮縣', '臺中市', '臺東縣', '桃園市', '南投縣',
  // '高雄市', '金門縣', '屏東縣', '基隆市', '澎湖縣',
  // '彰化縣', '連江縣',];
  const cityData = {
    臺中市: ["大里區", "北區", "南區"],
    臺北市: ["東區", "大安區", "萬華區"],
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
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }

    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }

    return isJpgOrPng && isLt2M;
  };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
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
  const [posts, setPosts] = useState([])


  React.useEffect(() => {
    // fetch_data()

    const config = {
      url: 'http://127.0.0.1:8000/api/member',  // 只有此為必需
      method: 'get', // 大小寫皆可
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'X-Requested-With': 'XMLHttpRequest',
      },
      responseType: 'json', // 伺服器回應的數據類型
    }
    try {
      axios(config)
        .then(res => {
          console.log(res)
          setPosts(res)
        }, []);
    }
    catch (error) {
      throw error;
      // Do  with error
    }
  }, []);
  console.log('posts=>', posts);
  return (

    <div id="Member">
      <Row type="flex" justify="center" align="middle">
        <Col lg={16} md={18} sm={20} xs={22} type="flex" justify="center" align="middle">
          <img className="Member1" src={images.Member1} />
          <p className="M-title">會員資料</p>
        </Col>
        <Col lg={16} md={18} sm={20} xs={22} type="flex" justify="center" align="center">
          <hr></hr>
        </Col>

        <Col

          lg={12}
          md={18}
          sm={20}
          xs={22}
          className="MemberFormWarp"
          type="flex"
          justify="center"
          align="center"
        >
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
              <Col lg={8} md={24} sm={24} xs={24} type="flex" justify="center">
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
                        width: "100%",
                      }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </Col>
              <Col lg={14} md={24} sm={24} xs={24}>
                <Row type="flex" align="middle" className="inputWarp">
                  <Col lg={14} md={14} sm={16} xs={16}>
                    <Form.Item
               wrapperCol={{
                md: 16,
                sm:18,
                xs:2,
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
                  <Col lg={10} md={10} sm={8} xs={8}>
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

                <Row type="flex" align="center">
                  <Col llg={14} md={14} sm={16} xs={16} >
                    <Form.Item
                      wrapperCol={{
                        md: 16,
                        sm: 18,
                        xs: 2,
                      }}
                      name="date-picker"
                      label="生日"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <DatePicker
                        type="text"
                        disabled="disabled"
                        placeholder="請選擇日期"
                      />
                    </Form.Item>
                    `
                  </Col>
                  <Col lg={10} md={10} sm={8} xs={8}>
                    <Form.Item
                      label="年齡"
                      name="old"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input type="text" disabled="disabled" />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col lg={10} md={10} xs={10}>
                <Form.Item
                   wrapperCol={{
                    md: 14,
                    sm: 18,
                    xs: 2,
                  }}
                  label="行動電話"
                  name="phone"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="09XX-XXX-XXX" />
                </Form.Item>
              </Col>
              <Col md={14} xs={14}>
                <Form.Item
                  wrapperCol={{
                    md: 22,
                    xs: 24,
                  }}
                  label="Area"
                  name="Area"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    className="AreaSelect"
                    name="city"
                    defaultValue={provinceData[0]}
                    onChange={handleProvinceChange}
                  >
                    {provinceData.map((province) => (
                      <Option key={province}>{province}</Option>
                    ))}
                  </Select>
                  <Select value={secondCity} onChange={onSecondCityChange} name="district">
                    {cities.map((city) => (
                      <Option key={city}>{city}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row className="FormItemWarp">
              <Col span={24}>
                <Form.Item
                  label="email"
                  name="email"
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
                  wrapperCol={{ md: 22 }}
                  label="password"
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
                  name="intro"
                >
                  <TextArea rows={4} />
                </Form.Item>
              </Col>
            </Row>
            <Row span={24} type="flex" justify="space-between" align="middle">
              <Col span={11}>
                <ButtonComponent text="取消" size="large" name="FormCancel " />
              </Col>
              <Col span={11}>
                <ButtonComponent text="儲存" size="large" name="FormSave" />
              </Col>

              <Col span={24} type="flex" justify="center" align="center">
                <hr></hr>
              </Col>

              <Col span={24} type="flex" justify="center" align="center">
                <ButtonComponent
                  text="編輯寵物經歷"
                  size="large"
                  name="Edit-Petexperience"
                />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default MemberPage;
