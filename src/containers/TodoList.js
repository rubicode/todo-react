import React, { Component } from 'react'
import TodoItem from './Item'
import { connect } from 'react-redux';
import { loadTodo } from '../actions'

class TodoList extends Component {

    componentDidMount() {
        this.props.load()
    }

    render() {
        const nodeList = this.props.data.map(item => (
            <TodoItem
                key={item._id}
                id={item._id}
                title={item.title}
                sent={item.sent} />))

        return (
            <ol>
                {nodeList}
            </ol>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    load: () => dispatch(loadTodo())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)