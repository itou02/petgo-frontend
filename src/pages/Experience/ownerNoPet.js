import React from "react";
import { Col,Row ,message} from "antd";
import ButtonComponent from "../../components/button/button";
import './owner.less'

function OwnerNoPet() {
    const add = () => {
        message.add("新增寵物成功");
    };
    const del = () => {
        message.del("確定移除寵物？");
    };
    const check = () => {
        message.check("確定移除寵物？");
    };

    return (
        <div className="container">
            <Row justify="center">
                <Col span={20} className="havePet">
                    <Col span={22} className="title">
                        <div style={{width:"100px"}}></div>
                        <h1>現有的體驗寵物</h1>
                        <ButtonComponent
                            text="新增寵物"
                            size="large"
                            name="addExPet"
                            handleSubmit={add}
                        />
                    </Col>
                    <Col span={8} className="noPet">
                        <p>尚未新增寵物</p>
                    </Col>
                </Col>
            </Row>
        </div>
    );
}

export default OwnerNoPet;