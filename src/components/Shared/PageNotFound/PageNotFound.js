// start of page not found
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      {/* text to be displayed when error occures */}
      <h1 > 404 Page Not Found</h1>
      {/* navlink to home page */}
      <p>Here are some helpful links:</p>
      <NavLink to='/'>Home</NavLink>
    </div>
  );
}

export default PageNotFound;
