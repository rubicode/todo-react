import TodoList from '../containers/TodoList'
import { Link } from 'react-router-dom'

export default function TodoBox() {
    return (
        <div className="container">
            <h1>TODO</h1>
            <h2>Daftar Kerjaan :</h2>
            <TodoList />
            <Link className="btn btn-success" to="/add">Tambah</Link>
        </div>
    )
}