import React from "react";
import {addNewTaskActionCreator} from './tasksReducer';
const { Map } = require('immutable');
const NEW_TASK = "NEW_TASK";
const TASK_NAME_EDIT = "TASK_NAME_EDIT";
const TYPE_EDIT = "TYPE_EDIT";
const ETA_EDIT = "ETA_EDIT";
const PRICE_EDIT = "PRICE_EDIT";
const PRIORITY_EDIT = "PRIORITY_EDIT";
const TASK_SAVE = "TASK_SAVE";


let initialState = {
    task_name: '',
    type: 'nl',
    eta: '',
    price: 0.00,
    priority: false
};

let taskReducer = (state = initialState, action) => {
    let map = Map(state);
    switch(action.type) {
        case NEW_TASK :
            map = Map({
                task_name: '',
                type: 'nl',
                eta: '',
                price: 0.00,
                priority: false
            });
            return map.toObject();
            break;
        case TASK_NAME_EDIT:
            return map.set('task_name', action.value).toObject();
            break;
        case TYPE_EDIT:
            return map.set('type', action.value).toObject();
            break;
        case ETA_EDIT:
            return map.set('eta', action.value).toObject();
            break;
        case PRICE_EDIT:
            return map.set('price', action.value).toObject();
            break;
        case PRIORITY_EDIT:
            return map.set('priority', action.value).toObject();
            break;
        case TASK_SAVE:
            addNewTaskActionCreator(state);
            break;
    }
    return state;
};
export let updateTaskNameActionCreator = (value) => {
    return {
        type: TASK_NAME_EDIT,
        value
    };
};
export let updateTypeActionCreator = (value) => {
    return {
        type: TYPE_EDIT,
        value
    };
};
export let updateEtaActionCreator = (value) => {
    return {
        type: ETA_EDIT,
        value
    };
};
export let updatePriorityActionCreator = (value) => {
    return {
        type: PRIORITY_EDIT,
        value
    };
};
export let updatePriceActionCreator = (value) => {
    return {
        type: PRICE_EDIT,
        value
    };
};
export let saveTaskActionCreator = () => {
    return {
        type: TASK_SAVE
    }
}
export default taskReducer;