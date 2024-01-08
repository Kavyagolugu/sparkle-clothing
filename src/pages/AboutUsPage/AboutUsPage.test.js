import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import AboutUsPage from './AboutUsPage';

describe('AboutUsPage', () => {
  it('has history nav links', () => {
    render(
      <HashRouter>
        <AboutUsPage />
      </HashRouter>
    );
    const taglineLink = screen.getByRole('link', { name: /tagline/i });
    expect(taglineLink).toBeInTheDocument();
  });

  // testing the navlinks of history
  it('has tagline  nav links', () => {
    render(
      <HashRouter>
        <AboutUsPage />
      </HashRouter>
    );
    const historyLink = screen.getByRole('link', { name: /history/i });
    expect(historyLink).toBeInTheDocument();
  });
});
