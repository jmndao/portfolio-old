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
    notification,
    Result,
    Spin,
} from "antd";
import TextLoop from "react-text-loop";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import CodeJ from "../images/CodeJ_500x500.png";
import ContactImage from "../images/contact.svg";
import {
    LinkedinOutlined,
    GithubOutlined,
    DownloadOutlined,
    EllipsisOutlined,
    RiseOutlined,
    SendOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import Avatar from "antd/lib/avatar/avatar";
import Meta from "antd/lib/card/Meta";
import AppFooter from "../components/AppFooter";
import { useDispatch, useSelector } from "react-redux";
import { downloadResume } from "../actions/home.action";
import { fetchAbout } from "../actions/about.action";
import { submitForm } from "../actions/contact.action";
import { listProjects } from "../actions/project.action";
import AppMenu from "../components/AppMenu";
import { Link } from "react-router-dom";


const HomeScreen = () => {

    const openNotificationWithIcon = (type, text) => {
        notification[type]({
            message: "Hi",
            description: text
        })
    };

    const dispatch = useDispatch();

    const resumeDownload = useSelector(state => state.resumeDownload);
    const {
        loading: loadingResume,
        success: successResume,
        error: errorResume
    } = resumeDownload;

    const getAbout = useSelector((state) => state.getAbout)
    const { loading: loadingAbout, error: errorAbout, profileInfo } = getAbout;

    const getProjects = useSelector(state => state.getProjects);
    const { loading: loadingProjects, error: errorProjects, projects } = getProjects;

    const formSubmit = useSelector(state => state.formSubmit);
    const { loading: loadingForm, error: errorForm, formMessage } = formSubmit;

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

    useEffect(() => {
        dispatch(fetchAbout());
        dispatch(listProjects());
    }, [dispatch]);

    const downloadMyResume = () => {
        dispatch(downloadResume());
        if (successResume) openNotificationWithIcon('success', "You've successfully downloaded my Resume.");
        if (errorResume) openNotificationWithIcon('error', "Sorry, an unexpected error has occured.")
    }

    const [contactForm] = Form.useForm();

    const formSubmitHandler = (values) => {
        if (values) {
            setName(values.name);
            setEmail(values.email);
            setMessage(values.message);

            dispatch(submitForm(values.name, values.email, values.message));
            openNotificationWithIcon('success', values.name, "Thank you, I'll reach you out soon.");
            contactForm.resetFields();

        } else {
            const fmessage = "Please to complete the contact form.";
            openNotificationWithIcon('error', name, fmessage.message)
        }
    };

    return (
        <>
            <Helmet>
                <title>Jmndao Portfolio | Home</title>
                <meta name='description' content='Jonathan Moussa NDAO Portfolio' />
                <meta name='keywords' content='Jonathan Moussa NDAO, Jmndao, Portfolio' />
            </Helmet>
            <AppMenu 
                currentPage="home"
            />
            <div className="home-app">
                <Row gutter={16} className='row-text-img'>
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
                                <a href={"//www.linkedin.com/in/jmndao/"} target='_blank' rel="noreferrer">
                                    <LinkedinOutlined />
                                </a>
                                <a href={"//github.com/jmndao"} target='_blank' rel="noreferrer">
                                    <GithubOutlined />
                                </a>
                            </p>
                        </div>
                    </Col>
                    <Col sm={24} md={12}>
                        <Fade direction="right">
                            <Image
                                src={CodeJ}
                                width={"500"}
                                height={"500"}
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
                        onClick={() => downloadMyResume()}
                        loading={loadingResume}
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
                    {loadingAbout ? <Spin tip='Loading...' size='small' /> : errorAbout ?
                        (<div className="contact-error">{errorAbout}</div>) :
                        (
                            <Row gutter={[16, 8]} justify="center" align="middle">
                                <Col sm={24} md={8}>
                                    <Avatar src={profileInfo.profile} className="avatar-big" />
                                </Col>
                                <Col sm={24} md={16}>
                                    {profileInfo.about}
                                </Col>
                            </Row>
                        )
                    }
                    <div className="proficiency p-1">
                        <Row gutter={[16, 8]} align="middle" justify="end">
                            <Col>
                                <div className="app-header light left">
                                    <span>
                                        Programming Skills
                                        <div className="under" style={{ width: "25px" }}></div>
                                    </span>
                                </div>
                            </Col>
                            <Col>
                                {profileInfo.programmingSkill.map((prog) => (
                                    <Image key={prog._id} src={prog.image} className="sm-ml-1" preview={false} style={{ height: '35px', width: '35px' }} />
                                ))}
                            </Col>
                            <div><Link to='/about'>{"{...}"}</Link></div>
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
                        {loadingProjects ? <Spin tip='Loading...' size='large' />
                            : errorProjects ? <Result
                                status="500"
                                title="500"
                                subTitle="Sorry, something went wrong."
                            /> : (
                                <Fade cascade>
                                    {projects.map(p => (
                                        <Col sm={12} md={7} key={p._id} className="gutter-row m-1">
                                            <Card
                                                style={{ width: 300 }}
                                                cover={
                                                    <img
                                                        alt={p.name}
                                                        src={p.image}
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
                                                    title={p.name}
                                                    description={p.description}
                                                />
                                            </Card>
                                        </Col>
                                    ))}
                                </Fade>
                            )
                        }
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
                                {loadingForm && <Spin tip='Loading...' size='small' />}
                                {errorForm && <div className="contact-error">{errorForm}</div>}
                                <Form
                                    form={contactForm}
                                    onFinish={formSubmitHandler}
                                    validateMessages={validateMessages}
                                    layout="vertical"
                                >
                                    <Form.Item
                                        name="name"
                                        label="Name"
                                        rules={[{ required: true }]}
                                        value={name}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        name="email"
                                        label="Email"
                                        rules={[{ type: "email" }]}
                                        value={email}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        name="message"
                                        label="Message"
                                        value={message}
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
                                I am open to any suggestion or idea for collaboration, just focus your 
                                keyboard in those white boxes above. 
                            </p>
                        </Col>
                        <Col sm={24} md={12}>
                            <Fade>
                                <Image
                                    src={ContactImage}
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
