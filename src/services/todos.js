import request from "./api";

export const getTodos = () => {
    return request.get('todos').then((response) => response.data)
}

export const createTodo = (title) => {
    return request.post('todos', { title }).then((response) => response.data)
}

export const removeTodo = (id) => {
    return request.delete(`todos/${id}`).then((response) => response.data)
}


