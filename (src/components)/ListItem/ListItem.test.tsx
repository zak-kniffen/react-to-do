import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListItem from './ListItem';

describe('<ListItem />', () => {
  test('it should mount', () => {
    render(<ListItem />);
    
    const listItem = screen.getByTestId('ListItem');

    expect(listItem).toBeInTheDocument();
  });
});