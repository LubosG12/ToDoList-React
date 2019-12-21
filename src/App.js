import React, { Component } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {

  state= {
    items:[],
    id: uuid(),
    item: '',
    editItem: false,
    isEmpty: true
  }

  handleChange = (e) => {
    this.setState({
      item:e.target.value
    });
  };

  clearList = () => {
    this.setState({
      items:[]
    });
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id!== id)
    this.setState({
      items: filteredItems,
    });
    if (filteredItems.length==0){
      this.setState({
        isEmpty: true
      })
    }
  };

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(item => item.id!== id)
    const selectedItem = this.state.items.find(item => item.id === id)
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.item!==''){
      const newItem = {
        id: this.state.id,
        title: this.state.item,
      }
      const updatedItems =[...this.state.items, newItem];
      this.setState({
        item:'',
        items: updatedItems,
        id: uuid(),
        editItem: false,
        isEmpty: false
      })
    }
  }

  render() {
    return(
      <div className="container bg-light rounded border border-secondary mt-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">Item Input</h3>
          <ToDoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
          <ToDoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete}  handleEdit={this.handleEdit} isEmpty={this.state.isEmpty}/>
          </div>
        </div>
      </div>
    )
  };
}

export default App;
