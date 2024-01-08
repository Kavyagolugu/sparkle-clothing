import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';

// about us component
const AboutUsPage = () => {
  return (
    <>
      {/* helmet setup to set the title for the about us page */}
      <HelmetSetup title='About Us' />
      <img src='./assets/images/About Us.png' className='w-100' alt='About Us' />
        <ul className='nav'>
          <li className='nav-item'>
            <NavLink to='tagline' className='nav-link text-primary'>Tagline
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='history' className='nav-link text-primary'> History
            </NavLink>
          </li>
        </ul>
        <Outlet />
    </>
  );
};

export default AboutUsPage;
