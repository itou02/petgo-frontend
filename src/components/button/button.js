import React from "react";
import { Button } from "antd";
import "./button.less";

function ButtonComponent(props) {
    const { text, size,name, handleSubmit } = props;
    return (
        <Button type="primary" size={size} className={name} onClick={handleSubmit} >
            {text}
        </Button>
        
    );
}

export default ButtonComponent;