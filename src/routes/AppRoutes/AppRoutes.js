// routes for different pages
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import Tagline from '../../pages/AboutUsPage/Tagline/Tagline';
import History from '../../pages/AboutUsPage/History/History';
import ProductDetails from '../../pages/ProductsPage/ProductDetails/ProductDetails';
const ContactUsPage = React.lazy(() => import('../../pages/ContactUsPage/ContactUsPage'));
const PageNotFound = React.lazy(() => import('../../components/Shared/PageNotFound/PageNotFound'));
const ProductsPage = React.lazy(() => import('../../pages/ProductsPage/ProductsPage'));

// appRoutes functions for routes to different pages
const AppRoutes = () => {
  return (
    <Suspense fallback={<div className='spinner-border text-primary'></div>}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />}></Route>
        <Route path='/products/:id' element={<ProductDetails />}></Route>
        <Route path='/about-us' element={<AboutUsPage />}>
          <Route path='tagline' element={<Tagline />} />
          <Route path='history' element={<History />} />
        </Route>
        <Route path='/contact-us' element={<ContactUsPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
