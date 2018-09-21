import React, { Component } from "react";
class ListGroup extends Component {
  render() {
    const { items, itemActive, onItemSelect } = this.props;

    if (!items || items.length===0 ) return <p>No list items supplies</p>

    return (
      <ul className="list-group">
        {items.map(itemObj => (
          <li
            key={itemObj.id}
            onClick={()=>onItemSelect(itemObj)}
            className={
              itemObj.id === itemActive.id
                ? "list-group-item active"
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
