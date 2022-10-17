import {  Card } from 'antd';
import React from 'react';
import "./card.less";
import images from "../../config/images";


// const { Meta } = Card;

function CardComponent(props) {

  const { img, title,icon,text,name, btn,handleSubmit,light } = props;
  return (
    <Card
      hoverable
      // cover={<img alt="pet" src={images.expet} />}
      // title={title}
      // description={text}
      className={name}
      onClick={handleSubmit}
      >
      {img}
      {title}
      {icon}
      {text}
      {btn}
      {light}
      
    </Card>
  );
}
export default CardComponent;
