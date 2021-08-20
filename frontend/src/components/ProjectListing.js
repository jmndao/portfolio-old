import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton, List, Avatar, Button, Tooltip, Modal, Form, message } from "antd";
import { listProjects, deleteProject, createProject } from "../actions/project.action";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import CreateProjectForm from "./CreateProjectForm";
import { firebaseRemove, firebaseUpload } from "../actions/about.action";


const ProjectListing = () => {

    const dispatch = useDispatch();

    const [createForm] = Form.useForm();

    const [createModalVisible, setCreateModalVisible] = useState(false);

    const showCreateProjectForm = () => {
        setCreateModalVisible(true);
    };

    const handleCancel = () => {
        setCreateModalVisible(false);
    };

    const getProjects = useSelector(state => state.getProjects)
    const { loading, error, projects } = getProjects;

    const projectDelete = useSelector(state => state.projectDelete);
    const { loading: loadingDelete, error: errorDelete, success:successDelete } = projectDelete;

    const projectCreate = useSelector(state => state.projectCreate);
    const { loading: loadingCreate, success: successCreate, error: errorCreate } = projectCreate;

    useEffect(() => {
        dispatch(listProjects());
        if (successDelete) {
            message.success("Project deleted successfully.");
        }
        if (successCreate) {
            message.success("New Project created successfully.");
        }
    }, [dispatch, successDelete, successCreate]);
    
    const handleNewProjectCreation = () => {
        createForm.validateFields().then(
            (values) => {
                values = {
                    ...values,
                    'doneAt': values['doneAt'].format('YYYY-MM-DD'),
                    'image': values['image'].file.response,
                };
                createForm.resetFields();
                dispatch(createProject(values));
            }
        ).catch(err => console.log(err))
    };

    const firebaseRemoveHandler = e => {
        dispatch(firebaseRemove(e));
    }

    const firebaseUploadHandler = e => {
        dispatch(firebaseUpload(e))
    }

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure ?')) {
            dispatch(deleteProject(id));
        }
    }

    return (
        <div>
            <Modal
                visible={createModalVisible}
                title="Create a new project"
                okText="Create"
                cancelText="Cancel"
                onCancel={handleCancel}
                onOk={() => handleNewProjectCreation()}
            >

                <CreateProjectForm
                    createForm={createForm}
                    firebaseRemoveHandler={firebaseRemoveHandler}
                    firebaseUploadHandler={firebaseUploadHandler}
                    loading={loadingCreate}
                    error={errorCreate}
                />
            </Modal>
            <Button type="primary" onClick={showCreateProjectForm}>Create New Project</Button>
            <br />
            <br />
            {error || errorDelete ? (<div className="contact-error">{error || errorDelete}</div>) : (
                <List
                    className="demo-loadmore-list"
                    itemLayout="horizontal"
                    dataSource={projects}
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
                                    <Link to={`/admin/projects/edit/${item._id}`}>{<EditOutlined />}</Link>
                                </Tooltip>
                            ]}
                        >
                            <Skeleton avatar title={false} loading={loading || loadingDelete} active>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar src={item.image} />
                                    }
                                    title={item.name}
                                    description={item.description}
                                />
                                <div>{item.private}</div>
                            </Skeleton>
                        </List.Item>
                    )}
                />
            )}
        </div>
    )
}

export default ProjectListing;
