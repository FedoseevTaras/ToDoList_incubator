import React from 'react';
import {TaskType} from "./App";


const Task: React.FC<TaskType> = ({id, title, isDone}) => {

    return (
        <li key={id}>
            <input type="checkbox" checked={isDone}/>
            <span>{title}</span>
        </li>
    );
};

export default Task;