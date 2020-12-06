import React from 'react';
import ProductItem from './ProductItem';
import { render } from '@testing-library/react';

import img from '../../images/books.jpg';
import { BrowserRouter } from 'react-router-dom';
const product = {
    slug: 1,
    imageUrl: img,
    title: 'book',
    postedTime: new Date('05 October 2011 14:48 UTC').toISOString(),
    price: 2.33,
};
describe('ProductItem tests', () => {
    it('renders correctly', () => {
        const { container } = render(
            <BrowserRouter>
                <ProductItem category="books" product={product} />
            </BrowserRouter>
        );
        expect(container).toMatchSnapshot();
    });
});
