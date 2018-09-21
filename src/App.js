import React, { Component } from "react";
import Movies from "./components/movies";
import ListGroup from './components/listgroup';

class App extends Component {

  render() {
    const items =[{id:1,name:"All Genre"},{id:2,name:"Action"},{id:3,name:"Comedy"},{id:4,name:"Thriller"}];
    return (          
    <main className="container">

      <div className="row">
        <div className="col-2">
          <ListGroup
            items={items}
            itemActive={{ id: 1, name: "All Genre" }}
            onItemSelect={itemObj => {
              console.log(itemObj.name);
            }}
          />
        </div>
        <div className="col">
            <Movies />
        </div>
      </div>
  </main>
    );
  }
}

export default App;
