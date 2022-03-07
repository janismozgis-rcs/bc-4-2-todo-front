import Task from "./Task";

function TasksList(props) {
    const {tasks} = props

    const tasksList = tasks.map((task, index) => {
        return <Task task={task} key={index} />
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
  