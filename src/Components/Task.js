import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

import { useState } from "react";
import { changeTaskStatus, deleteTask } from "../API/tasks";

function Task(props) {
    const { task, loadTasks } = props
    const [taskChanging, setTaskChanging] = useState(false)

    const changeIsCompletedState = async () => {
        setTaskChanging(true)
        await changeTaskStatus(task._id, !task.isCompleted, task.title)
        await loadTasks()
    }

    const deleteTaskAction = async () => {
        setTaskChanging(true)
        await deleteTask(task._id)
        await loadTasks()
    }


    let deleteBtn = ''
    if (task.isCompleted) {
        deleteBtn = <button 
                className="btn btn-danger"
                disabled={taskChanging}
                onClick={deleteTaskAction}
            >
                <FontAwesomeIcon icon={faTrashCan} />
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
            <span>{task.title}</span>
            {deleteBtn}
        </li>
    );
}

export default Task;
