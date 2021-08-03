import { Tabs, TabPane } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import React from "react";

const Admin = () => {
    return (
        <div>
            <Tabs defaultActiveKey="2">
                <TabPane
                    tab={
                        <span>
                            <AppleOutlined />
                            Tab 1
                        </span>
                    }
                    key="1"
                >
                    Tab 1
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <AndroidOutlined />
                            Tab 2
                        </span>
                    }
                    key="2"
                >
                    Tab 2
                </TabPane>
            </Tabs>
        </div>
    );
};

export default Admin;
