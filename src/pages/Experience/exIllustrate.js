import { Divider } from "antd";
import images from "../../config/images";
import ButtonComponent from "../../components/button/button";
import React from "react";
import { Col, message, Row,Tag, Steps,Button} from 'antd';

import "./exIllustrate.less";

function ExIllustrate() {
    
    return(
        <Row >
            <Col span={24} align="middle" >
                
                    <div className="warp" >
                        <p className="title">體驗者說明</p>
                            <div className="ContentBody">
                                <p>1. 邊邊是漢堡神偷</p>
                                <p>2. 芋頭好可愛</p>
                                <p>3. 阿金也很可愛</p>
                                <p>4. 不要亂抓小孩</p>
                                <p>5. 不要騙人</p>
                                <p>6. 不可以打人</p>
                                <p>7. 不可以打狗狗</p>
                                <p>8. 不可以強迫貓咪做不喜歡的事</p>
                                <p>9. 違規要付婷鈺團隊500萬美金</p>
                                <p>10. 你要看完上面那些 不管怎樣都要同意</p>
                            </div>
                            <a href="/Experience/experiencer-illustrate/card">
                                <Button  className="Btn1">
                                    前往體驗
                                </Button>
                            </a>
                    </div>
                
            </Col>
        </Row>
    
    );
}

export default ExIllustrate;