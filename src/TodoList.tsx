import React from 'react';
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import {FilterValuesType, TaskType} from "./App";
import Task from "./Task";

type TodoListPropsType = {
    title : string
    tasks : Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilterType: (filter:FilterValuesType) => void
}

const TodoList = (props : TodoListPropsType) => {

    const tasksComponents = props.tasks.map(t => {
        return (
            <Task
                key={t.id}
                //{...t}
                id = {t.id}
                title = {t.title}
                isDone = {t.isDone}
                removeTask={props.removeTask}
            />
        )
    })

    //const tasksComponents = props.tasks.map(t => <Task key={t.id} {...t} />)


    return (
        <div>
            <div>
                <TodoListHeader title = {props.title}/>
                <div>
                    <input/>
                    {/*<Button title = {"+"}/>*/}
                </div>
                <ul>
                    {tasksComponents}
                </ul>
                <div>
                    <Button
                        title = {"All"}
                        onClickHandler = {() => props.changeFilterType('all')}
                    />
                    <Button title = {"Active"}
                            onClickHandler = {() => props.changeFilterType('active')}
                    />
                    <Button title = {"Completed"}
                            onClickHandler = {() => props.changeFilterType('completed')}
                    />
                </div>
            </div>
        </div>
    );
};

export default TodoList;