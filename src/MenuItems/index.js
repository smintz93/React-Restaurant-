import React, { Component } from 'react';

const Menuitems = (props) => {
	console.log(props, 'this is props')
	const menuitemList = props.menuitems.map((menuitem, i) => {
		 return <li key={menuitem.id}>{menuitem.name}</li>
	})

	return (

		<div>	
				<h4> Menu Items </h4>
					<ul>
						{menuitemList}
					</ul>
		</div>	


		)

}


export default Menuitems