import React from "react";
import { Button, List, Skeleton, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const ContactListing = ({ contacts, deleteHandler, loading, loadingDelete }) => {
    return (
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
                                </Tooltip>
                            ]}
                        >
                            <Skeleton title={false} loading={loading || loadingDelete} active>
                                <List.Item.Meta
                                    title={item.name}
                                    description={item.message}
                                />
                                <div>{item.email}</div>
                            </Skeleton>
                        </List.Item>
                    )}
                />
    )
}

export default ContactListing;
