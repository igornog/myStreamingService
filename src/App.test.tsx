import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './pages/Home';

test('renders page title', () => {
  render(<Home />);
  const titleElement = screen.getByText('REACT CHALLENGE - MOONGY');
  expect(titleElement).toBeInTheDocument();
});
