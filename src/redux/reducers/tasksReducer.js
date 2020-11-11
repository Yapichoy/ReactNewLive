import React from "react";
const { Map } = require('immutable');
const ADD_NEW_TASK = "ADD_NEW_TASK";


let initialState = {
    tasks: {}
};

let tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_TASK :
            state.append(action.task)
            let map = Map(state);
            return map.toObject();
    }
    return state;
};
export let addNewTaskActionCreator = (task) => {
    debugger
    return {
        type: ADD_NEW_TASK,
        task
    };
};

export default tasksReducer;