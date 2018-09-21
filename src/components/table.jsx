import React, { Component } from 'react';
import Like from './like';
class Table extends Component {

    handleRowDelete=(row)=>{
        this.props.rowDelete(row)
    }

    handleColumnSort=(column)=>{
        this.props.columnSort(column)
    }
    

    render() { 
        const {data, handleLikeToggle}=this.props;

        return ( <table className="table  table-hover">

            <thead>
            <tr>
                <th onClick={()=>this.handleColumnSort('title')} >Title</th>
                <th  onClick={()=>this.handleColumnSort('genre.name')} >Genre</th>
                <th  onClick={()=>this.handleColumnSort('numberInStock')}>Stock</th>
                <th  onClick={()=>this.handleColumnSort('dailyRentalRate')}>Rate</th> 
                <th></th>  
                <th></th> 
            </tr>
            </thead>

            <tbody>
            {data.map(row=><tr key={row._id}>
            <td>{row.title}</td>
            <td>{row.genre.name}</td>
            <td>{row.numberInStock}</td>
            <td>{row.dailyRentalRate}</td>
            <td><Like liked={row.like} handleLikeToggle={handleLikeToggle} obj={row}/></td>
            <td><button className="btn btn-danger btn-small"  onClick={()=>this.handleRowDelete(row)} >Delete</button></td>
            </tr>)}

            </tbody>
            
        </table> );
    }
}
 
export default Table;