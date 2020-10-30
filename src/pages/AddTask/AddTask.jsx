import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
    InputNumber,
    Switch,
} from 'antd';
// import ColorPicker from 'react-color-picker'
// import 'react-color-picker/index.css'

const AddTask = () => {
    const [color, setColor] = useState('red');
    const onColorChange = ({ color }) => {
        setColor(color);
    };
    const onSave = values => {
        console.log(values);
    }
    return (
        <>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                onFinish={onSave}
                name="add_task"
                initialValues={{
                    type: "demo",
                    priority: false
                }}
            >
                <Form.Item label="Task name"  name="task_name"
                           rules={[
                               {
                                   required: true,
                                   message: 'Please input Task name!',
                               },
                           ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Task type" name="type">
                    <Select>
                        <Select.Option value="demo">Daly</Select.Option>
                        <Select.Option value="mem">Unlimited Task</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="ETA"  name="eta"
                           rules={[
                               {
                                   required: true,
                                   message: 'Please select ETA!',
                               },
                           ]}>
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Price"  name="price"
                           rules={[
                               {
                                   required: true,
                                   message: 'Please input price!',
                               },
                           ]}>
                    <InputNumber />
                </Form.Item>
               {/* <Form.Item labal={"Task Color"}>
                    <ColorPicker onDrug={onColorChange} value={color} />
                </Form.Item>*/}
                <Form.Item label="High priority" name="priority" valuePropName="checked">
                    <Switch />
                </Form.Item>
                <Form.Item >
                    <Button htmlType="submit" type="primary">Add Task</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default AddTask;
