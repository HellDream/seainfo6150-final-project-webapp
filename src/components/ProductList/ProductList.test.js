import React from 'react';
import ProductList from './ProductList';
import { render } from '@testing-library/react';

import img from '../../images/books.jpg';
import { BrowserRouter } from 'react-router-dom';
const products = [
    {
        slug: 1,
        imageUrl: img,
        title: 'book',
        price: 2.33,
    },
];
describe('ProductList tests', () => {
    it('renders correctly', () => {
        const { container } = render(
            <BrowserRouter>
                <ProductList products={products} categoryTitle="testTitle" />
            </BrowserRouter>
        );
        expect(container).toMatchSnapshot();
    });
});
