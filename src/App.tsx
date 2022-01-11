import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";


export type TaskType = {
    id: number,
    title: string,
    isDone: boolean

}
export type FilterValuesType = 'all' | 'active' | 'completed'

const App = () => {
    const todoListTitle: string = "What to learn";

    // let tasks: Array<TaskType> = [
    //     {id: 1, title: "HTML&CSS", isDone: true},
    //     {id: 2, title: "Js", isDone: true},
    //     {id: 3, title: "React", isDone: false}
    // ]

    const [tasks, setTasks] = useState<Array<TaskType>> (
        [
            {id: 1, title: "HTML&CSS", isDone: true},
            {id: 2, title: "Js", isDone: true},
            {id: 3, title: "React", isDone: false}
        ]
    )

    const removeTask = (taskId : number) => {
        //const filteredTasks = tasks.filter(t => t.id !== taskId) // true || false

        setTasks(tasks.filter(t => t.id !== taskId))
    }

    const [filter, setFilter] = useState<FilterValuesType> ('all')

    const changeFilterType = (filter: FilterValuesType) => {
        setFilter (filter)
    }



    const getTasksForRender = () => {
        switch (filter) {
            case 'active':
              return tasks.filter(t => !t.isDone)
            case 'completed':
                return tasks.filter(t => t.isDone)
            default:
                return tasks
        }
    }
    const tasksForRender = getTasksForRender()

    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={tasksForRender}
                removeTask={removeTask}
                changeFilterType = {changeFilterType}
            />

        </div>
    );
}

export default App;
