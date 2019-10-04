import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//importing testing library
import { render } from "@testing-library/react";
import DarkModeNav from './components/DarkModeNav';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has header', () => {
  const doc = render(<App />);
  doc.queryByText(/players/i)
})

it('has dark-mode', () => {
  render(<DarkModeNav />);
  
})