import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import Todo from './Todo';
import dispatcher from './Dispatcher';

class TodoStore extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {

    switch (action.type) {
      case "DRAW_TODO":
        return Immutable.OrderedMap(
          action.todos.map(item => {
            item.sent = true;
            return [item._id, item]
          })
        )

      case "DRAW_ADD_TODO":
        return state.set(action.id, new Todo({
          _id: action.id,
          title: action.title,
          sent: true
        }));

      case "FAILED_ADD_TODO":
        return state.set(action.id, new Todo({
          _id: action.id,
          title: action.title,
          sent: false
        }));

      case "FILTER_TODO":
        return state.filter(todo => !todo.complete);

      case "SUCCESS_DELETE_TODO":
        return state.delete(action.id);

      case "SUCCESS_RESEND_TODO":
        return state.setIn([action.id, 'sent'], true);

      case "FAILED_DELETE_TODO":
      case "FAILED_RESEND_TODO":
      case "SUCCESS_ADD_TODO":
      default:
        return state;
    }
  }
}

export default new TodoStore();
