import React, { Component } from "react";
import _ from "lodash";
class Table extends Component {
  raiseSort = column => {
    this.props.columnSort(column);
  };

  getArrow(colName) {
    const { sortObj } = this.props;

    return (
      colName === sortObj.name && (
        <i className={"fa fa-sort-" + sortObj.order} aria-hidden="true" />
      )
    );
  }

  render() {
    const { rows, columns } = this.props;

    return (
      <table className="table bg-light table-hover shadow">
        <thead>
          <tr className="bg-secondary text-white">
            {columns.map(col => (
              <th
                key={col.name}
                className="clickable"
                onClick={col.name ? () => this.raiseSort(col.name) : null}
              >
                {col.label}
                {this.getArrow(col.name)}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map(row => (
            <tr key={row._id}>
              {columns.map(col => (
                <td key={col.name}>
                  {col.component ? col.component(row) : _.get(row, col.name)}{" "}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
