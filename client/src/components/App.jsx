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
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onDeleteClick(item) {
    this.setState({
      groceries: this.state.groceries.filter(element => element !== item)
    });
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.setState({
      // groceries: this.state.groceries.concat({name: this.state.item, quantity: this.state.quantity}),
      groceries: [{name: this.state.item, quantity: this.state.quantity}, ...this.state.groceries],
      item: '',
      quantity: ''
    });
  }

  render() {
    return (
      <div>
        <img src="grocery-bags.png" />
        <h1>Grocery List</h1>
        <form onSubmit={this.onFormSubmit} >
          <label> Item
            <input name="item" value={this.state.item} onChange={this.onInputChange} />
          </label>
          <label> Quantity
            <input name="quantity" value={this.state.quantity} onChange={this.onInputChange} />
          </label>
          <button>Add Grocery</button>
        </form>
        <GroceryList groceries={this.state.groceries} onDeleteClick={this.onDeleteClick} />
      </div>
    );
  }
}

export default App;
