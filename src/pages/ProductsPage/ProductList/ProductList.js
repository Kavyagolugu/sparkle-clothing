import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// fetching the product as props
const ProductList = ({ thumbnailUrl, title, name, maxRetailPrice, actualPrice, discountApplicable, quantity, id }) => {
  return (
    <div className='right mb-4'>
      <div className='card'>
       {/* navigation to the product page */}
      <Link to={`/products/${id}`} className='text-white'>
        <img src={thumbnailUrl} className='card-img-top products-image' alt={title} />
        </Link>
        {/* displaying the product details  */}
        <div className='card-body products'>
          <h6 className='card-title'>{name}</h6>
          <b className='card-text retail-price-btn '>Rs {maxRetailPrice} </b>
          MRP: <span id='actualPrice'>{actualPrice} </span>
          <span>({discountApplicable}% off)</span>
          <p>Quantity: {quantity}</p>
          <button className='addtocart-btn'>
              Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// defining the prop types for all the fields
ProductList.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  name: PropTypes.string,
  actualPrice: PropTypes.number,
  maxRetailPrice: PropTypes.number,
  discountApplicable: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.number
};

export default ProductList;
