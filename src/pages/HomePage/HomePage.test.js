
import { render, screen } from '@testing-library/react';
import { fetchApi } from '../../utils/fetchApi';
import HomePage from './HomePage';
import { HashRouter } from 'react-router-dom';

// setting up mock for fetchApi
jest.mock('../../utils/fetchApi');
describe('HomePage', () => {
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

  it('[MOCKING]: fetches users via rest api call', async () => {
    fetchApi.mockResolvedValue(mockUserList);
    render(
      <HashRouter>
        <HomePage />
      </HashRouter>
    );

    const nameElement = await screen.findByText('kavya');
    expect(nameElement).toBeInTheDocument();
    const description = await screen.findByText('kavya');
    expect(description).toBeInTheDocument();
  });

  // NEGATIVE SPEC
  it('[MOCKING]: render error properly', async () => {
    const error = 'Error occured';
    fetchApi.mockRejectedValue(error);
    render(
      <HashRouter>
        <HomePage />
      </HashRouter>
    );

    const errorMsg = await screen.findByText('Some Error Occured. Try again later');
    expect(errorMsg).toBeInTheDocument();
  });

  // testing for the presence class
  it('has carousel with the class', async () => {
    fetchApi.mockResolvedValue(mockUserList);
    render(
      <HashRouter>
        <HomePage />
      </HashRouter>
    );
    const img = await screen.findByTestId('carouselFetch');
    expect(img).toHaveClass('row carousel carousel-dark slide');
  });

  // testing for the presence of PREVIOUS text
  it('has the PREVIOUS text in the document', async () => {
    fetchApi.mockResolvedValue(mockUserList);
    render(
      <HashRouter>
        <HomePage />
      </HashRouter>
    );
    const previousText = await screen.findByText(/Previous/i);
    expect(previousText).toBeTruthy();
  });

  // testing for the presence of Next text
  it('has the NEXT text in the document', async () => {
    fetchApi.mockResolvedValue(mockUserList);
    render(
      <HashRouter>
        <HomePage />
      </HashRouter>
    );
    const nextText = await screen.findByText(/Next/i);
    expect(nextText).toBeTruthy();
  });

  // testing for the FREE SHIPPING RETURN text
  it('has the FREE SHIPPING RETURN text in the document', async () => {
    fetchApi.mockResolvedValue(mockUserList);
    render(
      <HashRouter>
        <HomePage />
      </HashRouter>
    );
    const shipping = await screen.findByText(/FREE SHIPPING RETURN/i);
    expect(shipping).toBeTruthy();
  });

  // testing for the Reach Us out at anytime text
  it('has the Reach Us out at anytime text in the document', async () => {
    fetchApi.mockResolvedValue(mockUserList);
    render(
      <HashRouter>
        <HomePage />
      </HashRouter>
    );
    const reachUsText = await screen.findByText(/Reach Us out at anytime/i);
    expect(reachUsText).toBeTruthy();
  });
});
