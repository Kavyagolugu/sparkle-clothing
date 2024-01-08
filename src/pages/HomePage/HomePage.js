import React, { useEffect, useState } from 'react';
import { fetchApi } from '../../utils/fetchApi';
import './HomePage.scss';
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';
import ProductList from '../ProductsPage/ProductList/ProductList';
import CarouselPage from './CarouselPage/CarouselPage';
import { Link } from 'react-router-dom';

// npx json-server --port 5000 --watch db.json

// start of the home page component
const HomePage = () => {
  // declaring setstate for isloading is error and product list
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // after the initial rendering this callback function will be called
    fetchApi(
      'http://localhost:5000/products?bestSellerRanking=1&bestSellerRanking=2&bestSellerRanking=3',
      'GET'
    )
      .then((resInJson) => {
        // capturing converted JSON res
        if (resInJson.status !== 404) {
          setProductList(resInJson);
          setIsError(false);
        } else {
          setProductList([]);
          setIsError(true);
        }
      })
      // catch block to catch the error
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // showing loadibng spinner when isloading is true
  if (isLoading) {
    return <div className='spinner-border text-success'></div>;
  }

  // showing error when is error is true
  if (isError) {
    return <div className='alert alert-danger'>Some Error Occured. Try again later</div>;
  }

  return (
    <div>
      {/* helmet setup to setup the title */}
      <HelmetSetup title='Home' />
      {/* implementing the carousel function */}
      <div id='carouselExampleIndicators' className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='1'
            aria-label='Slide 2'></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='2'
            aria-label='Slide 3'></button>
        </div>
        <div className='carousel-inner'>
          {/* calling the latestt component to get the images in carousel */}
          <CarouselPage />
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='prev'>
            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='next'>
            <span className='carousel-control-next-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>

      {/* listing best seller products in the home page */}
      <div className='row mt-3'>
        <h4>BestSold Products</h4>
        {/* using mapping for the product list */}
        {productList?.map((product) => {
          return (
            <div className='col-md-3 group' key={product.id}>
              <ProductList key={product.id} {...product} />
            </div>
          );
        })}
      </div>

      <Link to='/products' className='text-white'>
        <button className='btn btn-warningm view-all'>View All</button>
      </Link>

      {/* some policies of shopping app in the bootom of the home page */}
      <ul className='inline-list'>
        {/* using list tags to display the policies */}
        {/* font qwsome icon for the truck */}
        <i className='fa-solid fa-truck-arrow-right truck'></i>
        <li>
          <h6 data-testid='freeShipping'>FREE SHIPPING RETURN</h6>
          <p>Free shipping on all the orders over Rs499</p>
        </li>
        {/* font qwsome icon for the dollar */}
        <i className='fa-solid fa-dollar-sign dollar'></i>
        <li>
          <h6>MONEY BACK GUARANTEE</h6>
          <p>100% Money back guarantee</p>
        </li>
        {/* font qwsome icon for the truck */}
        <i className='fa-solid fa-truck-arrow-right truck'></i>
        <li>
          <h6>ONLINE SUPPORT 24/7</h6>
          <p>Reach Us out at anytime</p>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
// end of the home page
