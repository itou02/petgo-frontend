import React from "react";
import { Col,Row ,message,Space,Card} from "antd";
import ButtonComponent from "../../components/button/button";
import CardComponent from "../../components/card/card";
import {EnvironmentOutlined} from '@ant-design/icons';
import { GiPlainCircle } from "react-icons/gi";
import './adoptionAlready.less'
import images from "../../config/images";

const { Meta } = Card;


/*已有共養人-首頁*/
function ExPet() {
    const check = () => {
        message.check("查看");
    };

    return (
        <div className="container">
            <Row>
                <Col span={24} className="exFilter">
                    
                        <Col span={21}>
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
                            <input type="radio" name="dog" value="dog" /><label>狗</label>
                            <input type="radio" name="cat" value="cat" /><label>貓</label>
                        </Col>
                        <Col span={3} className="shareBtn">
                            <ButtonComponent
                                text="已有共養人"                    
                                name="alreadyBtn"
                            />
                            <ButtonComponent
                                text="未有共養人"                    
                                name="notYetBtn"
                            />
                        </Col>                                        
                </Col>
            </Row>
            <Row justify="center">
                <Col span={19} className="exCards">
                    <CardComponent                                                
                        name="adoptionCard .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                            </div>
                        }     
                        btn={<ButtonComponent
                            text="查看"                    
                            name="adoptionCheckBtn"
                            handleSubmit={check}/>
                        }
                        light={<h1><GiPlainCircle /><GiPlainCircle /><GiPlainCircle /></h1>}
                        
                    />
<CardComponent                                                
                        name="adoptionCard .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                            </div>
                        }     
                        btn={<ButtonComponent
                            text="查看"                    
                            name="adoptionCheckBtn"
                            handleSubmit={check}/>
                        }
                        light={<h1><GiPlainCircle /><GiPlainCircle /><GiPlainCircle /></h1>}
                        
                    />
                    <CardComponent                                                
                        name="adoptionCard .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                            </div>
                        }     
                        btn={<ButtonComponent
                            text="查看"                    
                            name="adoptionCheckBtn"
                            handleSubmit={check}/>
                        }
                        light={<h1><GiPlainCircle /><GiPlainCircle /><GiPlainCircle /></h1>}
                        
                    />
                    <CardComponent                                                
                        name="adoptionCard .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                            </div>
                        }     
                        btn={<ButtonComponent
                            text="查看"                    
                            name="adoptionCheckBtn"
                            handleSubmit={check}/>
                        }
                        light={<h1><GiPlainCircle /><GiPlainCircle /><GiPlainCircle /></h1>}
                        
                    />
                    <CardComponent                                                
                        name="adoptionCard .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                            </div>
                        }     
                        btn={<ButtonComponent
                            text="查看"                    
                            name="adoptionCheckBtn"
                            handleSubmit={check}/>
                        }
                        light={<h1><GiPlainCircle /><GiPlainCircle /><GiPlainCircle /></h1>}
                        
                    />
                    <CardComponent                                                
                        name="adoptionCard .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                            </div>
                        }     
                        btn={<ButtonComponent
                            text="查看"                    
                            name="adoptionCheckBtn"
                            handleSubmit={check}/>
                        }
                        light={<h1><GiPlainCircle /><GiPlainCircle /><GiPlainCircle /></h1>}
                        
                    />
                    <CardComponent                                                
                        name="adoptionCard .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                            </div>
                        }     
                        btn={<ButtonComponent
                            text="查看"                    
                            name="adoptionCheckBtn"
                            handleSubmit={check}/>
                        }
                        light={<h1><GiPlainCircle /><GiPlainCircle /><GiPlainCircle /></h1>}
                        
                    />
                    <CardComponent                                                
                        name="adoptionCard .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                            </div>
                        }     
                        btn={<ButtonComponent
                            text="查看"                    
                            name="adoptionCheckBtn"
                            handleSubmit={check}/>
                        }
                        light={<h1><GiPlainCircle /><GiPlainCircle /><GiPlainCircle /></h1>}
                        
                    />
                    <CardComponent                                                
                        name="adoptionCard .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                            </div>
                        }     
                        btn={<ButtonComponent
                            text="查看"                    
                            name="adoptionCheckBtn"
                            handleSubmit={check}/>
                        }
                        light={<h1><GiPlainCircle /><GiPlainCircle /><GiPlainCircle /></h1>}
                        
                    />
                </Col>
            </Row>




            
                        


        </div>
    );
}
export default ExPet;