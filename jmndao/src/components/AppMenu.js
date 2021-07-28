import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";

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
            overflowedIndicator={<UnorderedListOutlined />}
        >
            <Menu.Item key='home'>
                <Link to='/'>{"{"} Home {"}"}</Link>
            </Menu.Item>
            <Menu.Item key="about" >
                <Link to='/about'>{"{"} About {"}"}</Link>
            </Menu.Item>
            <Menu.Item key='projects'>
                <Link to='/project'>{"{"} ...Projects {"}"}</Link>
            </Menu.Item>
            <Menu.Item key='contact'>
                <Link to='/contact'>{"{"} ...Contacts {"}"}</Link>
            </Menu.Item>
        </Menu>
    )
}

export default AppMenu
