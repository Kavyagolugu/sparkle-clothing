import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import CarouselPage from './CarouselPage';

// testing for the carousel page
describe('LatestProducts', () => {
  it('has image with classname d-block w-100 carousel carousel-image', () => {
    render(
      <HashRouter>
        <CarouselPage />
      </HashRouter>
    );
    const carousel = screen.getByTestId('carouselImg');
    expect(carousel).toHaveClass('col');
  });
});
