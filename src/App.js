import { Component } from 'react';
import TodoBox from './components/TodoBox'
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/todos'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TodoForm from './containers/TodoForm';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router forceRefresh={true}>
          <Switch>
            <Route exact path="/" component={TodoBox} />
            <Route path="/add" component={TodoForm} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;