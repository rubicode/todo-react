import { Component } from 'react';
import TodoBox from './components/TodoBox'
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))


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