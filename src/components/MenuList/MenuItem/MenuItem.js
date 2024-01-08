import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// setting menulist by passing title and url
const MenuItem = ({ title, url }) => {
  return (
    <li className='nav-item'>
      <NavLink className='nav-link' to={url}>
        {title}
      </NavLink>
    </li>
  );
};

// declaring the prop types
MenuItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
};

export default MenuItem;
