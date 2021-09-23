import { all, takeEvery, put, call } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid'
import * as actions from '../actions'
import { ADD_TODO, LOAD_TODO, REMOVE_TODO, RESEND_TODO } from '../constant'
import * as API from '../services/todos'
import * as GraphQL from '../services/graphql'

/*
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
*/

function* loadTodo() {
    try {
        const todos = yield call(GraphQL.loadTodos);
        yield put(actions.loadTodoSuccess(todos));
    } catch (error) {
        console.log(error);
        yield put(actions.loadTodoFailure());
    }
}

/*
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
*/

function* addTodo(payload) {
    const { title } = payload;
    const id = uuidv4()
    try {
        yield put(actions.drawAddTodo(id, title))
        const todo = yield call(API.createTodo, title);
        yield put(actions.addTodoSuccess(id, todo));
    } catch (error) {
        console.log(error);
        yield put(actions.addTodoFailure(id));
    }
}

/*
return dispatch => {
    return request.post('todos', { title })
      .then(response => {
        dispatch(resendTodoSuccess(oldId, response.data.todo))
      }).catch(err => {
        dispatch(resendTodoFailure())
      })
  }
*/

function* resendTodo(payload) {
    const { oldId, title } = payload;
    try {
        const todo = yield call(API.createTodo, title);
        yield put(actions.resendTodoSuccess(oldId, todo));
    } catch (error) {
        console.log(error);
        yield put(actions.resendTodoFailure());
    }
}



/*
return dispatch => {
    return request.delete(`todos/${id}`)
      .then(response => {
        dispatch(removeTodoSuccess(id))
      }).catch(err => {
        dispatch(removeTodoFailure())
      })
  }
*/

function* removeTodo(payload) {
    const { id } = payload;
    try {
        const todo = yield call(API.removeTodo, id);
        yield put(actions.removeTodoSuccess(todo._id));
    } catch (error) {
        console.log(error);
        yield put(actions.removeTodoFailure());
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(LOAD_TODO, loadTodo),
        takeEvery(ADD_TODO, addTodo),
        takeEvery(RESEND_TODO, resendTodo),
        takeEvery(REMOVE_TODO, removeTodo)
    ]);
}
