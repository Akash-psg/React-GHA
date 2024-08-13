import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My React App text', () => {
  render(<App />);
  const textElement = screen.getByText(/My React App/i); // Adjust text to match your App component
  expect(textElement).toBeInTheDocument();
});
