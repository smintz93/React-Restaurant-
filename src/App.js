import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuItems from './MenuItems';
  
class App extends Component {
  constructor(){
    super();
      this.state = {
        menuitems: []
      }
  }
  componentDidMount() {
      this.getMenuItems()
        .then((menuitems) => {
          // console.log(menuitems)
          this.setState({menuitems: menuitems})
        })
        .catch((err) => {
          console.log(err)
     })

  }
  getMenuItems = async () => {
      const menuitemsJson = await fetch("http://localhost:9292/menuitems")
      const menuitems = await menuitemsJson.json()

      console.log(menuitems, "<--- this is menu items");
      return menuitems
  }


  render() {

    console.log(this.state, "<----- this is state")
    return (
      <div className="App">
      
        <div>




        </div>

       <MenuItems menuitems={this.state.menuitems}/>

      </div>
    );
  }
}

export default App;
