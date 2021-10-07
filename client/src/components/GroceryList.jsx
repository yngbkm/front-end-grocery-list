import React from 'react';
import GroceryListEntry from './GroceryListEntry.jsx';

var GroceryList = (props) => (
  <ul className="groceries">
    <GroceryListEntry />
  </ul>
);

export default GroceryList;
