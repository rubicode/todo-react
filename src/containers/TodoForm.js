import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions'

export default function TodoForm(props) {

  const [title, setTitle] = useState('')

  const dispatch = useDispatch()

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    dispatch(addTodo(title))
    setTitle('')
    event.preventDefault();
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