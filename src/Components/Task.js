import { useState } from "react";
import { changeTaskStatus, deleteTask } from "../API/tasks";

function Task(props) {
    const { task, loadTasks } = props
    const [taskChanging, setTaskChanging] = useState(false)

    const changeIsCompletedState = () => {
        setTaskChanging(true)
        changeTaskStatus(task.id, !task.isCompleted)
        loadTasks()
    }

    const deleteTaskAction = () => {
        setTaskChanging(true)
        deleteTask(task.id)
        loadTasks()
    }


    let deleteBtn = ''
    if (task.isCompleted) {
        deleteBtn = <button 
                className="btn btn-danger"
                disabled={taskChanging}
                onClick={deleteTaskAction}
            >
                Delete
            </button>
    }

    return (
        <li className="list-group-item">
            <input 
                type="checkbox" 
                checked={task.isCompleted} 
                disabled={taskChanging}
                onChange={changeIsCompletedState}
            />
            <span>{task.task}</span>
            {deleteBtn}
        </li>
    );
}

export default Task;
