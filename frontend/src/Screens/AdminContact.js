import React, { useEffect } from "react";
import Admin from "./Admin";
import { Button, List, message, Skeleton, Spin, Tooltip } from "antd";
import { DeleteOutlined, MailOutlined, LoadingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, listContacts } from "../actions/contact.action";

const AdminContact = ({ history }) => {

    const dispatch = useDispatch();

    const contactsGet = useSelector(state => state.contactsGet)
    const { loading, error, contacts } = contactsGet;

    const contactDelete = useSelector(state => state.contactDelete);
    const { loading: loadingDelete, error: errorDelete, success } = contactDelete;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;


    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        }
        dispatch(listContacts());
        if (success) {
            message.success("Contact deleted successfully.");
        }
    }, [dispatch, success, userInfo, history]);

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure ?')) {
            dispatch(deleteContact(id));
        }
    }

    return (
        <div>
            <div className="admin-page-display-section">
                <Admin />
                <div className="admin-page-wrapper">
                    <h1>Contacts</h1>
                    { loadingDelete && <Spin indicator={<LoadingOutlined />} size='large' /> }
                    { errorDelete && <div className="contact-error">{errorDelete}</div> }
                    {error ? (<div className="contact-error">{error}</div>) : (
                        <List
                            className="demo-loadmore-list"
                            itemLayout="horizontal"
                            dataSource={contacts}
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
                                        <Tooltip placement='bottom' title='Mail'>
                                            <a href={`mailto:${item.email}`}><MailOutlined /></a>
                                        </Tooltip>
                                    ]}
                                >
                                    <Skeleton title={false} loading={loading} active>
                                        <List.Item.Meta
                                            title={item.name}
                                            description={item.message}
                                        />
                                    </Skeleton>
                                </List.Item>
                            )}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default AdminContact;
