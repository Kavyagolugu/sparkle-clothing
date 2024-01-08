import React from 'react';
import { render, screen } from '@testing-library/react';
import CarouselFetch from './CarouselFetch';
import { HashRouter } from 'react-router-dom';

describe('Carousel Fetch', () => {
  it('has div with the classname carousel-item active', () => {
    render(
      <HashRouter>
        <CarouselFetch />
      </HashRouter>
    );
    const carousel = screen.getByTestId('carousel-item');
    expect(carousel).toHaveClass('carousel-item active');
  });

  // checking for the presence of a class
  it('has image with classname d-block  carousel carousel-image', () => {
    render(
      <HashRouter>
        <CarouselFetch/>
      </HashRouter>
    );
    const img = screen.getByTestId('carousel-img');
    expect(img).toHaveClass('d-block img-fluid');
  });

  // checking for the browse products
  it('has Browse 100+ Products text', () => {
    render(
      <HashRouter>
        <CarouselFetch />
      </HashRouter>
    );
    const sortBy = screen.findByText(/Browse 100+ Products/i);
    expect(sortBy).toBeTruthy();
  });
});
