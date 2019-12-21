import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

export default class ToDoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit, isEmpty } = this.props;
    return (
      <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">my todo list</h3>

      {items.map(item => {
          return(
            <ToDoItem key={item.id} title={item.title} handleDelete={() => handleDelete(item.id)} handleEdit={() => handleEdit(item.id)}/>)
        })
      }


      {isEmpty ? null : <button onClick={clearList} type="button" className="btn btn-danger btn-block text-capitalize mt-5">Clear List</button>}
      </ul>
    )
  }
}
