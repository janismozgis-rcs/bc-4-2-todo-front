import { useEffect, useState } from "react";
import { getTasks } from "./API/tasks";
import CreateNewTask from "./Components/CreateNewTask";
import TasksList from "./Components/TasksList";

function App() {
    const [tasks, setTasks] = useState([])
    const [tasksLoading, setTasksLoading] = useState(true)

    const loadTasks = async () => {
        setTasksLoading(true)
        const tasksFromBackend = await getTasks()
        setTasks(tasksFromBackend)
        setTasksLoading(false)
    }

    useEffect(() => {
        loadTasks()
    }, [])

    let tasksList = <div><h4>Loading...</h4></div>
    if (tasksLoading === false && tasks.length > 0) {
        tasksList = <TasksList tasks={tasks} loadTasks={loadTasks} />
    } else if (tasksLoading === false && tasks.length === 0) {
        tasksList = <div><h4>No tasks found</h4></div>
    }

    return (
        <div>
            <h1>My tasks:</h1>
            {tasksList}
            <h3>Create a new task</h3>
            <CreateNewTask loadTasks={loadTasks} />
        </div>
    );
}

export default App;
