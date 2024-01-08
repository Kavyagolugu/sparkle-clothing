import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import ContactUsPage from '../../pages/ContactUsPage/ContactUsPage';
import PageNotFound from '../../components/Shared/PageNotFound/PageNotFound';
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import HomePage from '../../pages/HomePage/HomePage';
import ProductsPage from '../../pages/ProductsPage/ProductsPage';
import ProductDetails from '../../pages/ProductsPage/ProductDetails/ProductDetails';
import Tagline from '../../pages/AboutUsPage/Tagline/Tagline';
import History from '../../pages/AboutUsPage/History/History';

describe('AppRoutes', () => {
  it('renders Home page when path is /', () => {
    render(
      <MemoryRouter>
        <AppRoutes />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /home page/i });
    expect(pageTitle).toBeInTheDocument();
  });

  it('renders Products page when path is /products', () => {
    render(
      <MemoryRouter initialEntries={['/products']}>
        <AppRoutes />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /our products/i });
    expect(pageTitle).toBeInTheDocument();
  });

  it('renders IndividualProduct page when path is /products/:id', () => {
    render(
      <MemoryRouter initialEntries={['/products/1']}>
        <AppRoutes />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /product details/i });
    expect(pageTitle).toBeInTheDocument();
  });

  it('renders AboutUs page when path is /about-us', () => {
    render(
      <MemoryRouter initialEntries={['/about-us']}>
        <AppRoutes />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /about us/i });
    expect(pageTitle).toBeInTheDocument();
  });

  it('renders Tagline page when path is /about-us/tagline', () => {
    render(
      <MemoryRouter initialEntries={['/about-us/tagline']}>
        <AppRoutes />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /our tagline/i });
    expect(pageTitle).toBeInTheDocument();
  });

  it('renders History page when path is /about-us/history', () => {
    render(
      <MemoryRouter initialEntries={['/about-us/history']}>
        <AppRoutes />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /our history/i });
    expect(pageTitle).toBeInTheDocument();
  });

  it('renders ContactUs page when path is /contact-us', () => {
    render(
      <MemoryRouter initialEntries={['/contact-us']}>
        <AppRoutes />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /contact us/i });
    expect(pageTitle).toBeInTheDocument();
  });

  it('renders PageNotFound page when path is not found', () => {
    render(
      <MemoryRouter initialEntries={['/path-does-not-exist']}>
        <AppRoutes />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole('heading', { name: /404/i });
    expect(pageTitle).toBeInTheDocument();
  });
  // testing for the contact us page
  it('has proper ContactUsPage Component', () => {
    expect(ContactUsPage).toBeTruthy();
  });

  // testing for the PageNotFound page
  it('has proper PageNotFound Component', () => {
    expect(PageNotFound).toBeTruthy();
  });

  // testing for the PageNotFound page
  it('has proper AboutUsPage Component', () => {
    expect(AboutUsPage).toBeTruthy();
  });

  // testing for the PageNotFound page
  it('has proper HomePage Component', () => {
    expect(HomePage).toBeTruthy();
  });

  // testing for the PageNotFound page
  it('has proper ProductsPage Component', () => {
    expect(ProductsPage).toBeTruthy();
  });

  // testing for the PageNotFound page
  it('has proper ProductDetails Component', () => {
    expect(ProductDetails).toBeTruthy();
  });

  // testing for the PageNotFound page
  it('has proper History Component', () => {
    expect(Tagline).toBeTruthy();
  });

  // testing for the Tagline Component
  it('has proper History Component', () => {
    expect(History).toBeTruthy();
  });
});
