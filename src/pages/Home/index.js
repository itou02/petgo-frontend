import React from 'react';
import { message } from 'antd';
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import ButtonComponent from "../../components/button/button";
import { Button, Image, Row, Col, Input, Divider, Alert, Steps } from 'antd';
import { useState } from 'react';
import images from '../../config/images';
import './index.less'
import { AiFillMail, AiTwotoneStar } from "react-icons/ai";
import { GrFormSearch, GrMoney, GrShield, GrStar, GrTooltip } from "react-icons/gr";



function Index(props) {
  const success = () => {
    message.success("預約成功");
  };
  const { Step } = Steps;
  const steps = [
    {
      title: <div><div className='StepBlock'>{<GrFormSearch className='StepBlockimg' />}</div><h3>搜尋服務</h3></div>,
      content: 'First-content',
    },
    {
      title: <div><div className='StepBlock' style={{ padding: '10%' }}>{< GrTooltip className='StepBlockimg' />}</div><h3>聯絡保母</h3></div>,
      content: 'Second-content',
    },
    {
      title: <div><div className='StepBlock' style={{ padding: '8%' }}>{< GrMoney className='StepBlockimg' />}</div><h3>安全付款</h3></div>,
      content: 'third-content',
    },
    {
      title: <div><div className='StepBlock' style={{ padding: '8%' }}>{< GrShield className='StepBlockimg' />}</div><h3>執行服務</h3></div>,
      content: 'fourth-content',
    },
    {
      title: <div><div className='StepBlock'>{< AiTwotoneStar className='StepBlockimg' />}</div><h3>留下評論</h3></div>,
      content: 'Last-content',
    },
  ];


  return (
    <div>
      <Row style={{ justifyContent: "space-around", marginBottom: '50px' }}>
        <Col sm={{ span: 20 }} md={{ span: 10 }} className="picture">
          <div className='imgblock'>
            <img
              src={images.bg1}
            />
          </div>
        </Col>
        <Col sm={{ span: 20 }} md={{ span: 10 }} className='right'>
          <Row className="wrapper">
            <Col span={20} >
              <Row>
                <Alert className="tag"
                  message=" 因應新冠肺炎疫情嚴峻"
                  description="毛小愛推出『無接觸』遛狗服務，協助匡列居家隔離毛爸媽一起防疫，
                您只需要將寵物綁在門口，專業溜狗保母前往將毛小孩接走，確保全程安全無接觸。"
                  type="warning"
                  showIcon
                  closable
                />
              </Row>
              <Row>
                <h1 style={{ letterSpacing: '8px' }}>毛茸茸到府寵物保母，某次服務免費家訪！優質毛孩照顧只要<i>400元</i></h1>
              </Row>
              <Row><Input.Group compact>

                <Input
                  className='a'
                  style={{
                    width: 'calc( 60%)',
                    height: 'calc( 40px)',
                  }}
                  placeholder="電子郵件地址"
                  prefix={<AiFillMail style={{ opacity: '30%' }} />}
                />
                <ButtonComponent
                  text="立即預約"
                  size="large"
                  handleSubmit={success}
                />
              </Input.Group></Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ marginBottom: '50px' }}><Col span={24} className='subscribe'><h2>如何預約我們的服務?</h2></Col></Row>
      <Row style={{ justifyContent: "center" }}>
        <Col span={15} style={{ justifyContent: "center" }}>
          <Steps >
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </Col>

      </Row>
    </div>

  )

}

export default Index;
// function Index(props) {

//   const success = () => {
//     message.success("預約成功");
//   };
//   const warning = () => {
//     message.warning('滾出去');
//   };
//   return (
//     <div>
//       <ButtonComponent
//         text="立即預約"
//         size="large"
//         handleSubmit={success}
//       />
//       <ButtonComponent
//         text="退出頁面"
//         size="large"
//         handleSubmit={warning}
//       />
//     </div>

//   )
// }


