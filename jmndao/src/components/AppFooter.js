import { Divider, Image } from "antd";
import LogoNav from "../images/logo_nav.png";
import React from "react";
import { GithubFilled, TwitterCircleFilled, YoutubeFilled, LinkedinFilled } from "@ant-design/icons";

const AppFooter = () => {
    return (
        <div className='app-footer py-2'>
            <div className="container">
                <div className="center-footer">
                    <Image
                        src={LogoNav}
                        width={'100px'}
                        height={'100px'}
                        preview={false}
                    />
                    <div className="socials">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <GithubFilled />
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <LinkedinFilled />
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <TwitterCircleFilled />
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <YoutubeFilled />
                        </a>
                    </div>
                </div>
                <Divider />
                <div className="center-footer">
                    <p>Copyright &copy; 2021</p>
                </div>
            </div>
        </div>
    )
}

export default AppFooter;
