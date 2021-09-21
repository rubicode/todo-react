import React, { useEffect, useCallback } from 'react'
import TodoItem from '../components/TodoItem'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { loadTodo, resendTodo, removeTodo } from '../actions'

export default function TodoList(props) {

    const { todos } = useSelector(state => ({
        todos: state.todos,
    }), shallowEqual);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadTodo())
    }, [dispatch])

    const resend = useCallback(
        (id, title) => {
            dispatch(resendTodo(id, title));
        },
        [dispatch],
    );

    const remove = useCallback(
        (id) => {
            dispatch(removeTodo(id));
        },
        [dispatch],
    );

    const nodeList = todos.map(item => (
        <TodoItem
            key={item._id}
            id={item._id}
            title={item.title}
            sent={item.sent}
            resend={() => resend(item._id, item.title)}
            remove={() => remove(item._id)} />))

    return (
        <ol>
            {nodeList}
        </ol>
    )
}