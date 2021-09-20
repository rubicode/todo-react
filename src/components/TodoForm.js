import React, {Component} from 'react'

export default class TodoForm extends Component {
    constructor(props) {
      super(props);
      this.state = {title: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({title: event.target.value});
    }
  
    handleSubmit(event) {
      this.props.add(this.state.title);
      this.setState({title: ''})
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input className="form-control" type="text" value={this.state.title} onChange={this.handleChange} />
          </label>
          <button className="btn btn-success" type="submit">simpan</button>
        </form>
      );
    }
  }