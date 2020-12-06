import React from 'react';
import CategoryItem from './CategoryItem';
import { render } from '@testing-library/react';

import img from '../../images/books.jpg';
import { BrowserRouter } from 'react-router-dom';
const category = {
    slug: 1,
    imageURI: img,
    title: 'books',
};
describe('CategoryItem tests', () => {
    it('renders correctly', () => {
        const { container } = render(
            <BrowserRouter>
                <CategoryItem category={category} />
            </BrowserRouter>
        );
        expect(container).toMatchSnapshot();
    });
});
