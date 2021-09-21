import TodoForm from '../containers/TodoForm'
import TodoList from '../containers/TodoList'

export default function TodoBox() {
    return (
        <div className="container">
            <h1>TODO</h1>
            <h2>Daftar Kerjaan :</h2>
            <TodoList />
            <TodoForm />
        </div>
    )
}