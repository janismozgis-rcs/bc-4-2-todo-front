import Task from "./Task";

function TasksList(props) {
    const { tasks, loadTasks } = props

    const tasksList = tasks.map((task, index) => {
        return <Task task={task} key={index} loadTasks={loadTasks} />
    })

    return (
        <div>
            <ul className="list-group">
                {tasksList}
            </ul>
        </div>
    );
}

export default TasksList;
