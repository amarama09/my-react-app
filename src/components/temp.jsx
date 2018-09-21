import React from "react";
const Temp = () => {
    const items =[{id:1,name:"All Genre"},{id:2,name:"Action"},{id:3,name:"Comedy"},{id:4,name:"Thriller"}];
  return (

    <React.Fragment>
      <Paginator
        totalItems={100}
        itemsPerPage={4}
        currentPage={4}
        handlePageClick={pageNum =>
          console.log("Page Number Clicked ", pageNum)
        }
      />

      <ListGroup
        items={items}
        itemActive={{ id: 1, name: "All Genre" }}
        onItemSelect={itemObj => {
          console.log(itemObj.name);
        }}
      />
      

      <table className="table">
        <thead>
          <tr>
            <th />
            <th />
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <tr />
            <tr />
            <tr />
            <tr />
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Temp;
