// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoSwarm title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoSwarm/i);
    expect(titleElement).toBeInTheDocument();
});
