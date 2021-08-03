import React, { useState } from "react";
import LogoNav from "../images/jlogo.svg";
import { Link } from "react-router-dom";
import { Button, Menu } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";

const AppMenu = () => {
    const [current, setCurrent] = useState("home");
    const handleClick = (e) => {
        setCurrent(e.key);
    };

    return (
        <header className="menu-header">
            <div className="menu-header-brand">
                <Avatar
                    src={LogoNav}
                    shape='square'
                    size='large'
                />
            </div>
            <Menu
                onClick={handleClick}
                selectedKeys={[current]}
                mode="horizontal"
                className="myNav"
                overflowedIndicator={<UnorderedListOutlined />}
            >
                <Menu.Item key="home">
                    <Link to="/">
                        {"{"} Home {"}"}
                    </Link>
                </Menu.Item>
                <Menu.Item key="about">
                    <Link to="/about">
                        {"{"} About {"}"}
                    </Link>
                </Menu.Item>
                <Menu.Item key="projects">
                    <Link to="/project">
                        {"{"} ...Projects {"}"}
                    </Link>
                </Menu.Item>
                <Menu.Item key="contact">
                    <Link to="/contact">
                        {"{"} ...Contacts {"}"}
                    </Link>
                </Menu.Item>
                <Menu.Item key="jCode">
                    <Button
                        type="primary"
                        shape="round"
                    >
                        <Link to="/jCode">JCode</Link>
                    </Button>
                </Menu.Item>
            </Menu>
        </header>
    );
};

export default AppMenu;
