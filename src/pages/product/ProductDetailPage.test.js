import React from 'react';
import ProductDetailPage from './ProductDetailPage';
import { render } from '@testing-library/react';

import img from '../../images/books.jpg';
import { BrowserRouter } from 'react-router-dom';
const product = {
    slug: 1,
    imageUrl: img,
    title: 'book',
    postedTime: new Date('05 October 2011 14:48 UTC').toISOString(),
    price: 2.33,
    description: 'description',
};
describe('CategoryItem tests', () => {
    it('renders correctly', () => {
        const { container } = render(
            <BrowserRouter>
                <ProductDetailPage categoryTitle="books" product={product} />
            </BrowserRouter>
        );
        expect(container).toMatchSnapshot();
    });
});
