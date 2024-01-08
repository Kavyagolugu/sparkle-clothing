import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Carousel fetch fuctionality
const CarouselFetch = ({ imgurl, altText, title, description }) => {
  return (
    <>
      <div className='carousel-item active' data-testid='carousel-item'>
            <div className='row align-items-center'>
              <div className='col-md py-2'>
                {/* image for First carousel */}
                <img
                  className='d-block img-fluid'
                  data-testid='carousel-img'
                  src={imgurl}
                  alt={altText}
                />
              </div>
              <div className='col-md py-2'>
                <h1 className='text-center'>{title}</h1>
                <p className='text-center fs-5'>{description}</p>
                <h2 className='text-center text-style'></h2>
                {/* Button to navigate to the products page */}
                <div className='d-flex justify-content-center'>
                  <button className='btn btn-warning p-3 text-center'>
                    <Link className='text-white text-decoration-none' to='/products'>
                      Browse More Products
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

// defining the prop types
CarouselFetch.propTypes = {
  imgurl: PropTypes.string,
  altText: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

export default CarouselFetch;
