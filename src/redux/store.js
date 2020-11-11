import {applyMiddleware, combineReducers, createStore} from "redux";
//import usersReducer from "./reducers/usersReducer";
import taskReducer from "./reducers/taskReducer";
import tasksReducer from "./reducers/tasksReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    task: taskReducer,
    tasks: tasksReducer
    });
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;