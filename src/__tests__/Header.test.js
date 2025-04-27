import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import '@testing-library/jest-dom';


test('renders a <h1> with the blog name', () => {
  render(<Header name="Underreacted" />);
  
  // Correct query method:
  const h1 = screen.getByRole('heading', { name: /underreacted/i });
  
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe('H1');
});