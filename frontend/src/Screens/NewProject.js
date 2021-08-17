import React, { useEffect } from "react";
import {
    Form,
    Input,
    Button,
    DatePicker,
    Switch,
    Upload,
    Space,
    message,
    Spin,
} from "antd";
import { MinusCircleOutlined, PlusOutlined, UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { firebaseRemove, firebaseUpload } from "../actions/about.action";
import { createProject } from "../actions/project.action";


const NewProject = () => {

    const dispatch = useDispatch();

    const projectCreate = useSelector(state => state.projectCreate);
    const { loading, success, error } = projectCreate;

    const onFinish = (values) => {
        dispatch(createProject(values));
    }

    const participant = [{
        name: "",
        pseudo: "",
        image: "",
    }];

    const firebaseRemoveHandler = e => {
        dispatch(firebaseRemove(e));
    }

    const firebaseUploadHandler = e => {
        dispatch(firebaseUpload(e))
    }

    useEffect(() => {
        if (success) {
            message.success("Project created Successfully");
        }
    }, [dispatch, success]);

    return (
        <div className='new-project'>
            <div className="new-project-wrapper">
                {loading ?
                    <Spin tip='Creating...' size='large' indicator={<LoadingOutlined />} />
                    : error ? <div className="contact-error">{error}</div>
                        : (
                            <Form onFinish={onFinish}>

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
                            </Form>
                        )
                }
            </div>
        </div>
    );
};

export default NewProject;
