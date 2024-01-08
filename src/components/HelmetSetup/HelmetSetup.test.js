import React from 'react';
import renderer from 'react-test-renderer'
import HelmetSetup from './HelmetSetup';

describe('HelmetSetup', () => {
  const props = {
    title: 'Test Title',
    href: 'https://example.com/favicon.ico',
    metaDesc: 'Test Description'
  };

  // testing helmet setup props
  it('renders correctly', () => {
    const tree = renderer
      .create(<HelmetSetup {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
