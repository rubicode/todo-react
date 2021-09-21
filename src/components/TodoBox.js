import React, { Component } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default class TodoBox extends Component {

    componentDidMount() {
        this.props.onLoad()
    }

    render() {
        return (
            <div className="container">
                <h1>TODO</h1>
                <h2>Daftar Kerjaan :</h2>
                <TodoList todos={this.props.todos} resend={this.props.onResend} />
                <TodoForm add={this.props.onAdd} />
            </div>
        )
    }
}