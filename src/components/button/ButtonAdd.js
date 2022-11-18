
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import React from 'react';

function ButtonAdd(props) {
  const { text, size, name, handleSubmit, htmlType } = props;
  const { confirm } = Modal;

  const showConfirm = () => {
    confirm({
      title: '確定要接受請求嗎?',
      icon: <ExclamationCircleOutlined />,
      content: '可以先查看詳細呦~',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  
  return (
    <Space wrap>
    
    <Button onClick={showConfirm} type="dashed" size={size} className={name}  htmlType={htmlType} >
      {text}
    </Button>
    
  </Space>
  );
}

export default ButtonAdd;
