import React from 'react';
import './App.css';
import TodoList from "./TodoList";


export type TaskType = {
    id: number,
    title: string,
    isDone: boolean

}
const App = () => {
    const todoListTitle_1: string = "What to learn";
    const todoListTitle_2: string = "What to buy";
    const tasks_1: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "Js", isDone: true},
        {id: 3, title: "React", isDone: false}
    ]
    const tasks_2: Array<TaskType> = [
        {id: 1, title: "Water", isDone: true},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Beer", isDone: false
    }]

    return (
        <div className="App">
            <TodoList title={todoListTitle_1} tasks={tasks_1}/>
            <TodoList title={todoListTitle_2} tasks={tasks_2}/>

        </div>
    );
}

export default App;