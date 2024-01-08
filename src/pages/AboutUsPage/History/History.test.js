// testing for the history page
import React from 'react';
import { render, screen } from '@testing-library/react';
import History from './History';

describe('History', () => {
  it('renders history text', () => {
    render(<History />);
    const historyText = screen.getByText(/The story of Spark Clothing started/i);
    expect(historyText).toBeInTheDocument();
  });
});
