import { Container } from 'flux/utils'
import TodoBox from './components/TodoBox'
import TodoStore from './flux/TodoStore'
import TodoActions from './flux/TodoActions'
import { Component } from 'react';

const convert = function (containerClass) {
  const tmp = containerClass;
  containerClass = function (...args) {
    return new tmp(...args);
  };
  containerClass.prototype = tmp.prototype;
  containerClass.getStores = tmp.getStores;
  containerClass.calculateState = tmp.calculateState;
  return containerClass;
}

class App extends Component {

  static getStores() {
    return [
      TodoStore
    ];
  }

  static calculateState(prevState) {
    return {
      todos: TodoStore.getState(),

      onLoad: TodoActions.loadTodo,
      onAdd: TodoActions.addTodo,
      onDelete: TodoActions.deleteTodo,
      onResend: TodoActions.resendTodo

    };
  }

  render() {
    return <TodoBox {...this.state} />;
  }
}

export default Container.create(convert(App));