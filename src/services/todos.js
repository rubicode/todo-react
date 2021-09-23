import request from "./api";

export const getTodos = () => {
    return request.get('todos').then((response) => response.data.todos)
}

export const createTodo = (title) => {
    return request.post('todos', { title }).then((response) => response.data.todo)
}

export const removeTodo = (id) => {
    return request.delete(`todos/${id}`).then((response) => response.data.todo)
}


