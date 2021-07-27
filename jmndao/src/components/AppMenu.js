import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined, UserOutlined, CodeOutlined, ContactsOutlined } from "@ant-design/icons";

const AppMenu = () => {

    const [current, setCurrent] = useState('home')
    const handleClick = (e) => {
        setCurrent(e.key);
    }

    return (
        <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode='horizontal'
            className='myNav'
        >
            <Menu.Item key='home' icon={<HomeOutlined style={{ fontSize: '1.15rem' }} />}>
                <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="about" icon={<UserOutlined style={{ fontSize: '1.15rem' }} />} >
                <Link to='/about'>About Me</Link>
            </Menu.Item>
            <Menu.Item key='projects' icon={<CodeOutlined style={{ fontSize: '1.15rem' }} />}>
                <Link to='/project'>Projects</Link>
            </Menu.Item>
            <Menu.Item key='contact' icon={<ContactsOutlined style={{ fontSize: '1.15rem' }} />}>
                <Link to='/contact'>Contact Me</Link>
            </Menu.Item>
        </Menu>
    )
}

export default AppMenu
