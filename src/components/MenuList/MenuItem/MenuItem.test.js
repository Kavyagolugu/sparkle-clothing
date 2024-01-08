import { render, screen } from '@testing-library/react';
import MenuItem from './MenuItem';
import { HashRouter } from 'react-router-dom';
describe('MenuItem component', () => {
  const menuItemProps = {
    title: 'Test Title',
    url: '/test-url'
  };

  it('it has the title correctly', () => {
    render(
      <HashRouter>
        <MenuItem title='Test Title' />
      </HashRouter>
    );
    const titleElement = screen.getByText('Test Title');
    expect(titleElement).toBeInTheDocument();
  });

  // testing list item in menu
  it('has the correct class name for the list item', () => {
    render(
      <HashRouter>
        <MenuItem {...menuItemProps} />
      </HashRouter>
    );
    const listItem = screen.getByRole('listitem');
    expect(listItem).toHaveClass('nav-item');
  });

  // testing menu links
  it('has the correct class name for the link', () => {
    render(
      <HashRouter>
        <MenuItem {...menuItemProps} />
      </HashRouter>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveClass('nav-link');
  });
});
