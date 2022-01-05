import React from 'react';
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import {TaskType} from "./App";
import Task from "./Task";

type TodoListPropsType = {
    title : string
    tasks : Array<TaskType>
}

const TodoList = (props : TodoListPropsType) => {
    return (
        <div>
            <div>
                <TodoListHeader title = {props.title}/>
                <div>
                    <input/>
                    <Button title = {"+"}/>
                </div>
                <ul>
                    <Task key={props.tasks[0].id} {...props.tasks[0]}/>
                    <Task key={props.tasks[1].id} {...props.tasks[1]}/>
                    <Task key={props.tasks[2].id} {...props.tasks[2]}/>
                </ul>
                <div>
                    <Button title = {"All"}/>
                    <Button title = {"Active"}/>
                    <Button title = {"Completed"}/>
                </div>
            </div>
        </div>
    );
};

export default TodoList;