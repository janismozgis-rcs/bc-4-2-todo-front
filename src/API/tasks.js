import axios from "axios";

const baseUrl = 'http://localhost:3000/tasks'

export async function getTasks() {
    const response = await axios.get(baseUrl)

    return response.data
}

export async function createTask(taskName) {
    const data = {
        title: taskName,
    }

    await axios.post(baseUrl, data)
}

export async function changeTaskStatus(id, isCompleted, title) {
    const data = {
        title: title,
        isCompleted: isCompleted,
    }
    const url = `${baseUrl}/${id}`

    await axios.put(url, data)
}

export async function deleteTask(id) {
    const url = `${baseUrl}/${id}`
    await axios.delete(url)
}