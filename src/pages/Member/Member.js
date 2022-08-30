import { Divider } from "antd";
import images from "../../config/images";
import ButtonComponent from "../../components/button/button";
import React from "react";
import {   Select,Col ,Row,Button, Checkbox, Form, Input,  Radio,TimePicker,DatePicker} from 'antd';

import "./Member.less";

function MemberPage() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      const { Option } = Select;
     
      const config = {
        
        rules: [   
          {
            
            type: 'object',
            required: true,
            message: 'Please select time!',
            
          },
        ],
      };
      
      const { TextArea } = Input;


    return(
        
        <Row  type="flex" justify="center" align="middle">
            <Col span={16}  type="flex"  justify="center" align="middle">
                <img className="Member1" src={images.Member1} /> 
                <p className="M-title">會員資料</p>
                
            </Col>
            <Col  span={16} type="flex" justify="center" align="middle" >
                <hr></hr>
               <div className="form" >
                <Form
                    
                    name="basic"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 6,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                        <Form.Item
                            label="姓名"
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item 
                          wrapperCol={{
                            span:5,
                        }}
                        label="性別"  
                        name="sex"
                        rules={[
                            {
                            required: true,
                            message: 'Please pick an item!',
                            },
                        ]}
                    
                        >
                            <Radio.Group >
                                <Radio value="apple" > 女 </Radio>
                                <Radio value="pear"> 男 </Radio>

                            </Radio.Group>
                        </Form.Item>
            
                   
                    `   <Form.Item name="date-picker" label="生日" {...config}>
                                <DatePicker placeholder="請選擇日期"/>
                        </Form.Item>`
                        
                        <Form.Item
                          wrapperCol={{
                            span: 4,
                        }}
                        label="年齡"
                        name="old"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                        >
                            <Input />
                        </Form.Item>
                        
                        
                        <Form.Item
                          wrapperCol={{
                            span: 6,
                        }}
                        label="行動電話"
                        name="phone"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                        >
                            <Input placeholder="+886" />
                        </Form.Item>
                        
                        <Form.Item
                          wrapperCol={{
                            span: 12,
                        }}
                        label="電子郵件"
                        name="Email"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                        >
                            <Input  />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                span: 12,
                            }}
                            label="Password"
                            name="password"
                            
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                        >
                            <Input.Password  />

                            <Button >更改密碼</Button>
                        </Form.Item>

                        <Form.Item
                           wrapperCol={{
                            span: 12,
                        }}
                         label="TextArea">
                        <TextArea rows={4} />
                        </Form.Item>
                    </Form>
                    </div>
            </Col>
        </Row>
    
    );
}

export default MemberPage;