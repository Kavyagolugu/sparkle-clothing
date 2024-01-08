import React, { useEffect, useState } from 'react';
import { fetchApi } from '../../utils/fetchApi';
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';
import './ProductsPage.scss';
import { Link, useLocation } from 'react-router-dom';
import ProductList from './ProductList/ProductList';
// import ProductList from './ProductList/ProductList';

const useQuery = () => new URLSearchParams(useLocation().search);

// strat of product page function
function ProductsPage() {
  // defining the usestate for the is loading
  const [isLoading, setIsLoading] = useState(true);
  // defining the usestate for the is error
  const [isError, setIsError] = useState(false);
  // defining the usestate for the product list
  const [products, setProducts] = useState([]);
  // defining the usestate for the category
  // defining the usestate for the sort
  const [sortBy, setSortBy] = useState('');

  let url = 'http://localhost:5000/products';
  const query = useQuery();
  const queryParam = query.get('category');

  // using the switch case to filter the category
  switch (queryParam) {
    case 'Men':
      url = 'http://localhost:5000/products?category=men';
      break;
    case 'Women':
      url = 'http://localhost:5000/products?category=women';
      break;
    case 'Kids':
      url = 'http://localhost:5000/products?category=kids';
      break;
    default:
      url = 'http://localhost:5000/products?';
      break;
  }

  if (sortBy === 'low to high') {
    url = url + '&_sort=maxRetailPrice&_order=asc';
  } else {
    url = url + '&_sort=maxRetailPrice&_order=desc';
  }

  // using the fetch to fetch the data from the back end
  useEffect(() => {
    fetchApi(url, 'GET')
      .then((resInJson) => {
        console.log(resInJson);
        if (resInJson.status !== 404) {
          setTimeout(() => {
            setIsLoading(false);
            setIsError(false);
            setProducts(resInJson);
          }, 1000);
        } else {
          setIsLoading(false);
          setProducts([]);
          setIsError(true);
        }
      })
      // catch block to catch the error
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setProducts([]);
      })

      .finally(() => {
        setIsLoading(false);
      });
  }, [url, sortBy]);

  const handleSort = (event) => {
    // setSortBy(sortOrder);
    setSortBy(event.target.value);
  };

  // display of spinner wheel if is loading is true
  if (isLoading) {
    return <div className='spinner-border text-success'></div>;
  }

  // display of error message if is error is true
  if (isError) {
    return <div className='alert alert-danger'>Some Error Occured. Try again later</div>;
  }

  return (
    <>
      {/* helmet setup to setup the title for the product page */}
      <HelmetSetup title='Products' />
      <div className='container'>
        <div className='row'>
          <div className='col-md-2'>
            <ul className='list-group'>
              {/* Categories of all products based on men, women and kids */}
              <h5 className='list-group-item list-group-item-action mb-0 p-3'>Categories</h5>
              <li className='list-group-item list-group-item-action'>
                {/* link for all products */}
                <Link className='text-dark text-decoration-none' to='/products'>
                  All
                </Link>
              </li>
              <li className='list-group-item list-group-item-action'>
                {/* link for mens products */}
                <Link className='text-dark text-decoration-none' to='/products?category=Men'>
                  Men
                </Link>
              </li>
              <li className='list-group-item list-group-item-action'>
                {/* link for womens products */}
                <Link className='text-dark text-decoration-none' to='/products?category=Women'>
                  Women
                </Link>
              </li>
              <li className='list-group-item list-group-item-action'>
                {/* link for kids products */}
                <Link className='text-dark text-decoration-none' to='/products?category=Kids'>
                  Kids
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-md-10'>
            <div className='d-flex row mb-3'>
              <div className='d-flex' id='sortBy'>
                {/* products found displays */}
                <span className='mt-2 mb-0 fs-5'>{products.length} products</span>
                {/* handle Sorting the price from low to high and high to low */}
                <div className='btn-group dropend'>
                  <div>
                    <label data-testid='sortBy' htmlFor='sortInput' id='sortInput'>
                      Sort By{' '}
                    </label>
                    <select value={sortBy} onChange={(event) => handleSort(event)}>
                      <option value='high to low'>High To Low</option>
                      <option value='low to high'>Low To High</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='product-list  row'>
                {products?.map((product) => {
                  return (
                    <div key={product.id} className='col-md-4'>
                      {/* passing the props to oroduct list component */}
                      <ProductList key={product.id} {...product} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
