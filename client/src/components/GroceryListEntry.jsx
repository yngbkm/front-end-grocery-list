import React from 'react';

var GroceryListEntry = (props) => (
  <li>
    <span>{props.groceryItem.name}</span>
    <span>{props.groceryItem.quantity}</span>
  </li>
);

export default GroceryListEntry;
