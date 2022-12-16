import {useEffect, useState} from 'react';
export const MyAPI = ({
	filter, children
}) => {
	const [MyAPIData, setMyApiData] = useState([]);
	useEffect(()=>{
		async function loadMyApi(){
			let url = 'https://pokeapi.co/api/v2/pokemon/';
			const response = await fetch(url);
			const data = await response.json();
			setMyApiData(data.results);
		}
		loadMyApi();
	},[])
	return MyAPIData;
};