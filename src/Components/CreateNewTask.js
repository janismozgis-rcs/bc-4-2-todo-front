import { useState } from "react";
import { createTask } from "../API/tasks";

function CreateNewTask(props) {
    const { loadTasks } = props
    const [newTaskName, setNewTaskName] = useState('')
    const [taskCreating, setTaskCreating] = useState(false)

    const createTaskAction = async () => {
        setTaskCreating(true)
        await createTask(newTaskName)
        setTaskCreating(false)
        await loadTasks()
        setNewTaskName('')
    }

    return (
        <div>
            <label htmlFor="new-task-name">New task:</label>
            <input 
                type="text" 
                value={newTaskName} 
                onChange={(event) => setNewTaskName(event.target.value)} 
                id="new-task-name"
            />
            <button 
                className="btn btn-success" 
                disabled={taskCreating}
                onClick={createTaskAction}
            >
                Add task
            </button>
      </div>
    );
}

export default CreateNewTask;
