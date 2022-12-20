import { fireEvent, render, screen } from '@testing-library/react';
import { useEffect } from 'react';
import App from './App';
import SingleItem from './SingleItem';

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



test('check Loading Text showing on API Data call child Data Pokemon', async () => {
	render(<App />);
	const linkElement = screen.findByText(/Loading.../i);
	expect(linkElement).toBeInTheDocument();
});