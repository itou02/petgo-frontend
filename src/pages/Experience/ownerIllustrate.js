import { Divider } from "antd";
import images from "../../config/images";
import ButtonComponent from "../../components/button/button";
import React from "react";
import { Col, message, Row, Tag, Steps, Button } from 'antd';

import "./ownerIllustrate.less";

function OwnerIllustratePage() {

    return (
        <div id="exIllustrate">
      <Row type="flex" justify="center">
        <Col xl={10} lg={12} md={16} sm={20} xs={22} className="warp">
          <Row type="flex" justify="center">
            <Col md={24} xs={24}>
              <p className="title">飼主說明</p>
              <Row type="flex" justify="center">
                <Col md={18} sm={22} xs={22} className="ContentBody">
                <p>請詳細查閱以下內容</p>
                  <p>
                    一、媒合過程中任何人都不得對他人進行騷擾、還有言語不雅等情況
                  </p>
                  <p>　　發生，若遭到檢舉則直接封鎖。</p>
                  <p>二、本人需年滿18歲以上才能進入</p>
                  <p>三、自家要有足夠的飼料、牢固不會掙脫的項圈、胸背、牽繩</p>
                  <p>四、一年內預防針、狂犬病疫苗注射</p>
                  <p>五、狗狗若發情，需準備禮貌帶及尿布、生理褲</p>
                  <p>六、狗狗習慣之生活用品 例: 睡墊、食碗 </p>
                  <p>七、請在寵物資訊中寫請出需求，也請勿必做好溝通 </p>
                  <p>
                    八、體驗期間寵物如有什麼意外請私下處理，本平台不提供任何責任
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row type="flex" justify="center">
          <a href="/Experience/owner-illustrate/post">
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

export default OwnerIllustratePage;