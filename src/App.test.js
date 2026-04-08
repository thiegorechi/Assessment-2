import { render, screen } from '@testing-library/react';
import App from './App';

test('displays Thiego Gomes Rechi', () => {
  render(<App />);
  expect(screen.getByText('Thiego Gomes Rechi')).toBeInTheDocument();
});
