import React from 'react';
import { render, screen } from '@testing-library/react';
import Tagline from './Tagline';

// testing for the tagline component
describe('Tagline', () => {
  it('it has tagline text', () => {
    render(<Tagline />);
    const taglineText = screen.getByText(/We have the capabilities and experience to deliver the products you need to move forward./i);
    expect(taglineText).toBeInTheDocument();
  });
});
