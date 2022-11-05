import { Col, Row, message, Space, Card, DatePicker, Select, Form } from "antd";
import ButtonComponent from "../../components/button/button";
import CardComponent from "../../components/card/card";
import { EnvironmentOutlined } from "@ant-design/icons";
import "./exPet.less";
import images from "../../config/images";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import axios from 'axios';
const { Meta } = Card;

/*體驗者專區-首頁-有狗狗*/
function ExPet() {
  const check = () => {
    message.check("查看");
  };

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

  const [posts, setPosts] = useState([])
  const [post, setPost] = useState([])
  React.useEffect(() => {
    // fetch_data()

    const config = {
      url: 'http://127.0.0.1:8000/api/experience/experiencer-illustrate/card',  // 只有此為必需
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
          console.log(res.data.experiences)
          setPosts(res.data.experiences)
          console.log(res.data.varieties)
          setPost(res.data.varieties)
        }, []);
    }
    catch (error) {
      throw error;
      // Do  with error
    }
  }, []);
  console.log('posts=>', posts);
  console.log('post=>', post);
  return (
    <div id="ExPet">
      <Row className="exFilter">
        <Col md={24} >
          <h2>篩選：</h2>

          <Form className="searchFrom">
            <Row type="flex" justify="start" align="middle">

              <Col className="searchFromItem" xl={4} lg={5} md={7} sm={12} xs={12}>
                <Row>
                  <Col xl={6} md={6}  >
                    <p>日期</p>
                  </Col>
                  <Col xl={18} md={18}>
                    <DatePicker type={"date"} placeholder="請選擇日期" />
                  </Col>
                </Row>
              </Col>

              <Col className="searchFromItem" xl={4} lg={5} md={7} sm={12} xs={12}>
                <Row>
                  <Col xl={6} md={6}>
                    <p>地區</p>
                  </Col>
                  <Col xl={18} md={18}>
                    <Select
                      className="AreaSelect"
                      defaultValue={provinceData[0]}
                      onChange={handleProvinceChange}
                    >
                      {provinceData.map((province) => (
                        <Option key={province}>{province}</Option>
                      ))}
                    </Select>

                    <Select value={secondCity} onChange={onSecondCityChange}>
                      {cities.map((city) => (
                        <Option key={city}>{city}</Option>
                      ))}
                    </Select>
                  </Col>
                </Row>
              </Col>

              <Col className="searchFromItem" xl={4} lg={5} md={7} sm={12} xs={12}>
                <Row>
                  <Col md={6}>
                    <p>品種</p>
                  </Col>
                  <Col md={18} xs={18}>
                    <Select
                      showSearch
                      style={{
                        width: 160,
                      }}
                      value="品種"
                      placeholder="品種"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children.includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        optionA.children
                          .toLowerCase()
                          .localeCompare(optionB.children.toLowerCase())
                      }
                    >
                      {post.map((post, index) => {
                        return (
                          <Option value="1" key={index}>{post.variety}</Option>
                        );
                      })}
                    </Select>
                  </Col>
                </Row>
              </Col>

              <Col className="searchFromItem" xl={1} lg={2} md={2} sm={24} xs={24}>
                <Row justify="start">
                  <Col md={24}>
                    <ButtonComponent text="查詢" name="search" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row justify="start">
        {posts.map((post, index) => {
          return (
            <Col xl={6} lg={8} md={12} sm={12} xs={24} className="exCards" key={index}>
              <CardComponent
                name="card .ant-card-body"
                img={<img alt="pet" src={post.img} />}
                // img={<img alt="pet" src={images.expet}}
                title={<h1>{post.name}</h1>}
                icon={
                  <h1>
                    <EnvironmentOutlined />
                    {post.location}
                  </h1>
                }
                text={
                  <div>
                    <h4>品種：{post.variety}</h4>
                    <h4>年齡：{post.age}</h4>
                    <h4>體型：{post.size}</h4>
                    <h4>性別：{post.sex}</h4>
                    <h4>體驗日期:</h4>
                    <h4>{post.start_date} - {post.end_date}</h4>
                  </div>
                }
                btn={
                  <a href="/Experience/experiencer-illustrate/card/ex-pet-detail">
                    <ButtonComponent
                      text="查看"
                      name="exPetCheckBtn"
                      handleSubmit={check}
                    />
                  </a>
                }
              />
            </Col>
          );
        })}
        {/* <Col xl={6} lg={8} md={12} sm={12} xs={24} className="exCards">
          <CardComponent
            name="card .ant-card-body"
            img={<img alt="pet" src={images.jm} />}
            // img={<img alt="pet" src={images.expet}}
            title={<h1>阿金</h1>}
            icon={
              <h1>
                <EnvironmentOutlined />
                台中市，大里區
              </h1>
            }
            text={
              <div>
                <h4>品種：拉不拉多</h4>
                <h4>年齡：5</h4>
                <h4>體型：大型</h4>
                <h4>性別：女</h4>
                <h4>體驗日期:</h4>
                <h4>2022/06/12 - 2022/06/30</h4>
              </div>
            }
            btn={
              <a href="/Experience/experiencer-illustrate/card/ex-pet-detail">
                <ButtonComponent
                  text="查看"
                  name="exPetCheckBtn"
                  handleSubmit={check}
                />
              </a>
            }
          />
        </Col>
        <Col xl={6} lg={8} md={12} sm={12} xs={24} className="exCards">
          <CardComponent
            name="card .ant-card-body"
            img={<img alt="pet" src={images.jm} />}
            // img={<img alt="pet" src={images.expet}}
            title={<h1>阿金</h1>}
            icon={
              <h1>
                <EnvironmentOutlined />
                台中市，大里區
              </h1>
            }
            text={
              <div>
                <h4>品種：拉不拉多</h4>
                <h4>年齡：5</h4>
                <h4>體型：大型</h4>
                <h4>性別：女</h4>
                <h4>體驗日期:</h4>
                <h4>2022/06/12 - 2022/06/30</h4>
              </div>
            }
            btn={
              <a href="/Experience/experiencer-illustrate/card/ex-pet-detail">
                <ButtonComponent
                  text="查看"
                  name="exPetCheckBtn"
                  handleSubmit={check}
                />
              </a>
            }
          />
        </Col>
        <Col xl={6} lg={8} md={12} sm={12} xs={24} className="exCards">
          <CardComponent
            name="card .ant-card-body"
            img={<img alt="pet" src={images.jm} />}
            // img={<img alt="pet" src={images.expet}}
            title={<h1>阿金</h1>}
            icon={
              <h1>
                <EnvironmentOutlined />
                台中市，大里區
              </h1>
            }
            text={
              <div>
                <h4>品種：拉不拉多</h4>
                <h4>年齡：5</h4>
                <h4>體型：大型</h4>
                <h4>性別：女</h4>
                <h4>體驗日期:</h4>
                <h4>2022/06/12 - 2022/06/30</h4>
              </div>
            }
            btn={
              <a href="/Experience/experiencer-illustrate/card/ex-pet-detail">
                <ButtonComponent
                  text="查看"
                  name="exPetCheckBtn"
                  handleSubmit={check}
                />
              </a>
            }
          />
        </Col>
        <Col xl={6} lg={8} md={12} sm={12} xs={24} className="exCards">
          <CardComponent
            name="card .ant-card-body"
            img={<img alt="pet" src={images.jm} />}
            // img={<img alt="pet" src={images.expet}}
            title={<h1>阿金</h1>}
            icon={
              <h1>
                <EnvironmentOutlined />
                台中市，大里區
              </h1>
            }
            text={
              <div>
                <h4>品種：拉不拉多</h4>
                <h4>年齡：5</h4>
                <h4>體型：大型</h4>
                <h4>性別：女</h4>
                <h4>體驗日期:</h4>
                <h4>2022/06/12 - 2022/06/30</h4>
              </div>
            }
            btn={
              <a href="/Experience/experiencer-illustrate/card/ex-pet-detail">
                <ButtonComponent
                  text="查看"
                  name="exPetCheckBtn"
                  handleSubmit={check}
                />
              </a>
            }
          />
        </Col> */}
      </Row>
    </div>
  );
}
export default ExPet;
