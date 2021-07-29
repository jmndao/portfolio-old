import {
    Button,
    Card,
    Col,
    Image,
    Input,
    Row,
    Tooltip,
    Form,
    Divider,
} from "antd";
import TextLoop from "react-text-loop";
import { Fade } from "react-awesome-reveal";
import CodeJ from "../images/code_j.png";
import Profile from "../images/profile.png";
import NodeJS from "../images/nodejs.svg";
import Python from "../images/python.svg";
import Django from "../images/django.svg";
import HTML5 from "../images/html5.svg";
import CSS3 from "../images/css3.svg";
import ReactJS from "../images/react.svg";
import {
    LinkedinOutlined,
    GithubOutlined,
    DownloadOutlined,
    EllipsisOutlined,
    RiseOutlined,
    SendOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import Avatar from "antd/lib/avatar/avatar";
import Meta from "antd/lib/card/Meta";
import AppFooter from "../components/AppFooter";

const HomeScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const validateMessages = {
        required: `This field is required!`,
        types: {
            email: "Please to enter you email.",
            name: "Please to enter your Full Name",
        },
    };

    const formSubmitHandler = () => {
        console.log("Form submitted");
    };

    return (
        <>
            <div className="home-app">
                <Row gutter={16}>
                    <Col sm={24} md={12}>
                        <div className="banner-info">
                            <p>Hello I'm,</p>
                            <TextLoop
                                springConfig={{ stiffness: 180, damping: 10 }}
                                className="changing-text"
                            >
                                <span>Jonathan M. NDAO </span>
                                <span>a FullStack Developer</span>
                            </TextLoop>{" "}
                            <p>Stay Connected</p>
                            <p>
                                <a href="#!">
                                    <LinkedinOutlined />
                                </a>
                                <a href="#!">
                                    <GithubOutlined />
                                </a>
                            </p>
                        </div>
                    </Col>
                    <Col sm={24} md={12}>
                        <Fade direction="right">
                            <Image
                                src={CodeJ}
                                width={"100%"}
                                height={"100%"}
                                preview={false}
                                className="home-image"
                            />
                        </Fade>
                    </Col>
                </Row>
                <div className="download-cv">
                    <Button
                        type="primary"
                        shape="round"
                        icon={<DownloadOutlined />}
                        size="large"
                    >
                        Download My CV
                    </Button>
                </div>
            </div>
            <div className="about-section" id="about">
                <div className="container">
                    <div className="app-header light right">
                        <span>
                            {" "}
                            {"{"} About {"}"}
                            <div className="under right"></div>
                        </span>
                    </div>
                    <Row justify="center" align="middle">
                        <Col sm={24} md={8}>
                            <Avatar src={Profile} className="avatar-big" />
                        </Col>
                        <Col sm={24} md={16}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                            temporibus impedit beatae porro, dolorum ut. Repellendus
                            consequuntur assumenda obcaecati reiciendis aperiam natus. Ea
                            explicabo perferendis cumque corrupti, saepe libero aperiam?
                        </Col>
                    </Row>
                    <div className="proficiency p-1">
                        <Row gutter={16} align="middle" justify="end">
                            <Col>
                                <div className="app-header light left">
                                    <span>
                                        Programming Skills
                                        <div className="under" style={{ width: "25px" }}></div>
                                    </span>
                                </div>
                            </Col>
                            <Col>
                                <Avatar src={ReactJS} className="sm-ml-1" size="large" />
                                <Avatar src={NodeJS} className="sm-ml-1" size="large" />
                                <Avatar src={HTML5} className="sm-ml-1" size="large" />
                                <Avatar src={CSS3} className="sm-ml-1" size="large" />
                                <Avatar src={Python} className="sm-ml-1" size="large" />
                                <Avatar src={Django} className="sm-ml-1" size="large" />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div className="project-section">
                <div className="container">
                    <div className="app-header left">
                        <span>
                            {" "}
                            {"{"} ...Projects {"}"}
                            <div className="under left dark"></div>
                        </span>
                    </div>
                    <Row align="middle" gutter={[8, 16]} justify="center">
                        <Fade cascade>
                            <Col sm={12} md={7} className="gutter-row m-1">
                                <Card
                                    style={{ width: 300 }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                    }
                                    actions={[
                                        <Tooltip placement="bottom" title="Github">
                                            <a href="#!">
                                                <GithubOutlined key="setting" />
                                            </a>
                                        </Tooltip>,
                                        <Tooltip placement="bottom" title="Website">
                                            <a href="#!">
                                                <RiseOutlined />
                                            </a>
                                        </Tooltip>,
                                        <Tooltip placement="bottom" title="See more">
                                            <a href="#!">
                                                <EllipsisOutlined key="ellipsis" />
                                            </a>
                                        </Tooltip>,
                                    ]}
                                >
                                    <Meta
                                        title="Easy Money"
                                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, a odit maiores exercitationem recusandae non."
                                    />
                                </Card>
                            </Col>
                            <Col sm={12} md={7} className="gutter-row m-1">
                                <Card
                                    style={{ width: 300 }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                    }
                                    actions={[
                                        <Tooltip placement="bottom" title="Github">
                                            <a href="#!">
                                                <GithubOutlined key="setting" />
                                            </a>
                                        </Tooltip>,
                                        <Tooltip placement="bottom" title="Website">
                                            <a href="#!">
                                                <RiseOutlined />
                                            </a>
                                        </Tooltip>,
                                        <Tooltip placement="bottom" title="See more">
                                            <a href="#!">
                                                <EllipsisOutlined key="ellipsis" />
                                            </a>
                                        </Tooltip>,
                                    ]}
                                >
                                    <Meta
                                        title="Easy Money"
                                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, a odit maiores exercitationem recusandae non."
                                    />
                                </Card>
                            </Col>
                            <Col sm={12} md={7} className="gutter-row m-1">
                                <Card
                                    style={{ width: 300 }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                    }
                                    actions={[
                                        <Tooltip placement="bottom" title="Github">
                                            <a href="#!">
                                                <GithubOutlined key="setting" />
                                            </a>
                                        </Tooltip>,
                                        <Tooltip placement="bottom" title="Website">
                                            <a href="#!">
                                                <RiseOutlined />
                                            </a>
                                        </Tooltip>,
                                        <Tooltip placement="bottom" title="See more">
                                            <a href="#!">
                                                <EllipsisOutlined key="ellipsis" />
                                            </a>
                                        </Tooltip>,
                                    ]}
                                >
                                    <Meta
                                        title="Easy Money"
                                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, a odit maiores exercitationem recusandae non."
                                    />
                                </Card>
                            </Col>
                            <Col sm={12} md={7} className="gutter-row m-1">
                                <Card
                                    style={{ width: 300 }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                    }
                                    actions={[
                                        <Tooltip placement="bottom" title="Github">
                                            <a href="#!">
                                                <GithubOutlined key="setting" />
                                            </a>
                                        </Tooltip>,
                                        <Tooltip placement="bottom" title="Website">
                                            <a href="#!">
                                                <RiseOutlined />
                                            </a>
                                        </Tooltip>,
                                        <Tooltip placement="bottom" title="See more">
                                            <a href="#!">
                                                <EllipsisOutlined key="ellipsis" />
                                            </a>
                                        </Tooltip>,
                                    ]}
                                >
                                    <Meta
                                        title="Easy Money"
                                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, a odit maiores exercitationem recusandae non."
                                    />
                                </Card>
                            </Col>
                        </Fade>
                    </Row>
                </div>
            </div>
            <div className="contact-section">
                <div className="container">
                    <div className="app-header light right">
                        <span>
                            {" "}
                            {"{"} Contact {"}"}
                            <div className="under right"></div>
                        </span>
                    </div>
                    <Row gutter={[16, 8]} className="align-form">
                        <Col sm={24} md={12}>
                            <div className="home-form-wrapper">
                            <Form
                                onFinish={formSubmitHandler}
                                validateMessages={validateMessages}
                                layout="vertical"
                            >
                                <Form.Item
                                    name="name"
                                    label="Name"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                    value={name}
                                    onFinish={(e) => {
                                        setName(e.value);
                                    }}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    label="Email"
                                    rules={[
                                        {
                                            type: "email",
                                        },
                                    ]}
                                    value={email}
                                    onFinish={(e) => {
                                        setEmail(e.name);
                                    }}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="message"
                                    label="Message"
                                    value={message}
                                    onFinish={(e) => {
                                        setMessage(e.value);
                                    }}
                                >
                                    <Input.TextArea />
                                </Form.Item>
                                <Form.Item className="center">
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        icon={<SendOutlined />}
                                        shape="round"
                                        size="large"
                                    >
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                            </div>
                            
                            <Divider style={{ backgroundColor: "#eee" }} />
                            <p className="after-form-text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Possimus recusandae pariatur fuga distinctio mollitia voluptate
                                dicta illo dolores sit facere.
                            </p>
                        </Col>
                        <Col sm={24} md={12}>
                            <Fade direction="right">
                                <Image
                                    src={Profile}
                                    width={"100%"}
                                    height={"100%"}
                                    preview={false}
                                    className="home-image"
                                />
                            </Fade>
                        </Col>
                    </Row>
                </div>
            </div>
            <AppFooter />
        </>
    );
};

export default HomeScreen;
