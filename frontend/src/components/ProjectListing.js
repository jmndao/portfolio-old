import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton, List, Avatar, Button, Tooltip, message } from "antd";
import { listProjects, deleteProject } from "../actions/project.action";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";


const ProjectListing = () => {

    const dispatch = useDispatch();

    const getProjects = useSelector(state => state.getProjects)
    const { loading, error, projects } = getProjects;

    const projectDelete = useSelector(state => state.projectDelete);
    const { loading: loadingDelete, error: errorDelete, success:successDelete } = projectDelete;


    useEffect(() => {
        dispatch(listProjects());
        if (successDelete) {
            message.success("Project deleted successfully.");
        }
    }, [dispatch, successDelete]);
    
    // const handleNewProjectCreation = () => {
    //     createForm.validateFields().then(
    //         (values) => {
    //             values = {
    //                 ...values,
    //                 'doneAt': values['doneAt'].format('YYYY-MM-DD'),
    //                 'image': values['image'].file.response,
    //             };
    //             createForm.resetFields();
    //             dispatch(createProject(values));
    //         }
    //     ).catch(err => console.log(err))
    // };

    // const firebaseRemoveHandler = e => {
    //     dispatch(firebaseRemove(e));
    // }

    // const firebaseUploadHandler = e => {
    //     dispatch(firebaseUpload(e))
    // }

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure ?')) {
            dispatch(deleteProject(id));
        }
    }

    return (
        <div>
            {/* <Modal
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
            </Modal> */}
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
