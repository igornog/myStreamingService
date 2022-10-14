import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page title', () => {
  render(<App />);
  const linkElement = screen.getByText(/REACT CHALLENGE - MOONGYS/i);
  expect(linkElement).toBeInTheDocument();
});
