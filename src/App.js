import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuItems from './MenuItems';
import CreateMenuItem from './CreateMenuItem'
  
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
  createMenuItem = async (name, description, price) => {
      const menuitemsJson = await fetch("http://localhost:9292/menuitems", {
          method: 'POST',
          body: JSON.stringify({
          name: name,
          description: description,
          price: price
        })
      })


      const parsedResponse = await menuitemsJson.json()



      console.log(parsedResponse, "<---this is parsedResponse in the createmenu item function");

      this.setState({
        menuitems: [...this.state.menuitems, parsedResponse.added_item]
      })
   

      return parsedResponse

  }


  render() {

    console.log(this.state, "<----- this is state")
    return (
      <div className="App">
      
        <div>




        </div>

       <CreateMenuItem createMenuItem={this.createMenuItem} />

       <MenuItems menuitems={this.state.menuitems}/>



      </div>
    );
  }
}

export default App;
