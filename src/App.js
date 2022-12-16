import logo from './logo.svg';
import './App.css';
import { MyAPI } from './Hooks/MainAPI';
import { Children, useEffect, useState } from 'react';
import { ChildAPI } from './Hooks/ChildAPI';
import SingleItem from './SingleItem'

function App() {

	const [selectedItem, setselectedItem] = useState('');
	const [childAPI, setchildAPI] = useState([]);

	const mydataAPI = MyAPI({
		filter: {
			id: 0
		}, children: ['results']
	});

	async function changeItem(e) {
		setselectedItem(e.target.id);
			// const childdataAPI = ChildAPI({
			// 	filter: {
			// 		id: selectedItem
			// 	}, children: ['abilities']
			// });
	
			// console.log(childdataAPI);
			let url = `https://pokeapi.co/api/v2/pokemon/${e.target.id}`;
			const response = await fetch(url);
			const data = await response.json();
			setchildAPI(data);
			//console.log(childAPI.sprites.back_default);

};



	return (
		<div className="wrapper">

			<header className="App-header">
				<h1>List Of Charactors</h1>
				{mydataAPI.map((row, i) => {
					return <h2 className='itemLink' onClick={changeItem} id={i+1} key={i+1}>{i + 1} - {row.name}</h2>
				})}
			</header>
			<div className="App-body">
{
	childAPI.id > 0 ? 
	
	<SingleItem namez={childAPI}/>


	: 'Nothing Found'
}
			
			
			</div>

		</div>
	);
}

export default App;
