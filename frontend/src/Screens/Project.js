import React, { useEffect } from "react";
import { Button, List, Result, Space, Spin, Tooltip, Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ForkOutlined, RiseOutlined, CodeOutlined } from "@ant-design/icons";
import AppFooter from "../components/AppFooter";
import { Fade } from "react-awesome-reveal";
import { listProjects } from "../actions/project.action";
import { Link } from "react-router-dom";

const Project = () => {

    const dispatch = useDispatch();

    const getProjects = useSelector(state => state.getProjects);
    const { loading, error, projects } = getProjects;

    useEffect(() => {
        dispatch(listProjects());
    }, [dispatch]);

    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    return (
        <div className="project-screen">
            <div className="container">
                <Fade cascade direction='up'>
                    <div className="project-screen-board">
                        <h1>
                            {"{"} ...Projects {"}"} <CodeOutlined />
                        </h1>
                    </div>
                </Fade>

                <div className="project-screen-list">
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: (page) => {
                                console.log(page);
                            },
                            pageSize: 5,
                        }}
                        dataSource={projects}
                        renderItem={(item) => (
                            <Fade cascade direction='up'>
                                {loading ? <Spin tip='Loading...' size='large' className='spinner-loader' /> : error ?
                                    <Result
                                        status="500"
                                        title="500"
                                        subTitle="Sorry, something went wrong."
                                        extra={<Button type="primary" shape="round" size="large">
                                            <Link to='/'>
                                                Back Home
                                            </Link>
                                        </Button>}
                                    /> : (
                                        <List.Item
                                            key={item._id}
                                            actions={
                                                item.private ? [
                                                <IconText
                                                    icon={ForkOutlined}
                                                    text="Fork"
                                                    key="list-vertical-star-o"
                                                />                                                ,
                                                <IconText
                                                    icon={RiseOutlined}
                                                    text="Website"
                                                    key="list-vertical-like-o"
                                                />,
                                            ]: [
                                                <a href={item.forkLink} target="_blank" rel="noopener noreferrer">
                                                    <IconText
                                                    icon={ForkOutlined}
                                                    text="Fork"
                                                    key="list-vertical-star-o"
                                                />  
                                                </a>,
                                                <a href={item.github} target="_blank" rel="noopener noreferrer">
                                                    <IconText
                                                    icon={RiseOutlined}
                                                    text="Website"
                                                    key="list-vertical-like-o"
                                                />
                                                </a>
                                            ]}
                                            extra={
                                                <img
                                                    width={272}
                                                    alt={item.name}
                                                    src={item.image}
                                                />
                                            }
                                        >
                                            <List.Item.Meta
                                                avatar={
                                                    <Avatar.Group>
                                                    {item.participant ? item.participant.map((p) => (
                                                        <Tooltip title={p.pseudo} placement="top">
                                                            <Avatar src={p.image} />
                                                        </Tooltip>
                                                    )) : (
                                                        <Avatar style={{ backgroundColor: '#f56a00' }}>{"{J}"}</Avatar>
                                                    )}
                                                </Avatar.Group>
                                                }
                                                title={item.name}
                                                description={item.private ? "Private " : "Public"}
                                            />
                                            {item.description}
                                        </List.Item>)}
                            </Fade>
                        )}
                    />
                </div>
                <AppFooter />
            </div>
        </div>
    );
};

export default Project;
