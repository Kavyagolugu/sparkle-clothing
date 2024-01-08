import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import ProductList from './ProductList';

describe('ProductList component', () => {
  const product = {
    id: 1,
    thumbnailUrl: 'https://example.com/image.jpg',
    name: 'Product Name',
    maxRetailPrice: 100,
    actualPrice: 80,
    discountApplicable: 20,
    quantity: 10
  };

  // testing for the product name
  it('renders product name correctly', () => {
    const { getByText } = render(
      <HashRouter>
        <ProductList {...product} />
      </HashRouter>
    );
    expect(getByText(product.name)).toBeInTheDocument();
  });

  // testing for the add to cart button
  it('renders "Add to Cart" button', () => {
    const { getByText } = render(
      <HashRouter>
        <ProductList {...product} />
      </HashRouter>
    );
    expect(getByText('Add to Cart')).toBeInTheDocument();
  });
});
