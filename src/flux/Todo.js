import Immutable from 'immutable';

const Todo = Immutable.Record({
  _id: 0,
  title: '',
  sent: true
});

export default Todo;
