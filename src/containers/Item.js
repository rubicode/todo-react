import TodoItem from '../components/TodoItem'
import { connect } from 'react-redux'
import { resendTodo, removeTodo } from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
    resend: () => dispatch(resendTodo(ownProps.id, ownProps.title)),
    remove: () => dispatch(removeTodo(ownProps.id))
})

export default connect(
    null,
    mapDispatchToProps
)(TodoItem)