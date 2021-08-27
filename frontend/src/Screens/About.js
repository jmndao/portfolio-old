import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Avatar, Timeline, Divider, Rate, Spin, Result, Button, Space, Image } from "antd";
import { Fade } from "react-awesome-reveal";
import { CodeOutlined, FundProjectionScreenOutlined, GlobalOutlined, HeartFilled, ProjectOutlined, RiseOutlined, UserOutlined } from "@ant-design/icons";
import AppFooter from "../components/AppFooter";
import { fetchAbout } from "../actions/about.action";
import AppMenu from "../components/AppMenu";



const About = () => {
    const dispatch = useDispatch();

    const getAbout = useSelector((state) => state.getAbout)
    const { loading, error, profileInfo } = getAbout;

    useEffect(() => {
        dispatch(fetchAbout());
    }, [dispatch]);


    return (
        <>
            <Helmet>
                <title>Jmndao Portfolio | About</title>
                <meta name='description' content='Learn more about Jmndao' />
                <meta name='keywords' content='Jonathan Moussa NDAO profile, Jmndao profile, my profile, Jmndao' />
            </Helmet>
            <AppMenu
                currentPage="about"
            />
            <div className='about-screen'>
                <div className="about-image">
                    <div className="static-about-container">
                        <div className="container">
                            {profileInfo && loading ? <Spin tip='Loading...' size='large' className='spinner-loader' /> : error ?
                                <Result
                                    status="500"
                                    title="500"
                                    subTitle="Sorry, something went wrong."
                                    extra={<Button type="primary" shape="round" size="large">
                                        <Link to='/'>
                                            Back Home
                                        </Link>
                                    </Button>}
                                />
                                : (
                                    <Timeline>
                                        <Timeline.Item>
                                            <Fade direction='down'>
                                                <div className='app-header light left'>
                                                    <span> Who Am I <UserOutlined />
                                                        <div className='under-frac'></div>
                                                    </span>
                                                </div>
                                                <Row justify='center' align='middle' gutter={[16, 8]}>
                                                    <Col sm={24} md={6}>
                                                        <Avatar src={profileInfo.profile} size='large' />
                                                    </Col>
                                                    <Col sm={24} md={18}>
                                                        {profileInfo.about}
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
                                                {profileInfo.education.map((edu) => (
                                                    <Row justify='center' align='middle'>

                                                        <Col sm={24} md={4}>
                                                            <a href="http://" target="_blank" rel="noopener noreferrer" className='about-institution'>
                                                                {edu.school}
                                                            </a>
                                                        </Col>
                                                        <Col sm={24} md={20}>
                                                            <p className='timeline-date'>{edu.fromYear} - {edu.toYear}</p>
                                                            {edu.description}
                                                        </Col>
                                                        <Divider />
                                                    </Row>
                                                ))}
                                            </Fade>
                                        </Timeline.Item>
                                        <Fade cascade direction='down'>
                                            <Timeline.Item>
                                                <div className='app-header light left'>
                                                    <span>Programming Skills <CodeOutlined />
                                                        <div className='under-frac'></div>
                                                    </span>
                                                </div>
                                                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                                    {profileInfo.programmingSkill.map((prog) => (
                                                        <Col className="gutter-row mt-1" sm={8} md={6} >
                                                            <Space direction='vertical'>
                                                                <Image preview={false} src={prog.image} style={{ width: '50px', height: '50px'}} />
                                                                <div>{prog.language}</div>
                                                            </Space>
                                                        </Col>
                                                    ))}
                                                </Row>
                                                <Divider orientation="left" style={{ backgroundColor: '#eee', width: '50px'}} />
                                                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                                    {profileInfo.otherSkill.map((other) => (
                                                        <Col className="gutter-row mt-1" sm={8} md={6} >
                                                            <Space direction='vertical'>
                                                                <Image preview={false} src={other.image} style={{ width: '50px', height: '50px'}} />
                                                                <div>{other.name}</div>
                                                            </Space>
                                                        </Col>
                                                    ))}
                                                </Row>
                                                {/* <Row justify='center' align='middle' gutter={[8, 16]} className='mt-1'>
                                                    {profileInfo.programmingSkill.map((prog) => (
                                                        <Col sm={24} md={12}>
                                                            <Card>
                                                                <Card.Meta
                                                                    title={prog.language}
                                                                    avatar={<Avatar src={prog.image} />}
                                                                />
                                                                <p>{prog.description}</p>
                                                            </Card>
                                                        </Col>
                                                    ))}
                                                </Row> */}
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <div className='app-header light left'>
                                                    <span>Language Skills <GlobalOutlined />
                                                        <div className='under-frac'></div>
                                                    </span>
                                                </div>
                                                {profileInfo.languageSkill.map((lang) => (
                                                    <Row justify='center' align='middle'>
                                                        <Col sm={24} md={3}>
                                                            <Avatar src={lang.flag} />
                                                        </Col>
                                                        <Col sm={24} md={21}>
                                                            <p>{lang.level} <Rate disabled allowHalf defaultValue={lang.levelRate} /></p>
                                                        </Col>
                                                    </Row>
                                                ))}
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <div className='app-header light left'>
                                                    <span>Work Experience <ProjectOutlined />
                                                        <div className='under-frac'></div>
                                                    </span>
                                                </div>
                                                <Row justify='center' align='middle' gutter={[8, 16]} className='mt-1'>
                                                    {profileInfo.workExperience.map((work) => (
                                                        <Col sm={24} md={12}>
                                                            <ul className='work-experience-list'>
                                                                <li>
                                                                    <h3> {work.enterpriseName} <a href={work.website} target="_blank" rel="noopener noreferrer">
                                                                        <RiseOutlined />
                                                                    </a></h3>
                                                                </li>
                                                                <p><h4>{work.position} </h4></p>
                                                                <p>Duration: {Number(work.duration)} months</p>
                                                            </ul>
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <div className='app-header light left'>
                                                    <span>Enjoy Doing <HeartFilled />
                                                        <div className='under-frac'></div>
                                                    </span>
                                                </div>
                                                <Row gutter={[16, 8]}>
                                                    {profileInfo.activity.map((act) => (
                                                        <Col sm={12} md={8}>
                                                            <p>{act.name}</p>
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Timeline.Item>
                                            <Divider />
                                        </Fade>
                                    </Timeline>
                                )}
                            <AppFooter light={true} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
