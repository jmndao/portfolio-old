import React, { useEffect } from "react";
import {
    Form,
    Input,
    Button,
    DatePicker,
    Switch,
    Upload,
    Space,
    Spin,
    message,
} from "antd";
import { MinusCircleOutlined, PlusOutlined, UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../actions/project.action";
import { firebaseRemove, firebaseUpload } from "../actions/about.action";

const ProjectCreation = () => {
    const dispatch = useDispatch();

    const projectCreate = useSelector(state => state.projectCreate);
    const { loading, error, success } = projectCreate;

    const [createForm] = Form.useForm();

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        if (e.file.status === 'done') {
            return e.file.response;
        } else {
            return e && e.file
        }
    }

    const handleNewProjectCreation = () => {
        createForm.validateFields().then(
            (values) => {
                values = {
                    ...values,
                    'doneAt': values['doneAt'].format('YYYY-MM-DD'),
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

    useEffect(() => {
        if (success) {
            message.success("Project has been created successfully.");
        }
    }, [dispatch, success]);

    const participant = [{
        name: "",
        pseudo: "",
        image: "",
    }];

    return (
        <div>
            <Form form={createForm} onFinish={handleNewProjectCreation}>
                {loading && (<Spin tip='Creating...' indicator={<LoadingOutlined />} />)}
                {error && (<div className="contact-error">{error}</div>)}
                <>
                    <Form.Item label="Name" name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={"image"}
                        label="Image"
                        valuePropName="file"
                        getValueFromEvent={(e) => normFile(e)}
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
                        <Switch defaultChecked={true} />
                    </Form.Item>
                    <Form.Item label="Done" name="doneAt">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="Website Link" name="website">
                        <Input />
                    </Form.Item>
                    <fieldset>
                        <legend>Participant</legend>
                        <Form.List name="participant" initialValue={participant}>
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
                                                    valuePropName="file"
                                                    getValueFromEvent={(e) => normFile(e)}
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
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </>
            </Form>
        </div>
    )
}

export default ProjectCreation;
