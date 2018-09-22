import React, { Component } from "react";
class ListGroup extends Component {
  render() {
    const { items, itemActive, onItemSelect } = this.props;

    if (!items || items.length===0 ) return <p>No list items supplies</p>

    return (
      <ul className="list-group">
        {items.map(itemObj => (
          <li
            key={itemObj._id}
            onClick={()=>onItemSelect(itemObj)}
            className={
              itemObj._id === itemActive._id
                ? "list-group-item bg-secondary  text-white"
                : "list-group-item"
            }
          >
            {itemObj.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
