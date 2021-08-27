import { Col, Divider, Image, Row } from "antd";
import LogoNav from "../images/jLogo_500x500.svg";
import React from "react";
import { GithubFilled, TwitterCircleFilled, YoutubeFilled, LinkedinFilled } from "@ant-design/icons";

const AppFooter = ({ light }) => {
    return (
        <div className={light ? `app-footer py-2 mt-2 light` : `app-footer mt-2 py-2`}>
            <div className="container">
                <Row gutter={[16, 8]}>
                    <Col sm={24} md={12}>
                        <div className="logo-with-socials-footer">
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
                    </Col>
                    <Col sm={24} md={12}>
                        <h3><b>Attributions</b></h3>
                        <ul className='footer-list'>
                            <li><a href="https://storyset.com/" target="_blank" rel="noopener noreferrer">Storyset</a></li>
                        </ul>
                    </Col>
                </Row>
                <Divider />
                <div className="center-footer">
                    <p>Copyright &copy; 2021</p>
                </div>
            </div>
        </div>
    )
}

export default AppFooter;
