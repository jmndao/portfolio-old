import React from "react";
import { Form, Space, Input, Button, Upload, InputNumber, Select, Row, Col } from "antd";
import {
    MinusCircleOutlined,
    PlusOutlined,
    UploadOutlined,
} from "@ant-design/icons";
import { Option } from "antd/lib/mentions";

const DynamicField = ({ normFile }) => {
    return (
        <div>
            {/* 1. Education */}
            <Form.List name="education" layout="inline">
                {(fields, { add, remove }) => {
                    console.log(fields);
                    return (
                        <>
                            {fields.map((field) => (
                                <Space key={field.key} align="start">
                                    <Form.Item
                                        name={"school"}
                                        fieldKey={"school"}
                                        label="Education"
                                    >
                                        <Input placeholder="School" />
                                    </Form.Item>
                                    <Form.Item name={"fromYear"} fieldKey={"fromYear"}>
                                        <Input placeholder="From Year" />
                                    </Form.Item>
                                    <Form.Item name={"toYear"} fieldKey={"toYear"}>
                                        <Input placeholder="To Year" />
                                    </Form.Item>
                                    <Form.Item name={"description"} fieldKey={"description"}>
                                        <Input.TextArea placeholder="Description" />
                                    </Form.Item>

                                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    block
                                    icon={<PlusOutlined />}
                                >
                                    Add Education
                                </Button>
                            </Form.Item>
                        </>
                    );
                }}
            </Form.List>
            {/* 2. Programming Skill */}
            <Form.List name="programmingSkill" layout="inline">
                {(fields, { add, remove }) => {
                    return (
                        <>
                            {fields.map((field) => (
                                <Space key={field.key} align="start">
                                    <Form.Item
                                        name={"language"}
                                        fieldKey={"language"}
                                        label="Programming Skill"
                                    >
                                        <Input placeholder="Language" />
                                    </Form.Item>

                                    <Form.Item
                                        name="image"
                                        valuePropName="fileList"
                                        getValueFromEvent={normFile}
                                    >
                                        <Upload name="image" action="/upload.do" listType="picture">
                                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                                        </Upload>
                                    </Form.Item>
                                    <Form.Item name={"description"} fieldKey={"description"}>
                                        <Input.TextArea placeholder="Description" />
                                    </Form.Item>

                                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    block
                                    icon={<PlusOutlined />}
                                >
                                    Add Programming Skill
                                </Button>
                            </Form.Item>
                        </>
                    );
                }}
            </Form.List>
            {/* 3. Language Skill */}
            <Form.List name="languageSkill" layout="inline">
                {(fields, { add, remove }) => {
                    return (
                        <>
                            {fields.map((field) => (
                                <Space key={field.key} align="start">
                                    <Form.Item name={"level"} fieldKey={"level"} label="Language Skill">
                                        <Input placeholder="Level" />
                                    </Form.Item>
                                    <Form.Item name="level">
                                        <Select placeholder="Language Level">
                                            <Option value="debutant">Debutant</Option>
                                            <Option value="intermediary">Intermediary</Option>
                                            <Option value="fluent">Fluent</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        name="image"
                                        valuePropName="fileList"
                                        getValueFromEvent={normFile}
                                    >
                                        <Upload name="image" action="/upload.do" listType="picture">
                                            <Button icon={<UploadOutlined />}>Flag Logo</Button>
                                        </Upload>
                                    </Form.Item>

                                    <Form.Item name={"levelRate"}>
                                        <Form.Item name="{levelRate}" noStyle>
                                            <InputNumber min={2} max={5} />
                                        </Form.Item>
                                        <span className="ant-form-text"> Level Rate</span>
                                    </Form.Item>

                                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    block
                                    icon={<PlusOutlined />}
                                >
                                    Add Language Skill
                                </Button>
                            </Form.Item>
                        </>
                    );
                }}
            </Form.List>

            {/* 4. Other Skill */}
            <Form.List name="otherSkill" layout="inline">
                {(fields, { add, remove }) => {
                    return (
                        <>
                            {fields.map((field) => (
                                <Space key={field.key} align="start">
                                    <Form.Item name={"name"} fieldKey={"name"} label="Other Skill ">
                                        <Input placeholder="Name" />
                                    </Form.Item>

                                    <Form.Item
                                        name="image"
                                        valuePropName="fileList"
                                        getValueFromEvent={normFile}
                                    >
                                        <Upload name="image" action="/upload.do" listType="picture">
                                            <Button icon={<UploadOutlined />}>Logo</Button>
                                        </Upload>
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    block
                                    icon={<PlusOutlined />}
                                >
                                    Add More Skills
                                </Button>
                            </Form.Item>
                        </>
                    );
                }}
            </Form.List>
            {/* 5. Work Experience */}
            <Form.List name="workExperience" layout="inline">
                {(fields, { add, remove }) => {
                    return (
                        <>
                            {fields.map((field) => (
                                <Space key={field.key} align="start">
                                    <Form.Item name={"enterpriseName"} fieldKey={"name"} label="Other Skill ">
                                        <Input placeholder="Work Experience" />
                                    </Form.Item>
                                    <Form.Item name={"position"} fieldKey={"name"}>
                                        <Input placeholder="Position" />
                                    </Form.Item>
                                    <Form.Item name={"website"} fieldKey={"website"}>
                                        <Input placeholder="Website" />
                                    </Form.Item>
                                    <Form.Item name={"duration"}>
                                        <Form.Item name="{duration}" noStyle>
                                            <InputNumber min={2} max={5} />
                                        </Form.Item>
                                        <span className="ant-form-text"> Duration</span>
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    block
                                    icon={<PlusOutlined />}
                                >
                                    Add Work Experience
                                </Button>
                            </Form.Item>
                        </>
                    );
                }}
            </Form.List>
            {/* 5. Activity */}
            <Form.List name="activity" layout='horizontal'>
                {(fields, { add, remove }) => {
                    return (
                        <>
                            {fields.map((field) => (
                                <Row gutter={[16, 8]}>
                                    <Col>
                                        <Form.Item key={field.key} name={"name"} fieldKey={"name"} label="Activity">
                                            <Input placeholder="Activity" />
                                        </Form.Item>
                                    </Col>
                                    <Col>

                                        <MinusCircleOutlined onClick={() => remove(field.name)} />
                                    </Col>
                                </Row>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    block
                                    icon={<PlusOutlined />}
                                >
                                    Add Activity
                                </Button>
                            </Form.Item>
                        </>
                    );
                }}
            </Form.List>
            {/* 6. Interest */}
            <Form.List name="interest" layout="inline">
                {(fields, { add, remove }) => {
                    return (
                        <>
                            {fields.map((field) => (
                                <Row key={field.key} gutter={[16, 8]}>
                                    <Col>
                                        <Form.Item name={"name"} fieldKey={"name"} label="Interest">
                                            <Input placeholder="Interest" />
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <MinusCircleOutlined onClick={() => remove(field.name)} />

                                    </Col>
                                </Row>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    block
                                    icon={<PlusOutlined />}
                                >
                                    Add Interest
                                </Button>
                            </Form.Item>
                        </>
                    );
                }}
            </Form.List>
            {/* 7. Certification */}
            <Form.List name="certification" layout="inline">
                {(fields, { add, remove }) => {
                    return (
                        <>
                            {fields.map((field) => (
                                <Space key={field.key} align="start">
                                    <Form.Item name={"name"} fieldKey={"name"} label="Certification">
                                        <Input placeholder="Activity" />
                                    </Form.Item>
                                    <Form.Item
                                        name="image"
                                        valuePropName="fileList"
                                        getValueFromEvent={normFile}
                                    >
                                        <Upload name="image" action="/upload.do" listType="picture">
                                            <Button icon={<UploadOutlined />}>Image</Button>
                                        </Upload>
                                    </Form.Item>
                                    <Form.Item name={"link"} fieldKey={"link"}>
                                        <Input placeholder="link" />
                                    </Form.Item>
                                    <Form.Item name={"from"} fieldKey={"from"}>
                                        <Input placeholder="from" />
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    block
                                    icon={<PlusOutlined />}
                                >
                                    Add Interest
                                </Button>
                            </Form.Item>
                        </>
                    );
                }}
            </Form.List>
        </div>
    );
};

export default DynamicField;
