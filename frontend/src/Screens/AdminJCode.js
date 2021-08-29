import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';
import AceEditor from "react-ace-builds";
import { Button, List, message, Skeleton, Tooltip, Avatar } from "antd";
import { DeleteOutlined, EditOutlined, UserOutlined } from "@ant-design/icons";
import { deleteJCode, listJCode } from "../actions/jcode.action";
import { useDispatch, useSelector } from "react-redux";
import Admin from "./Admin";
import "react-ace-builds/webpack-resolver-min";


const AdminJCode = ({ history }) => {
    const dispatch = useDispatch();

    const jcodeList = useSelector(state => state.jcodeList);
    const { loading, error, jcodes } = jcodeList;

    const jcodeDelete = useSelector(state => state.jcodeDelete);
    const { loading: loadingDelete, error: errorDelete, success } = jcodeDelete;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        }
        dispatch(listJCode());
        if (success) {
            message.success("Project deleted successfully.");
        }
    }, [dispatch, success, userInfo, history]);

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure ?')) {
            dispatch(deleteJCode(id));
        }
    }

    return (
        <>
            <div className="admin-page-display-section">
                <Admin />
                <div className="admin-page-wrapper">
                    <h1>All JCodes</h1>
                    {error || errorDelete ? (<div className="contact-error">{error || errorDelete}</div>) : (
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={{ pageSize: 3 }}
                            className="demo-loadmore-list"
                            dataSource={jcodes}
                            renderItem={item => (
                                <List.Item
                                    actions={[
                                        <Tooltip placement='bottom' title='Delete'>
                                            <Button
                                                type='link'
                                                danger={true}
                                                icon={<DeleteOutlined />}
                                                onClick={() => deleteHandler(item._id)}
                                            />
                                        </Tooltip>,
                                        <Tooltip placement='bottom' title='Edit'>
                                            <Link to={`/admin/jcodes/${item._id}/edit`}>{<EditOutlined />}</Link>
                                        </Tooltip>
                                    ]}
                                >
                                    <Skeleton avatar title={false} loading={loading || loadingDelete} active>
                                        <List.Item.Meta
                                            avatar={
                                                <Avatar src={item.image} />
                                            }
                                            title={item.project}
                                            description={parse(item.description)}
                                        />
                                        {item.section.map(section => (
                                            <div>
                                                {parse(section.text)}
                                                <AceEditor
                                                    mode={section.mode}
                                                    theme='solarized_dark'
                                                    height='100px'
                                                    width='100%'
                                                    readOnly={true}
                                                    name={section._id}
                                                    value={`${section.code}`}
                                                />
                                            </div>
                                        ))}
                                        {item.section.links && item.section.links.map(link => (
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
                                                <p>{link.url}</p>
                                                <p>{link.video ? "Video" : "Link"}</p>
                                            </div>
                                        ))}
                                        <fieldset>
                                            <legend>Participants</legend>
                                            {item.mention.map(mt => (
                                            <Avatar.Group>
                                                <Tooltip title={mt.name} placement="top">
                                                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                                </Tooltip>
                                            </Avatar.Group>
                                        ))}
                                        </fieldset>
                                    </Skeleton>
                                </List.Item>
                            )}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default AdminJCode;
