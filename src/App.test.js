import { fireEvent, render, screen } from '@testing-library/react';
import { useEffect } from 'react';
import App from './App';
import SingleItem from './SingleItem';



test('Test if App Component is loading properly', async () => {
	render(<App />);
	const linkElement = await screen.findByText(/Footer Consuming API/i);
	expect(linkElement).toBeInTheDocument();
});


test('tesing Single Item Component', async () => {
	const item = {
		name: 'Testing',
		sprites: {
			back_default: 'abc.png',
			front_default: 'abc.png',
			back_shiny: 'abc.png',
		}
	};
	render(<SingleItem namez={item} />);
	// const mx = await screen.findByTestId(/bulbasaur/i);
	// fireEvent.click(mx);
	const linkElement = await screen.findByText(/Height/i);
	expect(linkElement).toBeInTheDocument();
});


test('check API Data on page loading', async () => {
	render(<App />);
	const linkElement = await screen.findByText(/List Of Charactors/i);
	expect(linkElement).toBeInTheDocument();
});


test('check API Data On child Data Pokemon', async () => {
	render(<App />);
	const mx = await screen.findByTestId(/bulbasaur/i);
	fireEvent.click(mx);
	const linkElement = await screen.findByText(/Height/i);
	expect(linkElement).toBeInTheDocument();
});




// test('check Loading Text showing on API Data call child Data Pokemon', async () => {
// 	render(<App />);
// 	const linkElement = screen.findByText(/Loading.../i);
// 	expect(linkElement).toBeInTheDocument();
// });