import React, { Component } from 'react';

export default class ToDoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit} = this.props;
    return (
      <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text bg-primary text-white">
            <i className="fas fa-book"> </i>
          </div>
        </div>
        <input type="text" className="form-control" placeholder="Add an item..." value={item} onChange={handleChange}/>
      </div>
      <button type="submit" className="btn btn-block btn-primary mt-3">Add Item</button>
      </form>

      </div>
    )
  }
}
