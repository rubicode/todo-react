import React, { Component } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

const request = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

export default class TodoBox extends Component {
    constructor(props) {
        super(props)
        this.state = { todos: [] }
        this.addTodo = this.addTodo.bind(this)
    }

    componentDidMount() {
        request.get('todos').then((todos) => {
            if (todos.data.success) {
                this.setState({ todos: todos.data.todos.map(item => { item.sent = true; return item }) })
            } else {
                alert('gagal bro')
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    addTodo(title) {
        const id = uuidv4()
        this.setState((state, props) => ({
            todos: [...state.todos, { title, _id: id, sent: true }]
        }));
        request.post('todos', {
            title
        }).then((todos) => {

        }).catch((err) => {
            console.log(err)
            this.setState((state, props) => ({
                todos: state.todos.map(item => {
                    if (item._id === id) {
                        item.sent = false;
                    }
                    return item
                })
            }));
        })
    }

    resendTodo = (id, title) => {
        request.post('todos', {
            title
        }).then((todos) => {
            this.setState((state, props) => ({
                todos: state.todos.map(item => {
                    if (item._id === id) {
                        item.sent = true;
                    }
                    return item
                })
            }));
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="container">
                <h1>TODO</h1>
                <h2>Daftar Kerjaan :</h2>
                <TodoList todos={this.state.todos} resend={this.resendTodo} />
                <TodoForm add={this.addTodo} />
            </div>
        )
    }
}