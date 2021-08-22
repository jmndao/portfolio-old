import React, { useEffect } from "react";
import { Avatar, Divider, Image, Spin, Tooltip } from "antd";
import AceEditor from "react-ace-builds";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import AppFooter from "../components/AppFooter";
import AppMenu from "../components/AppMenu";
import Vimeo from '@u-wave/react-vimeo';
import { useDispatch, useSelector } from "react-redux";
import { getJCode } from "../actions/jcode.action";
import { LoadingOutlined, UserOutlined } from "@ant-design/icons";

const JcodeItem = ({ match }) => {
    const dispatch = useDispatch();

    const jcodeID = match.params.id;

    const jcodeGet = useSelector(state => state.jcodeGet);
    const { loading, error, jcode } = jcodeGet;

    useEffect(() => {
        dispatch(getJCode(jcodeID));
    }, [dispatch, jcodeID]);

    return (
        <div className='jcode-item-wrapper'>
            <AppMenu currentPage="jCode" />
            <ParallaxProvider>
                {loading ? (
                    <Spin
                        tip='Loading...'
                        indicator={<LoadingOutlined />}
                        size='large'
                        style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                    />
                ) : error ? (<div className='contact-error'>{error}</div>)
                    : (
                        <>
                            <Parallax className="custom-class" y={[20, -20]} tagOuter="figure">
                                <div className="jcode-top-img">
                                    <Image
                                        src={jcode && jcode.image}
                                        width={"100%"}
                                        height={"100%"}
                                        preview={false}
                                        className="home-image"
                                    />
                                </div>
                            </Parallax>
                            <div className="jcode-item-content">
                                <h1>Project: {jcode && jcode.project}</h1>
                                <fieldset>
                                    <legend>Description</legend>
                                    <p>{jcode && jcode.description}</p>
                                </fieldset>
                                {jcode && jcode.section.map((section, ind) => (
                                    <fieldset>
                                        <h2><span style={{ textDecoration: 'underline' }}>Section {ind}:</span> {section.title}</h2>
                                        <p>{section.text}</p>
                                        <AceEditor
                                            mode={section.mode}
                                            theme='solarized_dark'
                                            height='100px'
                                            width='100%'
                                            fontSize={16}
                                            readOnly={true}
                                            name={section._id}
                                            value={`${section.code}`}
                                        />
                                        {section.links && section.links.map(link => (
                                            <div>
                                                {link.video ? (
                                                    <Vimeo
                                                        video={link.url}
                                                        width={640}
                                                        height={480}
                                                    />
                                                ) :
                                                    (<h4 style={{ fontWeight: 'bold' }}>{link.url}</h4>)
                                                }
                                            </div>
                                        ))}
                                        <hr className='my-divider' />
                                    </fieldset>
                                ))}

                                <Divider className='divider-divider' />
                                <fieldset style={{ textAlign: 'center' }}>
                                    <h4>Participants</h4>
                                    {jcode && jcode.mention.map(mt => (
                                        <Avatar.Group>
                                            <Tooltip title={mt.name} placement="top">
                                                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                            </Tooltip>
                                        </Avatar.Group>
                                    ))}
                                </fieldset>
                            </div>
                        </>
                    )
                }
                <AppFooter />
            </ParallaxProvider>
        </div>
    )
}

export default JcodeItem;
