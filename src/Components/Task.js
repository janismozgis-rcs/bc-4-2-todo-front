function Task(props) {
    const { task } = props

    let deleteBtn = ''
    if (task.isCompleted) {
        deleteBtn = <button className="btn btn-danger">Delete</button>
    }

    return (
        <li className="list-group-item">
            <input type="checkbox" checked={task.isCompleted} />
            <span>{task.task}</span>
            {deleteBtn}
        </li>
    );
}

export default Task;
