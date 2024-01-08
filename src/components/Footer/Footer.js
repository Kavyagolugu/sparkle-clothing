import React from 'react';
import MenuList from '../MenuList/MenuList';
// Footer component starts here
export const Footer = () => {
  // getting copy right year from the new date
  const copyrightYear = new Date().getFullYear();
  // brand name for the app
  const brandName = 'Spark Clothing';

  return (
    <>
      <hr />
      <nav className='navbar navbar-expand-lg bg-body-tertiary mt-auto'>
        <div className='container-fluid'>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              {/* fetching paths and names of the menu from menu list */}
              <MenuList />
              {/* different font awsome icons in the foooter */}
              <p>
                <i
                  className='fa-brands fa-square-facebook p-2 mt-1'
                  data-testid='facebook-icon'></i>
                <i className='fa-brands fa-square-twitter p-2 mt-1' data-testid='twitter-icon'></i>
                <i className='fa-brands fa-instagram p-2 mt-1' data-testid='instagram-icon'></i>
                <i className='fa-brands fa-whatsapp p-2 mt-1' data-testid='whatsapp-icon'></i>
              </p>
            </div>
          </div>
          {/* display of copyright and brand name */}
          <p className='pt-2'>
            &copy; Copyright {copyrightYear} | {brandName}
          </p>
        </div>
      </nav>
    </>
  );
};
