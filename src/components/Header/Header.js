import React from 'react';
import MenuList from '../MenuList/MenuList';

const Header = () => {
  return (
    // start of the header section
    <header>
      {/* nav bar section to navigate to different menus */}
      <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            {/* logo image in the header bar */}
            <img
              src='../assets/images/LOGO5.jpg'
              className='card-img-top logo-img'
              alt='Sparkle Clothing Logo'
            />
          </a>
          {/* brand name display */}
          <a className='navbar-brand' href='/'>
            Spark Clothing
          </a>

          {/* search tab in the menu bar */}
          <div>
            <form className='d-flex' role='search'>
              <input
                className='form-control me-2 search-box'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
            </form>
          </div>

          {/* fetching the menu from the menu list */}
          <div
            className='collapse navbar-collapse'
            id='navbarCollapse'
            data-testid='navbarCollapse'>
            <div className='navbar-nav ms-auto ' data-testid='menu-list'>
              <MenuList />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
