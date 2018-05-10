import React, {Component} from 'react';
import './style.css'



class EditModal extends Component {
	constructor(){
		super()

		this.state = {
			nameinputVal: "",
			descriptioninputValue: "",
			priceinputValue: ""
		}

		// this.handleInput = this.handleInput.bind(this)
		
	}
	// handleInput = (e) => {

	// 	// this.setState({e.target.nameinputVal: e.target.value})
	// 		this.setState({
	// 			nameinputVal: e.target.nameinputVal,
	// 			descriptioninputValue: e.target.descriptioninputValue,
	// 			priceinputValue:  e.target.priceinputValue

	// 		})
	
	// 	console.log(this.state, "<--- THIS IS THIS.STATE IN HANDLE INPUT")
	
		
	// }
	componentWillReceiveProps(nextprops) {
		if(nextprops.editedMenuItem === [] ) {

		} else {
			this.setState({
				nameinputVal: nextprops.editedMenuItem.name,
				descriptioninputValue: nextprops.editedMenuItem.description,
				priceinputValue: nextprops.editedMenuItem.price
			})
		}
	}
	handleSubmit = (e) => {
		e.preventDefault()

		this.props.editMenuItem(this.state.nameinputVal, this.state.descriptioninputValue, this.state.priceinputValue, this.props.editedMenuItem.id)
		
	}

	render(){
		console.log(this.state, "<--- THIS IS THIS.STATE IN RENDER IN EDIT MODAL")
		const cssClass = this.props.modalState ? "Edit-Modal-Open" : "Edit-Modal-Closed"
		return (

			<div className={cssClass}>
				<input type="text" 
					value={this.state.nameinputVal}
					onChange={(e) => this.setState({ nameinputVal: e.target.value})}/>
				<input type="text"	
				value={this.state.descriptioninputValue} 
				onChange={(e) => this.setState({descriptioninputValue: e.target.value})} />
				<input type="text"	
				value={this.state.priceinputValue} 
				onChange={(e) => this.setState({priceinputValue: e.target.value})}  />
				<button onClick={this.handleSubmit}>Edit</button>
			</div>

			)
	}

} 




export default EditModal