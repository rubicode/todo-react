import dispatcher from './Dispatcher'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

const request = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

const Actions = {
    drawTodo(todos) {
      dispatcher.dispatch({
        type: "DRAW_TODO",
        todos
      })
    },
  
    loadTodo() {
      request.get('todos').then((todos) => {
        Actions.drawTodo(todos.data.todos)
      }).catch((err) => {
        throw err
      })
    },

    drawAddTodo(id, title) {
      dispatcher.dispatch({
        type: "DRAW_ADD_TODO",
        id,
        title
      });
    },
  
    successAddTodo(todo) {
      dispatcher.dispatch({
        type: "SUCCESS_ADD_TODO",
        todo
      });
    },
  
    failedAddTodo(id, title) {
      dispatcher.dispatch({
        type: "FAILED_ADD_TODO",
        id,
        title
      });
    },
  
    addTodo(title) {
      const id = uuidv4()
      Actions.drawAddTodo(id, title)
      request.post('todos', { title }).then((todo) => {
        Actions.successAddTodo(todo)
      }).catch((err) => {
        Actions.failedAddTodo(id, title)
        throw err
      })
  
    },

    successResendTodo(id) {
      dispatcher.dispatch({
        type: "SUCCESS_RESEND_TODO",
        id
      })
    },
  
    failedResendTodo(id) {
      dispatcher.dispatch({
        type: "FAILED_RESEND_TODO",
        id
      })
    },
  
    resendTodo(id, title) {
      request.post('todos', { title }).then((todo) => {
        Actions.successResendTodo(id)
      }).catch((err) => {
        Actions.failedResendTodo(id)
        throw err
      })
    },

}

export default Actions;