import { render, screen } from '@testing-library/react';
import Battleship from './battleship';

test('renders learn react link', () => {
  render(<Battleship />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
