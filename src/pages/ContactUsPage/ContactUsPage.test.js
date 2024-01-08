import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactUsPage from './ContactUsPage';
import { fetchApi } from '../../utils/fetchApi';

jest.mock('../../utils/fetchApi', () => ({
  fetchApi: jest.fn()
}));

describe('ContactUsPage', () => {
  beforeEach(() => {
    // reset the mock implementation before each test
    jest.resetAllMocks();
  });
  it('renders error message when there is an error fetching data', async () => {
    // set the fetchApi mock implementation to return a Promise that rejects with an error
    fetchApi.mockRejectedValue(new Error('Some error'));
    // render the ContactUsPage component
    render(<ContactUsPage />);
    // expect to see the error message
    expect(await screen.findByText('Some Error Occured. Try again later')).toBeInTheDocument();
  });

  it('renders contact us data when fetched successfully', async () => {
    // set the fetchApi mock implementation to return a Promise that resolves with some data
    fetchApi.mockResolvedValue({
      address: '123 Main St.',
      description: 'Call us for help.',
      phone: ['123-456-7890', '098-765-4321'],
      email: 'info@example.com'
    });
    // render the ContactUsPage component
    render(<ContactUsPage />);
    // expect to see the contact us data
    expect(await screen.findByTestId('contact-us')).toBeInTheDocument();
    expect(screen.getByTestId('address')).toHaveTextContent('123 Main St.');
    expect(screen.getByTestId('description')).toHaveTextContent('Call us for help.');
    expect(screen.getByText('123-456-7890, 098-765-4321')).toBeInTheDocument();
    expect(screen.getByText('info@example.com')).toBeInTheDocument();
  });
});
