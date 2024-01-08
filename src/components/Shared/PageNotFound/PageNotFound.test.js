import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PageNotFound from './PageNotFound';

describe('PageNotFound', () => {
  it('displays a 404 error message', () => {
    render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    );
    expect(screen.getByText(/404 Page Not Found/i)).toBeInTheDocument();
  });

  // testing to display link to home page
  it('displays a link to the homepage', () => {
    render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    );
    const homepage = screen.getByText(/Home/i);

    expect(homepage).toBeInTheDocument();
    expect(homepage).toHaveAttribute('href', '/');
  });

  // testing to check helpful links
  it('has para with text Here are some helpful links:', () => {
    render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    );
    // using regex to find text with case insensitive
    const text = screen.getByText(/Here are some helpful links:/i);
    // Assert
    expect(text).toBeTruthy();
  });
});
