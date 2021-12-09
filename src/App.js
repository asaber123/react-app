import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }


  //Using local storage to store data
  //Updating 
  updateInput(key, value){
    //Updating react state
    this.setState({
      [key]:value
    });
  }

  //Creating funcitons for adding items to list
  addItem(){
    //Creating a new unique id for each item to identify
    const newItem={
      id: 1+ Math.random(),
      value: this.state.newItem.slice()
    };
    //Copying teh current list of items
    const list=[...this.state.list];

    //add new item to the list
    list.push(newItem);
    //Update and reset state so that it updates with the new added item
    this.setState({
      list,
      newItem:""
    })
  }
  //Making the delete function to remove an intem from the list. This function is called from the onclick event on the delete button
  deleteItem(id){
    const list = [...this.state.list];

    //Filter out item being deleted. 
    const updatedList = list.filter(item=>item.id !== id);

    //Updating the list
    this.setState({list:updatedList})
  }

  render() {
    return (
      <div class="todo-list">
        <div>
          Add an item 
          <br/>
          <input 
          type="text"
          placeholder="Type task here..."
          value ={this.state.newItem}
          onChange = {e=>this.updateInput("newItem", e.target.value)}
          />
          <button
          onClick ={()=> this.addItem()}
          >
            Add
          </button>  
          {/* Creating an unordered list to show all items in the list */}
          <br/>
          <ul>
            {this.state.list.map(item =>{
              return(
                <li key = {item.id}>
                  {item.value}
                  <button
                    onClick={()=> this.deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
export default App;
