import MenuItem from './MenuItem/MenuItem';

// menulist array for for home products about us and contact us
const MenuList = () => {
  const navItems = [
    {
      id: '1',
      title: 'Home',
      url: '/'
    },
    {
      id: '2',
      title: 'Products',
      url: '/products'
    },
    {
      id: '3',
      title: 'About Us',
      url: '/about-us'
    },
    {
      id: '4',
      title: 'Contact Us',
      url: '/contact-us'
    }
  ];

  return (
    // returning the menu list to menu item
    <ul className='navbar-nav me-auto mb-2 mb-md-0' data-testid='menuList'>
      {navItems.map((navItem) => {
        return <MenuItem key={navItem.id} {...navItem} />;
      })}
    </ul>
  );
};

export default MenuList;
