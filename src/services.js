
const BASE_URL = 'http://localhost:3000/'

export const AddToDo = async (data) => {
    return await fetch(`${BASE_URL}to-do`, { method: 'post', body: JSON.stringify(data)}).then(res => res.json())
}

export const GetToDOById = async (id) => await fetch(`${BASE_URL}to-do/${id}`).then(res => res.json())

export const GetAllToDos = async () => await fetch(`${BASE_URL}to-do?_sort=-done,-dueDate`).then(res => res.json())

export const UpdateToDo = async (id, data) => await fetch(`${BASE_URL}to-do/${id}`, { method: 'put', body: JSON.stringify(data) }).then(res => res.json())