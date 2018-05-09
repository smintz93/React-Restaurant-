import React, { Component } from 'react';

class CreateMenuItem extends Component {
	constructor(){
		super()

			this.state = {
				name: "",
				description: "",
				price: ""
			};
		this.updateMenuItem = this.updateMenuItem.bind(this)	
	}


	updateMenuItem = (e) => {
	
		this.setState({[e.target.name]: e.target.value})
		console.log(this.state)
	}
	handleSubmit = (e) => {
		e.preventDefault()
		console.log(this.state, "<------ this is state")
		this.props.createMenuItem(this.state.name, this.state.description, this.state.price)
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" name="name" onChange={this.updateMenuItem}/>
				<input type="text" name="description" onChange={this.updateMenuItem}/>
				<input type="text" name="price" onChange={this.updateMenuItem}/>

				<button type="submit">Add Item</button>
			</form>


			)
	}
}





export default CreateMenuItem




