import React from "react";
import Profile from "../images/profile.png";
import Django from "../images/django.svg";
import ReactJS from "../images/react.svg";
import NodeJS from "../images/nodejs.svg";
import HTML5 from "../images/html5.svg";
import CSS3 from "../images/css3.svg";
import USA from "../images/usa.svg";
import FRANCE from "../images/france.svg";
import ARABE from "../images/arabe.svg";
import Python from "../images/python.svg";
import { Col, Row, Avatar, Timeline, Divider, Card, Rate } from "antd";
import { Fade } from "react-awesome-reveal";
import { CodeOutlined, FundProjectionScreenOutlined, GlobalOutlined, HeartFilled, ProjectOutlined, RiseOutlined, UserOutlined } from "@ant-design/icons";
import AppFooter from "../components/AppFooter";

const About = () => {


    return (
        <div className='about-screen'>
            <div className="about-image">
                <div className="static-about-container">
                    <div className="container">
                        <Timeline>
                            <Timeline.Item>
                                <Fade direction='down'>
                                    <div className='app-header light left'>
                                        <span> Who Am I <UserOutlined />
                                            <div className='under-frac'></div>
                                        </span>
                                    </div>
                                    <Row justify='center' align='middle'>
                                        <Col sm={24} md={4}>
                                            <Avatar src={Profile} size='large' />
                                        </Col>
                                        <Col sm={24} md={20}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati temporibus impedit beatae porro, dolorum ut. Repellendus consequuntur assumenda obcaecati reiciendis aperiam natus. Ea explicabo perferendis cumque corrupti, saepe libero aperiam?
                                        </Col>
                                    </Row>
                                </Fade>

                            </Timeline.Item>
                            <Timeline.Item>
                                <Fade cascade direction='down'>
                                    <div className='app-header light left'>
                                        <span> Education <FundProjectionScreenOutlined />
                                            <div className='under-frac'></div>
                                        </span>
                                    </div>
                                    <Row justify='center' align='middle'>
                                        <Col sm={24} md={4}>
                                            <a href="http://" target="_blank" rel="noopener noreferrer" className='about-institution'>
                                                DAUST
                                            </a>
                                        </Col>
                                        <Col sm={24} md={20}>
                                            <p className='timeline-date'>2019 - Current</p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati temporibus impedit beatae porro, dolorum ut. Repellendus consequuntur assumenda obcaecati reiciendis aperiam natus. Ea explicabo perferendis cumque corrupti, saepe libero aperiam?
                                        </Col>
                                    </Row>
                                    <Divider />
                                    <Row justify='center' align='middle'>
                                        <Col sm={24} md={4}>
                                            <a href="http://" target="_blank" rel="noopener noreferrer" className='about-institution'>
                                                EC2LT
                                            </a>
                                        </Col>
                                        <Col sm={24} md={20}>
                                            <p className='timeline-date'>2017 - 2019</p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati temporibus impedit beatae porro, dolorum ut. Repellendus consequuntur assumenda obcaecati reiciendis aperiam natus. Ea explicabo perferendis cumque corrupti, saepe libero aperiam?
                                        </Col>
                                    </Row>
                                </Fade>
                            </Timeline.Item>
                            <Fade cascade direction='down'>

                                <Timeline.Item>
                                    <div className='app-header light left'>
                                        <span>Programming Skills <CodeOutlined />
                                            <div className='under-frac'></div>
                                        </span>
                                    </div>
                                    <Row justify='center' align='middle' gutter={[8, 16]} className='mt-1'>
                                        <Col sm={24} md={12}>
                                            <Card>
                                                <Card.Meta
                                                    title="React Js"
                                                    avatar={<Avatar src={ReactJS} />}
                                                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                                />
                                            </Card>
                                        </Col>
                                        <Col sm={24} md={12}>
                                            <Card>
                                                <Card.Meta
                                                    title="Node JS"
                                                    avatar={<Avatar src={NodeJS} />}
                                                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                                />
                                            </Card>
                                        </Col>
                                        <Col sm={24} md={12}>
                                            <Card>
                                                <Card.Meta
                                                    title="Django"
                                                    avatar={<Avatar src={Django} />}
                                                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                                />
                                            </Card>
                                        </Col>
                                        <Col sm={24} md={12}>
                                            <Card>
                                                <Card.Meta
                                                    title="HTML5"
                                                    avatar={<Avatar src={HTML5} />}
                                                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                                />
                                            </Card>
                                        </Col>
                                        <Col sm={24} md={12}>
                                            <Card>
                                                <Card.Meta
                                                    title="CSS3"
                                                    avatar={<Avatar src={CSS3} />}
                                                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                                />
                                            </Card>
                                        </Col>
                                        <Col sm={24} md={12}>
                                            <Card>
                                                <Card.Meta
                                                    title="Python"
                                                    avatar={<Avatar src={Python} />}
                                                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                                />
                                            </Card>
                                        </Col>
                                    </Row>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <div className='app-header light left'>
                                        <span>Language Skills <GlobalOutlined />
                                            <div className='under-frac'></div>
                                        </span>
                                    </div>
                                    <Row justify='center' align='middle'>
                                        <Col sm={24} md={3}>
                                            <Avatar src={USA} />
                                        </Col>
                                        <Col sm={24} md={21}>
                                            <p>Fluent <Rate disabled allowHalf defaultValue={4.5} /></p>
                                        </Col>
                                    </Row>
                                    <Row justify='center' align='middle'>
                                        <Col sm={24} md={3}>
                                            <Avatar src={FRANCE} />
                                        </Col>
                                        <Col sm={24} md={21}>
                                            <p>Fluent <Rate disabled allowHalf defaultValue={4} /></p>
                                        </Col>
                                    </Row>
                                    <Row justify='center' align='middle'>
                                        <Col sm={24} md={3}>
                                            <Avatar src={ARABE} />
                                        </Col>
                                        <Col sm={24} md={21}>
                                            <p>Debutant <Rate disabled allowHalf defaultValue={2} /></p>
                                        </Col>
                                    </Row>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <div className='app-header light left'>
                                        <span>Work Experience <ProjectOutlined />
                                            <div className='under-frac'></div>
                                        </span>
                                    </div>
                                    <Row justify='center' align='middle' gutter={[8, 16]} className='mt-1'>
                                        <Col sm={24} md={12}>
                                            <ul className='work-experience-list'>
                                                <li>
                                                    <h3> Giga Electronic <a href="http://" target="_blank" rel="noopener noreferrer">
                                                        <RiseOutlined />
                                                    </a></h3>
                                                </li>
                                                <p><h4>Software Developer </h4></p>
                                                <p>Duration: 6 months</p>
                                            </ul>
                                        </Col>
                                        <Col sm={24} md={12}>
                                            <ul className='work-experience-list'>
                                                <li>
                                                    <h3> Easy Money <a href="http://" target="_blank" rel="noopener noreferrer">
                                                        <RiseOutlined />
                                                    </a></h3>
                                                </li>
                                                <p><h4>Software Developer</h4></p>
                                                <p>Duration: Not Specified</p>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <div className='app-header light left'>
                                        <span>Enjoy Doing <HeartFilled />
                                            <div className='under-frac'></div>
                                        </span>
                                    </div>
                                    <Row gutter={[16, 8]}>
                                        <Col sm={12} md={8}>
                                            <p>Swimming</p>
                                        </Col>
                                        <Col sm={12} md={8}>
                                            <p>Basket Ball</p>
                                        </Col>
                                        <Col sm={12} md={8}>
                                            <p>Something Else</p>
                                        </Col>
                                    </Row>
                                </Timeline.Item>
                                <Divider />
                            </Fade>
                        </Timeline>
                        <AppFooter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
