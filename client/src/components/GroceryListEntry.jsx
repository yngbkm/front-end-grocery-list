import React from 'react';

var GroceryListEntry = (props) => {
  return (
    <li>
      <span>{props.groceryItem.name}</span>
      <span>{props.groceryItem.quantity}</span>
      <button onClick={() => props.onDeleteClick(props.groceryItem)} >Delete</button>
    </li>
  );
}

export default GroceryListEntry;
