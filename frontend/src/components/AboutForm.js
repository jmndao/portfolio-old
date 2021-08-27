import React, { useEffect } from "react";
import { Button, Form, Input, message, Space, Spin, Upload } from "antd";
import { fetchAbout } from "../actions/about.action";
import { useDispatch, useSelector } from "react-redux";
import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { firebaseUpload, firebaseRemove, updateAbout } from "../actions/about.action";

const AboutForm = () => {

    const dispatch = useDispatch();

    const [aboutForm] = Form.useForm();

    const getAbout = useSelector(state => state.getAbout);
    const { loading, error, profileInfo } = getAbout;

    //const firebaseUploader = useSelector(state => state.firebaseUploader);
    //const { onProgress, uploadError, onComplete, fileUrl, id } = firebaseUploader;

    const aboutUpdate = useSelector(state => state.aboutUpdate)
    const { loading: loadingUpdate, success, error: errorUpdate } = aboutUpdate;

    const onFinishFailed = () => {
        console.log('Form Submission failed');
    }

    const firebaseRemoveHandler = e => {
        dispatch(firebaseRemove(e));
    }

    const firebaseUploadHandler = e => {
        dispatch(firebaseUpload(e))
    }

    const normFile = (e) => {
        console.log(e);
        if (Array.isArray(e)) {
            return e;
        }
        if (e.file.status === 'done') {
            console.log('Here')
            return e.file.response;
        } else {
            return e && e.file
        }
    }

    const onFinish = (values) => {
        console.log(values);
        dispatch(updateAbout(values));
    }

    useEffect(() => {
        dispatch(fetchAbout());
        if (success) {
            //window.location.reload();
            message.success("This form has been successfully updated")
        }
    }, [dispatch, success]);

    return (
        <>
            {loading || loadingUpdate ? <Spin tip='Loading...' /> : error || errorUpdate ? (
                <div className='contact-error'>{error || errorUpdate}</div>)
                : (
                    <Form form={aboutForm} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                        <fieldset>
                            <legend>About</legend>
                            <Form.Item name="about" initialValue={profileInfo.about}>
                                <Input.TextArea />
                            </Form.Item>
                        </fieldset>
                        {/* <fieldset>
                            <legend>Profile Image</legend>
                            <Form.Item
                                name={"profile"}
                            >
                                <Upload
                                    customRequest={(e) => firebaseUploadHandler(e)}
                                    onRemove={(e) => firebaseRemoveHandler(e)}
                                    valuePropName="file"
                                    getValueFromEvent={(e) => normFile(e)}
                                >
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>

                            </Form.Item>
                        </fieldset> */}
                        <fieldset>
                            <legend>Educations</legend>
                            {profileInfo && (<Form.List name="education" initialValue={profileInfo.education}>
                                {(fields, { add, remove }) => {
                                    return (
                                        <>
                                            {fields.map(({ key, name, fieldKey, ...restField }) => (
                                                <Space key={key} style={{ display: 'flex', marginBottom: 8, justifyContent: 'space-between' }} align='start'>
                                                    <Form.Item
                                                        name={[name, "school"]}
                                                        fieldKey={[fieldKey, "school"]}
                                                    >
                                                        <Input placeholder='School' />
                                                    </Form.Item>
                                                    <Form.Item name={[name, "fromYear"]} fieldKey={[fieldKey, "fromYear"]}>
                                                        <Input placeholder="Starting" />
                                                    </Form.Item>
                                                    <Form.Item name={[name, "toYear"]} fieldKey={[fieldKey, "toYear"]}>
                                                        <Input placeholder="To" />
                                                    </Form.Item>
                                                    <Form.Item name={[name, "description"]} fieldKey={[fieldKey, "description"]}>
                                                        <Input.TextArea placeholder="Description" />
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
                            </Form.List>)}
                        </fieldset>
                        <fieldset>
                            <legend>Programming Skills</legend>
                            {profileInfo && (<Form.List name="programmingSkill" initialValue={profileInfo.programmingSkill}>
                                {(fields, { add, remove }) => {
                                    return (
                                        <>
                                            {fields.map(({ key, name, fieldKey, ...restField }) => (
                                                <Space key={key} style={{ display: 'flex', marginBottom: 8, justifyContent: 'space-between' }} align='start'>
                                                    <Form.Item name={[name, "language"]} fieldKey={[fieldKey, "language"]}>
                                                        <Input placeholder='Language' />
                                                    </Form.Item>
                                                    <Form.Item
                                                        name={[name, "image"]}
                                                        fieldKey={[fieldKey, "image"]}
                                                    >
                                                        <Upload
                                                            customRequest={(e) => firebaseUploadHandler(e)}
                                                            onRemove={(e) => firebaseRemoveHandler(e)}
                                                            valuePropName="file"
                                                            getValueFromEvent={(e) => normFile(e)}
                                                        >
                                                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                                        </Upload>

                                                    </Form.Item>
                                                    <Form.Item name={[name, "description"]} fieldKey={[fieldKey, "description"]}>
                                                        <Input.TextArea placeholder='Description' />
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
                            </Form.List>)}
                        </fieldset>
                        <fieldset>
                            <legend>Language Skills</legend>
                            {profileInfo && (<Form.List name="languageSkill" initialValue={profileInfo.languageSkill}>
                                {(fields, { add, remove }) => {
                                    return (
                                        <>
                                            {fields.map(({ key, name, fieldKey, ...restField }) => (
                                                <Space key={key} style={{ display: 'flex', marginBottom: 8, justifyContent: 'space-between' }} align='start'>
                                                    <Form.Item name={[name, "level"]} fieldKey={[fieldKey, "level"]}>
                                                        <Input placeholder='Proficiency' />
                                                    </Form.Item>
                                                    <Form.Item
                                                        name={[name, "flag"]}
                                                        fieldKey={[fieldKey, "flag"]}
                                                    >
                                                        <Upload
                                                            name='flag'
                                                            customRequest={(e) => firebaseUploadHandler(e)}
                                                            onRemove={(e) => firebaseRemoveHandler(e)}
                                                            valuePropName="file"
                                                            getValueFromEvent={(e) => normFile(e)}
                                                        >
                                                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                                        </Upload>
                                                    </Form.Item>
                                                    <Form.Item name={[name, "levelRate"]} fieldKey={[fieldKey, "levelRate"]}>
                                                        <Input placeholder='Level' type='number' />
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
                            </Form.List>)}
                        </fieldset>
                        <fieldset>
                            <legend>Other Skill</legend>
                            {profileInfo && (<Form.List name="otherSkill" initialValue={profileInfo.otherSkill}>
                                {(fields, { add, remove }) => {
                                    return (
                                        <>
                                            {fields.map(({ key, name, fieldKey, ...restField }) => (
                                                <Space key={key} style={{ display: 'flex', marginBottom: 8, justifyContent: 'space-between' }} align='start'>
                                                    <Form.Item name={[name, "name"]} fieldKey={[fieldKey, "name"]}>
                                                        <Input placeholder='Name' />
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
                                                            onChange={(e) => console.log("Change ", e)}
                                                            onDrop={(e) => console.log("Drop: ", e)}
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
                            </Form.List>)}
                        </fieldset>
                        <fieldset>
                            <legend>Work Experience</legend>
                            {profileInfo && (<Form.List name="workExperience" initialValue={profileInfo.workExperience}>
                                {(fields, { add, remove }) => {
                                    return (
                                        <>
                                            {fields.map(({ key, name, fieldKey, ...restField }) => (
                                                <Space key={key} style={{ display: 'flex', marginBottom: 8, justifyContent: 'space-between' }} align='start'>
                                                    <Form.Item name={[name, "enterpriseName"]} fieldKey={[fieldKey, "enterpriseName"]}>
                                                        <Input placeholder='Enterprise' />
                                                    </Form.Item>
                                                    <Form.Item name={[name, "position"]} fieldKey={[fieldKey, "position"]}>
                                                        <Input placeholder='Position' />
                                                    </Form.Item>
                                                    <Form.Item name={[name, "duration"]} fieldKey={[fieldKey, "duration"]}>
                                                        <Input placeholder='Duration' type='number' />
                                                    </Form.Item>
                                                    <Form.Item name={[name, "website"]} fieldKey={[fieldKey, "website"]}>
                                                        <Input placeholder='Website' />
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
                            </Form.List>)}
                        </fieldset>
                        <fieldset>
                            <legend>Activities</legend>
                            {profileInfo && (<Form.List name="activity" initialValue={profileInfo.activity}>
                                {(fields, { add, remove }) => {
                                    return (
                                        <>
                                            {fields.map(({ key, name, fieldKey, ...restField }) => (
                                                <Space key={key} style={{ display: 'flex', marginBottom: 8, justifyContent: 'space-between' }} align='start'>
                                                    <Form.Item name={[name, "name"]} fieldKey={[fieldKey, "name"]}>
                                                        <Input placeholder='Name' />
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
                            </Form.List>)}
                        </fieldset>
                        <fieldset>
                            <legend>Interest</legend>
                            {profileInfo && (<Form.List name="interest" initialValue={profileInfo.interest}>
                                {(fields, { add, remove }) => {
                                    return (
                                        <>
                                            {fields.map(({ key, name, fieldKey, ...restField }) => (
                                                <Space key={key} style={{ display: 'flex', marginBottom: 8, justifyContent: 'space-between' }} align='start'>
                                                    <Form.Item name={[name, "name"]} fieldKey={[fieldKey, "name"]}>
                                                        <Input placeholder='Name' />
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
                            </Form.List>)}
                        </fieldset>
                        <fieldset>
                            <legend>Certifications</legend>
                            {profileInfo && (<Form.List name="certification" initialValue={profileInfo.certification}>
                                {(fields, { add, remove }) => {
                                    return (
                                        <>
                                            {fields.map(({ key, name, fieldKey, ...restField }) => (
                                                <Space key={key} style={{ display: 'flex', marginBottom: 8, justifyContent: 'space-between' }} align='start'>
                                                    <Form.Item name={[name, "name"]} fieldKey={[fieldKey, "name"]}>
                                                        <Input placeholder='Name' />
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
                                                    <Form.Item name={[name, "link"]} fieldKey={[fieldKey, "link"]}>
                                                        <Input placeholder='Link' />
                                                    </Form.Item>
                                                    <Form.Item name={[name, "from"]} fieldKey={[fieldKey, "from"]}>
                                                        <Input placeholder='From' />
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
                            </Form.List>)}
                        </fieldset>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                )
            }
        </>
    )
}


export default AboutForm;