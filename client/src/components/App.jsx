import React from 'react';
import GroceryList from './GroceryList.jsx';
import groceriesData from '../data/groceriesData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groceries: groceriesData,
      item: '',
      quantity: ''
    };

    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onInputSubmit = this.onInputSubmit.bind(this);
  }

  onDeleteClick(item) {
    this.setState({
      groceries: this.state.groceries.filter(element => element !== item)
    });
  }

  onInputSubmit(event) {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <img src="grocery-bags.png" />
        <h1>Grocery List</h1>
        <form onSubmit={this.onInputSubmit} >
          <label> Item
            <input name="item" value={this.state.item} />
          </label>
          <label> Quantity
            <input name="quantity" value={this.state.quantity} />
          </label>
          <button>Add Grocery</button>
        </form>
        <GroceryList groceries={this.state.groceries} onDeleteClick={this.onDeleteClick} />
      </div>
    );
  }
}

export default App;
