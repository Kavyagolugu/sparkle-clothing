import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import GetInTouchPage from './GetInTouchPage';
import { HashRouter } from 'react-router-dom';

describe('GetInTou', () => {
  it('should render the form correctly', () => {
    render(<GetInTouchPage />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument();
  });

  // testing name email message and submit button
  it('has proper contact', () => {
    render(<GetInTouchPage />);
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const queryInput = screen.getByLabelText('Message');
    const submitBtn = screen.getByTestId('submitBtn');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(queryInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();

    expect(nameInput).toHaveAttribute('type', 'text');
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(submitBtn).toHaveAttribute('type', 'submit');
  });
  // testing for the form submit
  it('should submit the form correctly', () => {
    render(<GetInTouchPage />);
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Message');
    const submitButton = screen.getByRole('button', { name: 'Send Message' });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });
    fireEvent.click(submitButton);

    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(messageInput.value).toBe('');
  });

  // testing for the saved sucessfull message
  it('has Save Successfully Text', () => {
    render(
      <HashRouter>
        <GetInTouchPage />
      </HashRouter>
    );
    const saved = screen.findByText(/Saved Successfully/i);
    expect(saved).toBeTruthy();
  });

  // testing for the negative spec
  it('has Some Error Occurred. Try again Later! Text', () => {
    render(
      <HashRouter>
        <GetInTouchPage />
      </HashRouter>
    );
    const errorText = screen.findByText(/Some Error Occurred. Try again Later!/i);
    expect(errorText).toBeTruthy();
  });
});
