import { render, screen } from '@testing-library/react';
import { fetchApi } from '../../utils/fetchApi';
import ProductsPage from './ProductsPage';
import { HashRouter } from 'react-router-dom';

// setting up mock for fetchApi
// mocking the
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

  // NEGATIVE SPEC
  it('[MOCKING]: render error properly', async () => {
    const error = 'Error occured';
    fetchApi.mockRejectedValue(error);
    render(
      <HashRouter>
        <ProductsPage />
      </HashRouter>
    );
    // 4 Assert
    const errorMsg = await screen.findByText('Some Error Occured. Try again later');
    expect(errorMsg).toBeInTheDocument();
  });

  // testing for the presence of sort by text
  it('has sort by text', async () => {
    fetchApi.mockResolvedValue(mockUserList);
    render(
      <HashRouter>
        <ProductsPage />
      </HashRouter>
    );
    const sortBy = await screen.findByTestId('sortBy');
    expect(sortBy).toHaveTextContent('Sort By');
  });

  // testing for the presence of High To Low text text
  it('has High To Low text to be in the document', async () => {
    fetchApi.mockResolvedValue(mockUserList);
    render(
      <HashRouter>
        <ProductsPage />
      </HashRouter>
    );
    const sortBy = await screen.findByText(/High To Low/i);
    expect(sortBy).toBeTruthy();
  });

  // testing for the presence of  Low To High  text
  it('has  Low To High text to be in the document', async () => {
    fetchApi.mockResolvedValue(mockUserList);
    render(
      <HashRouter>
        <ProductsPage />
      </HashRouter>
    );
    const lowToHigh = await screen.findByText(/Low To High/i);
    expect(lowToHigh).toBeTruthy();
  });

  // testing for the presence of Categories text
  it('has Categories in the document', async () => {
    fetchApi.mockResolvedValue(mockUserList);
    render(
      <HashRouter>
        <ProductsPage />
      </HashRouter>
    );
    const sortBy = await screen.findByText(/Categories/i);
    expect(sortBy).toBeTruthy();
  });

  // testing for the presence of All text
  it('has All categories text in the document', async () => {
    fetchApi.mockResolvedValue(mockUserList);
    render(
      <HashRouter>
        <ProductsPage />
      </HashRouter>
    );
    const all = await screen.findByText(/All/i);
    expect(all).toBeTruthy();
  });

  // testing for the presence of Women text
  it('has Woment category text in the document', async () => {
    fetchApi.mockResolvedValue(mockUserList);
    render(
      <HashRouter>
        <ProductsPage />
      </HashRouter>
    );
    const womem = await screen.findByText(/Women/i);
    expect(womem).toBeTruthy();
  });

  // testing for the presence of Kids text
  it('has Woment Kids text in the document', async () => {
    fetchApi.mockResolvedValue(mockUserList);
    render(
      <HashRouter>
        <ProductsPage />
      </HashRouter>
    );
    const kids = await screen.findByText(/Kids/i);
    expect(kids).toBeTruthy();
  });
});
