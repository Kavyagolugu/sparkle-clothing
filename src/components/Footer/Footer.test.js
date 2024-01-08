import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { HashRouter } from 'react-router-dom';

describe('Footer component', () => {
  it('has render social media icons facebook-icon', () => {
    render(
      <HashRouter>
        <Footer />
      </HashRouter>
    );
    expect(screen.getByTestId('facebook-icon')).toBeInTheDocument();
  });

  // testing social media icons
  it('has render social media icons twitter-icon', () => {
    render(
      <HashRouter>
        <Footer />
      </HashRouter>
    );
    expect(screen.getByTestId('twitter-icon')).toBeInTheDocument();
  });

  // testing social media icons
  it('has render social media icons instagram-icon', () => {
    render(
      <HashRouter>
        <Footer />
      </HashRouter>
    );
    expect(screen.getByTestId('instagram-icon')).toBeInTheDocument();
  });

  // testing social media icons
  it('should render social media icons', () => {
    render(
      <HashRouter>
        <Footer />
      </HashRouter>
    );
    expect(screen.getByTestId('whatsapp-icon')).toBeInTheDocument();
  });

  // testing the menu list
  it('has the menu list', () => {
    render(
      <HashRouter>
        <Footer />
      </HashRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
  });
});
