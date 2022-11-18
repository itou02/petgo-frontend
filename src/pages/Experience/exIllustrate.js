import { Divider } from "antd";
import images from "../../config/images";
import ButtonComponent from "../../components/button/button";
import React from "react";
import { Col, message, Row, Tag, Steps, Button } from "antd";

import "./exIllustrate.less";

function ExperienceIllustratePage() {
  return (
    <div id="exIllustrate">
      <Row type="flex" justify="center">
        <Col xl={10} lg={12} md={16} sm={20} xs={22} className="warp">
          <Row type="flex" justify="center">
            <Col md={24} xs={24}>
              <p className="title">體驗者說明</p>
              <Row type="flex" justify="center">
                <Col md={18} sm={22} xs={22} className="ContentBody">
                  <p>請詳細查閱以下內容</p>
                  <p>
                    一、媒合過程中任何人都不得對他人進行騷擾、還有言語不雅等情況
                  </p>
                  <p>　　發生，若遭到檢舉則直接封鎖。</p>
                  <p>二、本人需年滿18歲以上才能進入</p>
                  <p>三、體驗期間不能對寵物進行暴力、毆打之行為</p>
                  <p>四、體驗期間只能餵食飼主提供的飼料、點心等</p>
                  <p>五、體驗期間如果寵物要洗澡，需使用飼主提供的盥洗用具</p>
                  <p>六、體驗期間寵物如有不適，請立刻通知飼主</p>
                  <p>
                    七、體驗期間寵物如有什麼意外請私下處理，本平台不提供任何責任
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <a href="/Experience/experiencer-illustrate/card">
              <ButtonComponent
                text="前往體驗"
                size="large"
                name="gotoexperence "
              />
            </a>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default ExperienceIllustratePage;
