import { useState } from "react";

function CreateNewTask() {
    const [newTaskName, setNewTaskName] = useState('')

    return (
        <div>
            <label htmlFor="new-task-name">New task:</label>
            <input 
                type="text" 
                value={newTaskName} 
                onChange={(event) => setNewTaskName(event.target.value)} 
                id="new-task-name"
            />
            <button className="btn btn-success">Add task</button>
      </div>
    );
}

export default CreateNewTask;
