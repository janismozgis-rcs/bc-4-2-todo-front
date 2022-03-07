import { useEffect, useState } from "react";
import { getTasks } from "./API/tasks";
import CreateNewTask from "./Components/CreateNewTask";
import TasksList from "./Components/TasksList";

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const tasksFromBackend = getTasks()
    setTasks(tasksFromBackend)
    
  }, [])


  return (
    <div>
      <h1>My tasks:</h1>
      <TasksList tasks={tasks} />
      <h3>Create a new task</h3>
      <CreateNewTask />
    </div>
  );
}

export default App;
