import React, { useEffect, useState } from 'react';
import './ProductDetails.scss';
import { useParams, Link } from 'react-router-dom';
import { fetchApi } from '../../../utils/fetchApi';

// start of the individual component
const ProductDetails = () => {
  // defining use states for various functionalities
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState('');
  const [display, setDisplay] = useState(false);
  console.log(display);

  // using fetch api to fetch the data fron the backend
  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = async () => {
    fetchApi(`http://localhost:5000/products?id=${id}`, 'GET')
      .then((resInJson) => {
        console.log(resInJson);
        if (resInJson.statucode !== 404) {
          setProduct(resInJson[0]);
          setIsError(false);
        } else {
          setProduct([]);
          setIsError(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleAddReview = (e) => {
    e.preventDefault();

    const productReviews = {
      reviewId: Math.floor(Math.random() * 10000),
      name,
      email,
      phone,
      rating,
      review
    };

    const updatedProduct = {
      ...product,
      reviews: [...product.reviews, productReviews]
    };

    setDisplay(true);

    fetch(`http://localhost:5000/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedProduct),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((resInJson) => {
        setIsSaved(true);
        setTimeout(() => {
          setIsSaved(false);
        }, 1000);
        setName('');
        setEmail('');
        setPhone('');
        setRating(1);
        setReview('');
        setProduct(updatedProduct);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  const handleCancel = (e) => {
    e.preventDefault();
    // Reset the form fields
    setName('');
    setEmail('');
    setPhone('');
    setRating(1);
    setReview('');
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    // check whether email is already present
    setEmail(e.target.value);
  };

  // showing loadibng spinner when isloading is true
  if (isLoading) {
    return <div className='spinner-border text-success'></div>;
  }

  // showing error when is error is true
  if (isError) {
    return <div className='alert alert-danger'>Some Error Occured. Try again later</div>;
  }

  return (
    <>
      {/* individual product display */}
      <div className='container-fluid'>
        <div>
          <div className='max-w-screen-xl mx-auto my-10 flex gap-10 grid-wrapper row'>
            {/* div tag with image tag inside */}
            <div className='image-wrapper col-md-4'>
              <button className='btn btn-primary'>
                <Link to='/products' className='text-white back-btn'>
                  <i className='fa-solid fa-arrow-left'></i> Back
                </Link>
              </button>
              {/* image tag to display the individual image */}
              <img src={product.thumbnailUrl} className='product-image' />
            </div>
            {/* div section to display the right side content in the product */}
            <div className='text-wrapper col-md-4'>
              {/* display of product name in the right section using header section */}
              <h4 className='card-title product-title'>{product.name}</h4>
              {/* display of product description in the right section using header section */}
              <p className='card-text'>{product.description}</p>
              <h5 className='card-text retail-price-btn '>Rs {product.maxRetailPrice} </h5>
              MRP: <span id='actualPrice'>{product.actualPrice} </span>
              <span>({product.discountApplicable}% off)</span>
              <p>Quantity: {product.quantity}</p>
              <p>TotalReviews: {product.reviews.length}</p>
              <button className='addtocart-btn'>Add to Cart</button>
              <button
                type='button'
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
                data-testid='reviewBtn'>
                Write a Review
              </button>
              {product.reviews &&
                product.reviews.map((review, index) => {
                  return (
                    <div className='me-5 ms-1' key={index}>
                      <p id='userName' className='mb-0 text-primary'>
                        {review.name}
                      </p>
                      <p className='rating mb-0'>Rating: {review.rating}</p>
                      <p id='userReview' className='mt-0'>
                        {review.review}
                      </p>
                    </div>
                  );
                })}
              <div
                className='modal fade'
                id='exampleModal'
                tabIndex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'>
                <div className='modal-dialog modal-dialog-centered'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      {/* header section in the review */}
                      <h1 className='modal-title fs-5' id='exampleModalLabel'>
                        Write a Review
                      </h1>
                      <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='modal'
                        aria-label='Close'></button>
                    </div>
                    <div className='modal-body'>
                      <form onSubmit={handleAddReview}>
                        {/* name input field in the review form */}
                        <div className='mb-3'>
                          <label htmlFor='name'>Name:</label>
                          <input
                            type='text'
                            id='name'
                            className='m-2'
                            value={name}
                            required
                            onChange={handleName}
                          />
                        </div>
                        {/* email input field in the review form  */}
                        <div className='mb-3'>
                          <label htmlFor='email'>Email:</label>
                          <input
                            type='email'
                            id='email'
                            value={email}
                            className='m-2'
                            onChange={handleEmail}
                            required
                          />
                        </div>
                        <div className='mb-3'>
                          {/* name input field in the review form  */}
                          <label htmlFor='phone'>Phone:</label>
                          <input
                            type='tel'
                            id='phone'
                            className='m-2'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                          />
                        </div>
                        {/* rating field in the review form */}
                        <div className='mb-3'>
                          <label htmlFor='rating'>Rating:</label>
                          <select
                            id='rating'
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            className='m-2'
                            required>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                          </select>
                        </div>
                        {/* review field in the form */}
                        <div className='mb-3'>
                          <label htmlFor='review' className='mb-0'>
                            Review:
                          </label>
                          <textarea
                            id='review'
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            className='mb-0'
                            required></textarea>
                        </div>
                        <div className='modal-footer'>
                          <button
                            type='button'
                            className='btn btn-secondary'
                            data-bs-dismiss='modal'
                            onClick={handleCancel}>
                            Cancel
                          </button>
                          <button type='submit' className='btn btn-primary' data-bs-dismiss='modal'>
                            Submit
                          </button>

                          {/* Saved Sucessfully text appears on click of submit button */}
                          {isSaved ? (
                            <div className='alert alert-success' data-testid='savedMessage'>
                              {' '}
                              Saved Sucessfully!
                            </div>
                          ) : (
                            ''
                          )}
                          {/* error message if any error occures */}
                          {isError ? (
                            <div className='alert alert-danger'>
                              Some Error occured. try again later!
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
