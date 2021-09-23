import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions'
import { useHistory } from 'react-router-dom';


export default function TodoForm(props) {
  let history = useHistory()

  const [title, setTitle] = useState('')

  const dispatch = useDispatch()

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(title))
    setTitle('')
    history.push('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input className="form-control" type="text" value={title} onChange={handleChange} />
      </label>
      <button className="btn btn-success" type="submit">simpan</button>
    </form>
  );

}