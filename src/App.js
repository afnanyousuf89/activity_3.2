import logo from './logo.svg';
import './App.css';
import { MyAPI } from './Hooks/MainAPI';
import { Children, useEffect, useState } from 'react';
import { ChildAPI } from './Hooks/ChildAPI';
import SingleItem from './SingleItem'

function App() {

	const [loading, setloading] = useState(false);
	const [childAPI, setchildAPI] = useState([]);

	const mydataAPI = MyAPI({
		filter: {
			id: 0
		}, children: ['results']
	});

	async function changeItem(e) {
		setloading(true);

			let url = `https://pokeapi.co/api/v2/pokemon/${e.target.id}`;
			const response = await fetch(url);
			const data = await response.json();
			setchildAPI(data);
			//console.log(childAPI.sprites.back_default);
			setloading(false);

};



	return (
		<div className="wrapper">
			
			<header className="App-header">
				{
					mydataAPI.length > 0 ?<h1>List Of Charactors</h1> : ''
				}
				
				{mydataAPI.map((row, i) => {
					return <h2 className='itemLink' onClick={changeItem} data-testid={row.name} id={i+1} key={i+1}>{i + 1} - {row.name}</h2>
				})}
			</header>
			<div className="App-body">
{
	childAPI.id > 0 ? 

	loading ? <div>Loading...</div> :
	
	<SingleItem namez={childAPI}/>


	: 'Nothing Found'
}
			
			
			</div>
			<div className='main-header'>Footer Consuming API</div>
		</div>
	);
}

export default App;
