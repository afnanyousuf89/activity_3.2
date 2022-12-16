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

  // const mx = 

  // render(<SingleItem />);

    
  //   const linkElement = await screen.findByText(/Height/i);
  //   expect(linkElement).toBeInTheDocument();




});