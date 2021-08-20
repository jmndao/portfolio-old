import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { firebaseRemove, firebaseUpload } from "../actions/about.action";
import { getProject, updateProject } from "../actions/project.action";
import {
    Form,
    Input,
    Button,
    DatePicker,
    Switch,
    Upload,
    Space,
    Spin,
} from "antd";
import { MinusCircleOutlined, PlusOutlined, UploadOutlined, LoadingOutlined } from "@ant-design/icons";




const EditProject = ({ match }) => {
    const projectId = match.params.id;
    
    const projectGet = useSelector(state => state.projectGet)
    const { loading, error, project } = projectGet;
    
    const projectUpdate = useSelector(state => state.projectUpdate)
    const { loading:loadingUpdate, error:errorUpdate, success } = projectUpdate;

    const [editForm] = Form.useForm();

    const dispatch = useDispatch();

    const firebaseRemoveHandler = e => {
        dispatch(firebaseRemove(e));
    }
    
    const firebaseUploadHandler = e => {
        dispatch(firebaseUpload(e))
    }

    useEffect(() => {
        dispatch(getProject(projectId))
    }, [dispatch, projectId]);

    return (
        <div>
            <Button type='primary'><Link to='/admin/'>Return</Link></Button>
            <Form form={editForm} initialValues={project}>
                {loading || loadingUpdate ? <Spin tip='Creating...' indicator={<LoadingOutlined />} />
                    : error || errorUpdate ? <div className="contact-error">{error || errorUpdate}</div>
                        : (
                            <>
                                <Form.Item label="Name" name="name">
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name={"image"}
                                    label="Image"
                                >
                                    <Upload
                                        name='image'
                                        customRequest={(e) => firebaseUploadHandler(e)}
                                        onRemove={(e) => firebaseRemoveHandler(e)}
                                    >
                                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                    </Upload>
                                </Form.Item>
                                <fieldset>
                                    <legend>Description</legend>
                                    <Form.Item name="description">
                                        <Input.TextArea />
                                    </Form.Item>
                                </fieldset>
                                <Form.Item label="Private" name="private">
                                    <Switch />
                                </Form.Item>
                                <Form.Item label="Done" name="doneAt">
                                    <DatePicker />
                                </Form.Item>
                                <Form.Item label="Website Link" name="website">
                                    <Input />
                                </Form.Item>
                                <fieldset>
                                    <legend>Participant</legend>
                                    <Form.List name="participant" initialValue={ project && project.participant}>
                                        {(fields, { add, remove }) => {
                                            return (
                                                <>
                                                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                                                        <Space key={key} style={{ display: 'flex', marginBottom: 8, justifyContent: 'space-between' }} align='start'>
                                                            <Form.Item name={[name, "name"]} fieldKey={[fieldKey, "name"]}>
                                                                <Input placeholder='Name' />
                                                            </Form.Item>
                                                            <Form.Item name={[name, "pseudo"]} fieldKey={[fieldKey, "pseudo"]}>
                                                                <Input placeholder='Pseudo' />
                                                            </Form.Item>
                                                            <Form.Item
                                                                name={[name, "image"]}
                                                                fieldKey={[fieldKey, "image"]}
                                                            >
                                                                <Upload
                                                                    name='image'
                                                                    customRequest={(e) => firebaseUploadHandler(e)}
                                                                    onRemove={(e) => firebaseRemoveHandler(e)}
                                                                >
                                                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                                                </Upload>
                                                            </Form.Item>
                                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                                        </Space>
                                                    ))}
                                                    <Form.Item>
                                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                            Add field
                                                        </Button>
                                                    </Form.Item>
                                                </>
                                            )
                                        }}
                                    </Form.List>
                                </fieldset>
                            </>
                        )
                }
            </Form>
        </div>
    )
}

export default EditProject;
