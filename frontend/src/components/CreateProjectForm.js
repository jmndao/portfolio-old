import React from "react";
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

const CreateProjectForm = ({ firebaseRemoveHandler, firebaseUploadHandler, createForm, loadingCreate, errorCreate }) => {

    const participant = [{
        name: "",
        pseudo: "",
        image: "",
    }];

    return (
        <div>
            <Form form={createForm}>
                {loadingCreate ? <Spin tip='Creating...' indicator={<LoadingOutlined />} />
                    : errorCreate ? <div className="contact-error">{errorCreate}</div>
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
                            </>
                        )
                }
            </Form>
        </div>
    )
}

export default CreateProjectForm;
