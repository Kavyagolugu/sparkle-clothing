import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import MenuList from './MenuList';

// testing for the menulist component
describe('MenuList component', () => {
  it('has the class with navbar-nav me-auto mb-2 mb-md-0', () => {
    render(
      <HashRouter>
        <MenuList />
      </HashRouter>
    );
    const menuList = screen.getByTestId('menuList');
    expect(menuList).toHaveClass('navbar-nav me-auto mb-2 mb-md-0');
  });
});
