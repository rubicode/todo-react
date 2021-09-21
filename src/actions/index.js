import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import {
  LOAD_TODO_SUCCESS,
  LOAD_TODO_FAILURE,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO,
  RESEND_TODO_SUCCESS,
  RESEND_TODO_FAILURE,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_FAILURE
} from '../constant'

const request = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

const loadTodoSuccess = (todos) => ({
  type: LOAD_TODO_SUCCESS,
  todos
})

const loadTodoFailure = () => ({
  type: LOAD_TODO_FAILURE
})

export const loadTodo = () => {
  return dispatch => {
    return request.get('todos')
      .then(function (response) {
        dispatch(loadTodoSuccess(response.data.todos))
      })
      .catch(function (error) {
        console.error(error);
        dispatch(loadTodoFailure())
      });
  }
}

const drawAddTodo = (id, title) => ({
  type: ADD_TODO,
  id, title
})

const addTodoSuccess = (oldId, todo) => ({
  type: ADD_TODO_SUCCESS,
  oldId,
  todo
})

const addTodoFailure = (id) => ({
  type: ADD_TODO_FAILURE,
  id
})

export const addTodo = (title) => {
  const id = uuidv4()
  return dispatch => {
    dispatch(drawAddTodo(id, title))
    return request.post('todos', { title })
      .then(function (response) {
        dispatch(addTodoSuccess(id, response.data.todo))
      })
      .catch(function (error) {
        console.error(error);
        dispatch(addTodoFailure(id))
      });
  }
}

const resendTodoSuccess = (oldId, todo) => ({
  type: RESEND_TODO_SUCCESS,
  oldId,
  todo
})

const resendTodoFailure = () => ({
  type: RESEND_TODO_FAILURE
})

export const resendTodo = (oldId, title) => {
  return dispatch => {
    return request.post('todos', { title })
      .then(response => {
        dispatch(resendTodoSuccess(oldId, response.data.todo))
      }).catch(err => {
        dispatch(resendTodoFailure())
      })
  }
}

const removeTodoSuccess = (id) => ({
  type: REMOVE_TODO_SUCCESS,
  id
})

const removeTodoFailure = () => ({
  type: REMOVE_TODO_FAILURE
})

export const removeTodo = (id) => {
  return dispatch => {
    return request.delete(`todos/${id}`)
      .then(response => {
        dispatch(removeTodoSuccess(id))
      }).catch(err => {
        dispatch(removeTodoFailure())
      })
  }
}


