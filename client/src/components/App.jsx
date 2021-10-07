import React from 'react';
import GroceryList from './GroceryList.jsx';
import groceriesData from '../data/groceriesData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src="grocery-bags.png" />
        <h1>Grocery List</h1>
        <form>
          <label> Item
            <input name="item" value="" />
          </label>
          <label> Quantity
            <input name="quantity" value="" />
          </label>
          <button>Add Grocery</button>
          <GroceryList />
        </form>
      </div>
    );
  }
}

export default App;
