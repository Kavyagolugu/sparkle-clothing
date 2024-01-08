import { render, screen, fireEvent } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { fetchApi } from '../../../utils/fetchApi';
import ProductDetails from './ProductDetails';

jest.mock('../../../utils/fetchApi');
describe('Product Details', () => {
  const mockUserList = [
    {
      id: 1,
      name: 'kavya',
      description: 'hello'
    },
    {
      id: 2,
      name: 'Divya'
    }
  ];

  const product = {
    id: 1,
    name: "Miraan Men's Long Sleeve Casual Denim Shirt",
    description: '15 cm (6.1-inch) Super',
    imageUrl: '../assets/images/kidstreditional.webp',
    thumbnailUrl: '../assets/images/jeansshirt.jpg',
    maxRetailPrice: 750,
    actualPrice: 1500,
    category: 'men',
    discountApplicable: 50,
    added: '4/9/2021',
    quantity: 15,
    bestSellerRanking: 1,
    featured: true,
    reviews: [
      {
        id: 1002,
        name: 'Kevin',
        email: 'k@l.com',
        phone: '97654663',
        comment: 'amazing!',
        rating: 4
      },
      {
        reviewId: 1,
        name: 'navua',
        email: '2165741@cognizant.com',
        phone: '897979889',
        rating: 1,
        review: 'fhtdcgr'
      },
      {
        reviewId: 0.8281658211044594,
        name: 'jaya',
        email: 'jaya@gmail.com',
        phone: '08989898989',
        rating: 1,
        review: 'gigigui'
      },
      {
        reviewId: 1893,
        name: 'pushpa',
        email: '2165741@cognizant.com',
        phone: '897979889',
        rating: 1,
        review: 'giugy'
      },
      {
        reviewId: 6548,
        name: 'preethi',
        email: '2165741@cognizant.com',
        phone: '99999999',
        rating: 1,
        review: 'hello'
      },
      {
        reviewId: 423,
        name: 'jaya',
        email: 'jaya@gmail.com',
        phone: '08898989898',
        rating: 1,
        review: 'vsgvhgdfx'
      }
    ]
  }

  it('should submit the form correctly', async () => {
    fetchApi.mockResolvedValue(product);
    render(<ProductDetails />);
    const nameElement = await screen.findByText('Rs 750');
    expect(nameElement).toBeInTheDocument();
    const reviewBtn = screen.getByTestId('reviewBtn');
    fireEvent.click(reviewBtn);
    const nameInput = await screen.getByLabelText('Name:');
    const emailInput = await screen.getByLabelText('Email');
    const messageInput = await screen.getByLabelText('Message');
    const submitButton = await screen.getByRole('button', { name: 'Send Message' });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });
    fireEvent.click(submitButton);
    fetchApi.mockResolvedValue(mockUserList);
    // Assert that the form is cleared after submission
    const savedMessage = await screen.findByTestId('savedMessage');
    expect(savedMessage).toBeInTheDocument()
  });

  it('[MOCKING]: fetches users via rest api call', async () => {
    fetchApi.mockResolvedValue(mockUserList);
    render(
      <HashRouter>
        <ProductDetails />
      </HashRouter>
    );

    const nameElement = await screen.findByText('kavya');
    expect(nameElement).toBeInTheDocument();
    const description = await screen.findByText('kavya');
    expect(description).toBeInTheDocument();
  });
  // it('should set the product to an empty array and isError to true if the API returns a 404 status code', async () => {
  //   const mockResponse = {
  //     statuscode: 404
  //   };
  //   fetchApi.mockImplementation(() => Promise.resolve(mockResponse));

  //   await getProductList();

  //   expect(setProduct).toHaveBeenCalledWith([]);
  //   expect(setIsError).toHaveBeenCalledWith(true);
  // });

  // NEGATIVE SPEC
  it('[MOCKING]: render error properly', async () => {
    // prepare the mock error for the comp
    const error = 'Error occured';
    // Reject the Http req with the above error
    fetchApi.mockRejectedValue(error);
    // 3 Render the comp
    render(<ProductDetails />);
    // 4 Assert
    const errorMsg = await screen.findByText('Some Error Occured. Try again later');
    expect(errorMsg).toBeInTheDocument();
  });
});
