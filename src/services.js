
const BASE_URL = 'http://localhost:3000/'

export const AddToDo = async (data) => {
    return await fetch(`${BASE_URL}to-do`, { method: 'post', body: JSON.stringify(data)}).then(res => res.json())
}