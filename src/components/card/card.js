import { Card } from "antd";
import React from "react";
import "./card.less";

// const { Meta } = Card;

function CardComponent(props) {
  const { img, title, icon, text, name, btn, handleSubmit, light } = props;
  return (
    <Card
      hoverable
      // cover={<img alt="pet" src={images.expet} />}
      // title={title}
      // description={text}
      className={name}
      onClick={handleSubmit}
    >
      <div className="imgwarp">{img}</div>
      <div className="nameWarp">
        {title}
        {icon}
      </div>

      {text}
      {btn}
      {light}
    </Card>
  );
}
export default CardComponent;
