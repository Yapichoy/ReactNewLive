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
import {connect} from "react-redux";
import {
    updateTaskNameActionCreator,
    updateTypeActionCreator,
    updateEtaActionCreator,
    updatePriorityActionCreator,
    updatePriceActionCreator,
    saveTaskActionCreator
} from "../../redux/reducers/taskReducer";
// import ColorPicker from 'react-color-picker'
// import 'react-color-picker/index.css'

const AddTaskContainer = ({task, onTaskNameChange, onTypeChange, onEtaChange, onPriorityChange, onPriceChange, onSaveTask}) => {
    const [color, setColor] = useState('red');
    const onColorChange = ({ color }) => {
        setColor(color);
    };
    const onSave = values => {
       onSaveTask();
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
                    task_name: task.task_name,
                    type: task.type,
                    priority: task.priority,
                    eta: task.eta,
                    price:task.price
                }}
            >
                <Form.Item  label="Task name"  name="task_name"
                           rules={[
                               {
                                   required: true,
                                   message: 'Please input Task name!',
                               },
                           ]}>
                    <Input onChange={onTaskNameChange} />
                </Form.Item>
                <Form.Item label="Task type" name="type">
                    <Select onChange={onTypeChange}>
                        <Select.Option value="daly">Daly</Select.Option>
                        <Select.Option value="nl">Unlimited Task</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="ETA"  name="eta"
                           rules={[
                               {
                                   required: true,
                                   message: 'Please select ETA!',
                               },
                           ]}>
                    <DatePicker onChange={onEtaChange} />
                </Form.Item>
                <Form.Item label="Price"  name="price"
                           rules={[
                               {
                                   required: true,
                                   message: 'Please input price!',
                               },
                           ]}>
                    <InputNumber onChange={onPriceChange}/>
                </Form.Item>
               {/* <Form.Item labal={"Task Color"}>
                    <ColorPicker onDrug={onColorChange} value={color} />
                </Form.Item>*/}
                <Form.Item label="High priority" name="priority" valuePropName="checked">
                    <Switch onChange={onPriorityChange}/>
                </Form.Item>
                <Form.Item >
                    <Button htmlType="submit" type="primary">Add Task</Button>
                </Form.Item>
            </Form>
        </>
    );
};

const mapStateToProps = (state) => {
    return { ...state}

}
const mapDispatchToProps = (dispatch) => {
    return {
        onTaskNameChange : (e) => {
            dispatch(updateTaskNameActionCreator(e.target.value));
        },
        onTypeChange : (e) => {
            dispatch(updateTypeActionCreator(e));
        },
        onEtaChange : (e) => {
            dispatch(updateEtaActionCreator(e.format('DD-MM-YYYY')));
        },
        onPriorityChange : (e) => {
            dispatch(updatePriorityActionCreator(e));
        },
        onPriceChange : (e) => {
            dispatch(updatePriceActionCreator(e));
        },
        onSaveTask : () => {
            dispatch(saveTaskActionCreator());
        }
    }
}
const AddTask = connect(mapStateToProps, mapDispatchToProps)(AddTaskContainer);
export default AddTask;
