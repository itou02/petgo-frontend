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
  Space,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

import "./Pet.less";

function MemberPage() {
  const { RangePicker } = DatePicker;

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { TextArea } = Input;
  const { Option } = Select;
  const provinceData = ["台中市", "台北市"];
  const cityData = {
    台中市: ["大里區", "北區", "南區"],
    台北市: ["東區", "大安區", "萬華區"],
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

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <Row type="flex" justify="center" align="middle">
      <Col span={15} type="flex" justify="center" align="middle">
        <img className="Member1" src={images.pet1} />
        <p className="M-title">寵物資料</p>
      </Col>
      <Col span={15} type="flex" justify="center" align="center">
        <hr></hr>
      </Col>

      <Col
        span={10}
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
            <Col span={8} type="flex" justify="center">
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
            <Col span={16}>
              <Row span={24} type="flex" align="middle">
                <Col span={16}>
                  <Form.Item
                    wrapperCol={{
                      span: 21,
                    }}
                    label="姓名"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
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
                        message: "Please pick an item!",
                      },
                    ]}
                  >
                    <Radio.Group>
                      <Radio value="apple"> 公 </Radio>
                      <Radio value="pear"> 母 </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>

              <Row type="flex" align="center">
                <Col span={16}>
                  <Form.Item
                    wrapperCol={{
                      span: 21,
                    }}
                    label="品種"
                    name="variety"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="年齡" name="old">
                    <Input type="text" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={7}>
              <Form.Item
                wrapperCol={{
                  span: 21,
                }}
                label="體型"
                name="bodytype"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Select
                  showSearch
                  placeholder="請選擇體型"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().includes(input.toLowerCase())
                  }
                >
                  <Option value="超小型">超小型</Option>
                  <Option value="小型">小型</Option>
                  <Option value="中型">中型</Option>
                  <Option value="大型">大型</Option>
                  <Option value="中型">超大型</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                wrapperCol={{
                  span: 24,
                }}
                label="開始飼養"
                name="start_rearing"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <DatePicker onChange={onChange} placeholder="選擇日期" />
              </Form.Item>
            </Col>
            <Col span={1}></Col>
            <Col span={8}>
              <Form.Item
                wrapperCol={{
                  span: 24,
                }}
                label="結束飼養"
                name="end_rearing"
              >
                <DatePicker onChange={onChange} placeholder="選擇日期" />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Form.Item
                wrapperCol={{
                  span: 24,
                }}
                label="個性(介紹一下毛孩吧)"
              >
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                wrapperCol={{
                  span: 24,
                }}
                label="提醒"
              >
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <Row type="flex" justify="space-between" align="bottom">
            <Col span={6}>
              <Form.Item
                wrapperCol={{
                  span: 21,
                }}
                label="常去的醫院診所"
              >
                <Input placeholder="醫院名字" />
              </Form.Item>
            </Col>
            <Col span={18}>
              <Form.Item
                wrapperCol={{
                  span: 24,
                }}
              >
                <Input placeholder="醫院地址" />
              </Form.Item>
            </Col>
          </Row>

          <Row type="flex" align="bottom">
            <Col span={6}>
              <Form.Item
                wrapperCol={{
                  span: 24,
                }}
                label="絕育狀況"
                name="sterilization"
                rules={[
                  {
                    required: true,
                    message: "Please pick an item!",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio value="apple"> 是 </Radio>
                  <Radio value="pear"> 否</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                wrapperCol={{
                  span: 21,
                }}
                label="緊急聯絡人"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder="不能為飼主本人名字" />
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item
                wrapperCol={{
                  span: 24,
                }}
              >
                <Input placeholder="連絡電話" />
              </Form.Item>
            </Col>
          </Row>

          <Row span={24} type="flex" justify="space-between" align="middle">
            <Col span={11}>
            <ButtonComponent
                text="取消"
                size="large"
                name="FormCancel "
              />
            </Col>
            <Col span={11}>
            <ButtonComponent
                text="儲存"
                size="large"
                name="FormSave"
              />
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default MemberPage;
