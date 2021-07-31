import React, { useEffect } from "react";
import { Button, List, Result, Space, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ForkOutlined, RiseOutlined, CodeOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
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
                                            actions={[
                                                <IconText
                                                    icon={ForkOutlined}
                                                    text="Fork"
                                                    key="list-vertical-star-o"
                                                />,
                                                <IconText
                                                    icon={RiseOutlined}
                                                    text="Website"
                                                    key="list-vertical-like-o"
                                                />,
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
                                                avatar={<Avatar src={item.avatar} />}
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
