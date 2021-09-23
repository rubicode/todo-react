import {
  LOAD_TODO_SUCCESS,
  LOAD_TODO_FAILURE,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO,
  RESEND_TODO_SUCCESS,
  RESEND_TODO_FAILURE,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_FAILURE,
  LOAD_TODO,
  ADD_TODO_DRAWING,
  RESEND_TODO,
  REMOVE_TODO
} from '../constant'

export const loadTodoSuccess = (todos) => ({
  type: LOAD_TODO_SUCCESS,
  todos
})

export const loadTodoFailure = () => ({
  type: LOAD_TODO_FAILURE
})

export const loadTodo = () => ({
  type: LOAD_TODO
})

export const drawAddTodo = (id, title) => ({
  type: ADD_TODO_DRAWING,
  id, title
})

export const addTodoSuccess = (oldId, todo) => ({
  type: ADD_TODO_SUCCESS,
  oldId,
  todo
})

export const addTodoFailure = (id) => ({
  type: ADD_TODO_FAILURE,
  id
})

export const addTodo = (title) => ({
  type: ADD_TODO,
  title
})

export const resendTodoSuccess = (oldId, todo) => ({
  type: RESEND_TODO_SUCCESS,
  oldId,
  todo
})

export const resendTodoFailure = () => ({
  type: RESEND_TODO_FAILURE
})

export const resendTodo = (oldId, title) => ({
  type: RESEND_TODO,
  oldId,
  title
})

export const removeTodoSuccess = (id) => ({
  type: REMOVE_TODO_SUCCESS,
  id
})

export const removeTodoFailure = () => ({
  type: REMOVE_TODO_FAILURE
})

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id
})


