import React from 'react';
import {Button, Form, Slider} from 'antd';
import {QuestionCircleOutlined} from "@ant-design/icons";

const SliderForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Slider values:', values);
    };

    return (
        <Form
            form={form}
            name="sliderForm"
            onFinish={onFinish}
            initialValues={{
                slider1: 50,
                slider2: 50,
                slider3: 50,
            }}
        >
            <div className={"flex flex-col"}>
                <div className={"flex flex-row items-center justify-between"}>
                    <div>
                        Enter the chunk size. (Default: 1250)
                    </div>
                    <QuestionCircleOutlined/>
                </div>
                <Form.Item className={"w-full"} name="slider1">
                    <Slider/>
                </Form.Item>
            </div>
            <div className={"flex flex-col"}>
                <div className={"flex flex-row items-center justify-between"}>
                    <div>
                        Enter the chunk overlap. (Default: 150)
                    </div>
                    <QuestionCircleOutlined/>
                </div>
                <Form.Item className={"w-full"} name="slider2">
                    <Slider/>
                </Form.Item>
            </div>

            <div className={"flex flex-col"}>
                <div className={"flex flex-row items-center justify-between"}>
                    <div>
                        Set the AI model temperature. (Default: 0.1)
                    </div>
                    <QuestionCircleOutlined/>
                </div>
                <Form.Item className={"w-full"} name="slider3">
                    <Slider/>
                </Form.Item>
            </div>

            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form>
    );
};

export default SliderForm;
