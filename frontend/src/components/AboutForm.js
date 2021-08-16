import React, { useEffect } from "react";
import { Button, Form, Input, Space, Spin, Upload } from "antd";
import { fetchAbout } from "../actions/about.action";
import { useDispatch, useSelector } from "react-redux";
import { MinusCircleOutlined, PlusOutlined, UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import { firebaseUpload } from "../actions/about.action";

const AboutForm = () => {

    const dispatch = useDispatch();

    const getAbout = useSelector(state => state.getAbout);
    const { loading, error, profileInfo } = getAbout;

    const firebaseUploader = useSelector(state => state.firebaseUploader);
    const { onProgress, uploadError, fileUrl, id } = firebaseUploader;

    const onFinishFailed = () => {
        console.log('Form Submission failed');
    }

    const uploadOnChangeHandler = (e, key) => {
        const file = e.target.files[0]
        dispatch(firebaseUpload(file, key));
    }

    const onFinish = (values) => {
        console.log(values);
    }

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    }

    useEffect(() => {
        dispatch(fetchAbout());
    }, [dispatch]);

    return (
        <>
            {loading ? <Spin tip='Loading...' /> : error ? (
                <div className='contact-error'>{error}</div>)
                : (
                    <Form name='aboutForm' onFinish={onFinish} onFinishFailed={onFinishFailed}>
                        <fieldset>
                            <legend>About</legend>
                            <Form.Item name="about" initialValue={profileInfo.about}>
                                <Input.TextArea />
                            </Form.Item>
                        </fieldset>
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
                                                        <Input type='file' onChange={e => uploadOnChangeHandler(e, key)} />
                                                        { onProgress && key === id && (<Spin key={fieldKey} size='small' indicator={<LoadingOutlined />} />)}
                                                        { uploadError && key === id (<div key={fieldKey} className="contact-error">{uploadError}</div>)}
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
                                                        getValueFromEvent={normFile}
                                                        valuePropName='Flag'
                                                    >
                                                        <Upload name='flag'>
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
                                                        getValueFromEvent={normFile}
                                                        valuePropName='Image'
                                                    >
                                                        <Upload name='image'>
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
                                                        getValueFromEvent={normFile}
                                                        valuePropName='Image'
                                                    >
                                                        <Upload name='image'>
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