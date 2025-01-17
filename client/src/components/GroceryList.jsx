import React from 'react';
import GroceryListEntry from './GroceryListEntry.jsx';

var GroceryList = (props) => (
  <ul className="groceries">
    {props.groceries.map((item, index) =>
      <GroceryListEntry groceryItem={item} key={index} onDeleteClick={props.onDeleteClick} />
    )}
  </ul>
);

export default GroceryList;
