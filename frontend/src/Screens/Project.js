import React from "react";
import { List, Space } from "antd";
import { ForkOutlined, RiseOutlined, CodeOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import AppFooter from "../components/AppFooter";
import { Fade } from "react-awesome-reveal";

const listData = [];

for (let i = 0; i < 13; i++) {
    listData.push({
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

const Project = () => {

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
                        dataSource={listData}
                        renderItem={(item) => (
                            <Fade cascade direction='up'>
                                <List.Item
                                    key={item.title}
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
                                            alt="logo"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                        />
                                    }
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.avatar} />}
                                        title={<a href={item.href}>{item.title}</a>}
                                        description={item.description}
                                    />
                                    {item.content}
                                </List.Item>
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
