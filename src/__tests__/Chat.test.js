import React from 'react';
import { render } from '@testing-library/react';
import Chat from '../components/Chat/Chat';

it('renders correctly', () => {
  const tree = render.create(<Chat />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});