import TodoItem from './TodoItem'

export default function TodoList(props) {
    const nodeList = [...props.todos.values()].map(item => (
        <TodoItem
            key={item._id}
            id={item._id}
            title={item.title}
            sent={item.sent}
            resend={props.resend} />))
    return (
        <ol>
            {nodeList}
        </ol>
    )
}