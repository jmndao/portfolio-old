import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { FundProjectionScreenOutlined, MessageOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";

const Admin = () => {

    const handleClick = e => {
        console.log("Clicked ", e);
    }
    return (
        <div>
            <Menu
                onClick={handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['1']}
                mode="inline"
            >
                <Menu.Item key="1" icon={<UserOutlined />}>
                    <Link to='/admin/about'>About</Link>
                </Menu.Item>
                <SubMenu key="sub1" icon={<FundProjectionScreenOutlined />} title="Projects">
                    <Menu.Item key="2">
                        <Link to='/admin/projects'>
                            All Projects
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to='/admin/projects/new'>
                            New Project
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="4" icon={<MessageOutlined />}>
                    Contacts
                </Menu.Item>
                <SubMenu key="sub2" icon={<FundProjectionScreenOutlined />} title="JCodes">
                    <Menu.Item key="5">
                        <Link to='/admin/jcodes'>
                            All JCodes
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to='/admin/jcodes/new'>
                            New JCode
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<SettingOutlined />} title="Settings">
                    <Menu.Item key="4">My Espace</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    )
}

export default Admin;
