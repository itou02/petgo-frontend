import React from "react";
import { Button, Modal } from "antd";
import "./button.less";
import { ExclamationCircleOutlined } from '@ant-design/icons';

function ButtonComponent(props) {
    const { text, size,name, handleSubmit } = props;
    const { confirm } = Modal;
    // const showDeleteConfirm = () => {
    //     confirm({
    //       title: '是否確認修改密碼？',
    //       icon: <ExclamationCircleOutlined />,
    //       content: 'Some descriptions',
    //       okText: '是',
    //       okType: 'danger',
    //       cancelText: '否',
    
    //       onOk() {
    //         console.log('OK');
    //       },
    
    //       onCancel() {
    //         console.log('Cancel');
    //       },
    //     });
    //   };
    return (
        <Button type="primary" size={size} className={name} onClick={handleSubmit} >
            {text}
        </Button>
        
    );
}

export default ButtonComponent;