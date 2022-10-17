import React from "react";
import { Col,Row ,message,Space,Card} from "antd";
import ButtonComponent from "../../components/button/button";
import CardComponent from "../../components/card/card";
import {EnvironmentOutlined} from '@ant-design/icons';
import './exPet.less'
import images from "../../config/images";

const { Meta } = Card;


/*體驗者專區-首頁-有狗狗*/
function ExPet() {
    const check = () => {
        message.check("查看");
    };

    return (
        <div className="container">
            <Row>
                <Col span={24} className="exFilter">
                    <h2>日期：<input type={"date"}></input></h2>
                    <h2>
                        <select style={{width:"200px"}}>
                            <option>縣市</option>                      
                        </select>
                    </h2>
                    <h2>
                        <select style={{width:"200px"}}>
                            <option>地區</option>                      
                        </select>
                    </h2>
                    <h2>
                        <select style={{width:"200px"}}>
                            <option>品種</option>                      
                        </select>
                    </h2>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={19} className="exCards">
                    <CardComponent                                                
                        name="card .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                                <h4>體驗日期:</h4>
                                <h4>2022/06/12 - 2022/06/30</h4>
                            </div>
                        }     
                        btn={<a href="/Experience/experiencer-illustrate/card/ex-pet-detail">
                                <ButtonComponent
                                text="查看"                    
                                name="exPetCheckBtn"
                                handleSubmit={check}/>
                            </a>
                        }
                    />

                    <CardComponent                                                
                        name="card .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                                <h4>體驗日期:</h4>
                                <h4>2022/06/12 - 2022/06/30</h4>
                            </div>
                        }     
                        btn={<a href="/Experience/experiencer-illustrate/card/ex-pet-detail">
                            <ButtonComponent
                            text="查看"                    
                            name="exPetCheckBtn"
                            handleSubmit={check}/>
                        </a>
                        }
                    />

                    <CardComponent                                                
                        name="card .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                                <h4>體驗日期:</h4>
                                <h4>2022/06/12 - 2022/06/30</h4>
                            </div>
                        }     
                        btn={<a href="/Experience/experiencer-illustrate/card/ex-pet-detail">
                            <ButtonComponent
                            text="查看"                    
                            name="exPetCheckBtn"
                            handleSubmit={check}/>
                        </a>
                        }
                    />

                    <CardComponent                                                
                        name="card .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                                <h4>體驗日期:</h4>
                                <h4>2022/06/12 - 2022/06/30</h4>
                            </div>
                        }     
                        btn={<a href="/Experience/experiencer-illustrate/card/ex-pet-detail">
                            <ButtonComponent
                            text="查看"                    
                            name="exPetCheckBtn"
                            handleSubmit={check}/>
                        </a>
                        }
                    />

                    <CardComponent                                                
                        name="card .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                                <h4>體驗日期:</h4>
                                <h4>2022/06/12 - 2022/06/30</h4>
                            </div>
                        }     
                        btn={<a href="/Experience/experiencer-illustrate/card/ex-pet-detail">
                            <ButtonComponent
                            text="查看"                    
                            name="exPetCheckBtn"
                            handleSubmit={check}/>
                        </a>
                        }
                    />
                </Col>
            </Row>




            
                        


        </div>
    );
}
export default ExPet;