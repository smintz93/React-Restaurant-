import React, { Component } from 'react';

const Menuitems = (props) => {
	console.log(props, 'this is props')
	const menuitemList = props.menuitems.map((menuitem, id) => {
		// console.log(menuitem, "<--this is Menu item!")
		// console.log(id, "<--this is id")
		 return <li key={menuitem.id}>
		 <h2>{menuitem.name}</h2>
		 <p>{menuitem.description}</p>
		 <p>{menuitem.price}</p>
		 <button id={menuitem.id} onClick={props.removeMenuItem}> Remove Item </button>
		 <button onClick={props.openModal}>Edit Menu Item </button>
		 </li>

	})

	return (

		<div>	
				<h1> Menu Items </h1>
					<ol>
						{menuitemList}
					</ol>
		</div>	


		)

}


export default Menuitems