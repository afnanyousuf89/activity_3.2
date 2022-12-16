import {useEffect, useState} from 'react';
export const ChildAPI = ({
	filter, children
}) => {
	const [MyAPIData, setMyApiData] = useState([]);
	
		async function loadMyApi(){
			let url = 'https://pokeapi.co/api/v2/pokemon/1';
			const response = await fetch(url);
			const data = await response.json();
			setMyApiData(data);
            console.log(MyAPIData);
		}
		loadMyApi();
	return MyAPIData;
};