import React from "react";
import { Tabs, Row, Col} from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import AboutForm from "../components/AboutForm";
import ProjectListing from "../components/ProjectListing";


const Admin = () => {

    const { TabPane } = Tabs;

    return (
        <div className="admin-screen">
            <div className="admin-screen-wrapper">
                <Row gutter={[32, 8]}>
                    <Col sm={24} md={16}>
                        <Tabs defaultActiveKey="1" className="admin-screen-tabs">
                            <TabPane
                                tab={
                                    <span>
                                        <AppleOutlined />
                                        About
                                    </span>
                                }
                                key="about"
                            >
                                <AboutForm />
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        <AndroidOutlined />
                                        Projects
                                    </span>
                                }
                                key="projects"
                            >
                                <ProjectListing />
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        <AndroidOutlined />
                                        Contacts
                                    </span>
                                }
                                key="contacts"
                            >
                                Contacts
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        <AndroidOutlined />
                                        JCode
                                    </span>
                                }
                                key="jcode"
                            >
                                JCode
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col sm={12} md={8}>
                        <div className="admin-screen-panel">
                            Hello There
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Admin;
