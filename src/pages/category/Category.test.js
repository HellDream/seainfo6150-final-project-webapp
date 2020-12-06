import React from 'react';
import Category from './Category';
import { render } from '@testing-library/react'

import img from '../../images/books.jpg';
const category = {
    slug: 1,
    imageURI: img,
    title: 'books',
};
describe('CategoryItem tests', () => {
    it('renders correctly', () => {
        const { container } = render(<Category categoryTitle="books" />);
        expect(container).toMatchSnapshot();
    });
});
  