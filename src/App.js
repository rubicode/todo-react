import { Component } from 'react';
import TodoBox from './components/TodoBox'
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/todos'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <TodoBox />
      </Provider>
    )
  }
}

export default App;