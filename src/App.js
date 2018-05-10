import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuItems from './MenuItems';
import CreateMenuItem from './CreateMenuItem'
import EditModal from './EditModal'

  
class App extends Component {
  constructor(){
    super();
      this.state = {
        menuitems: [],
        modalOpen: false,
        editedMenuItem: []
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

      // console.log(parsedResponse, "<---this is parsedResponse in the createmenu item function");

      this.setState({
        menuitems: [...this.state.menuitems, parsedResponse.added_item]
      })
   

      return parsedResponse
  }
  removeMenuItem = async (e) => {

      const id = e.currentTarget.id

      // console.log(id, "<----- This is ID in Remove MenuItem FUNCTIOn")

      const menuitem = await fetch("http://localhost:9292/menuitems/" + id, {
        method: 'DELETE'
      })

      console.log(menuitem, "<---- This is menuitem in removemenu item function after the API call ")

      const response = await menuitem.json()
  
      // console.log(response, "this is current ID I want to DELETE")
      // You don't want to filter with the index anymore, cuz were using a db
      // so you have to compare with database ID
      this.setState({menuitems: this.state.menuitems.filter((menuitem) => menuitem.id != id)})

  }

  openModal = (e) => {
    console.log("This is Open Modal Function")
     const menuitemId = parseInt(e.target.previousSibling.id)
      
      const editedMenuItem = this.state.menuitems.find((menuitem) => {
        return menuitem.id === menuitemId
      })
      // console.log(editedItem, "<---- This is Edited Item")
      this.setState({
        modalOpen: true,
        editedMenuItem: editedMenuItem 
      })
  }

  editMenuItem = async (nameValue, descriptionValue, priceValue, id) => {
      console.log(nameValue, "<------This is updated name value")
      console.log(descriptionValue, "<----This is updated description value")
      console.log(priceValue, "<----This is updated price value")

      const menuItem = await fetch("http://localhost:9292/menuitems/" + id, {
        method: 'PUT',
        body: JSON.stringify({
          name: nameValue,
          description: descriptionValue,
          price: priceValue 
        })
      })
      const response = await menuItem.json()
      console.log(response, "<--- This is the response in edit menu item");

      const editedMenuItemIndex = this.state.menuitems.findIndex((menuitem) => {
          return menuitem.id === response.id 
      })

      const state = this.state;
      console.log(state, 'This is state in edit menu item');
      state.menuitems[editedMenuItemIndex] = response
      state.modalOpen = false;
      this.setState(state)

  }


  render() {

    console.log(this.state.editedMenuItem, "<----- editedMenuItem")
    return (
      <div className="App">
      
        <div>
 
        </div>

        <CreateMenuItem createMenuItem={this.createMenuItem}/>
        <EditModal modalState={this.state.modalOpen} editedMenuItem={this.state.editedMenuItem} editMenuItem={this.editMenuItem} />

        <MenuItems menuitems={this.state.menuitems} removeMenuItem={this.removeMenuItem} openModal={this.openModal} />





      </div>
    );
  }
}

export default App;
