import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { HashRouter } from 'react-router-dom';

// testing for the header component
describe('Header component', () => {
  // testing wether the component has sparkle clothing text
  test('has text sparkle clothing', () => {
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );
    const logoName = screen.getByText('Spark Clothing');
    expect(logoName).toBeInTheDocument();
  });

  // testing wether the component has search box
  it('renders search box', () => {
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );
    const searchBox = screen.getByRole('searchbox');
    expect(searchBox).toBeInTheDocument();
  });

  // testing  the alternative text in the image component
  it('renders logo image', () => {
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );
    const logoImg = screen.getByAltText('Sparkle Clothing Logo');
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute('src', '../assets/images/LOGO5.jpg');
  });

  // tseting the menu list
  it('should render the MenuList component', () => {
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );
    const menuList = screen.getByTestId('menu-list');
    expect(menuList).toBeInTheDocument();
  });

  // testing navbar component
  it('should render the navbar component', () => {
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );
    const navbarCollapse = screen.getByTestId('navbarCollapse');
    expect(navbarCollapse).toBeInTheDocument();
  });

  it('has the class with collapse navbar-collapse', () => {
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );
    const navbarCollapse = screen.getByTestId('navbarCollapse');
    expect(navbarCollapse).toHaveClass('collapse navbar-collapse');
  });
});
