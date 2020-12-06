import React from 'react';
import CategoryList from './CategoryList';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('CategoryList tests', () => {
    it('renders correctly', () => {
        const { container } = render(
            <BrowserRouter>
                <CategoryList />
            </BrowserRouter>
        );
        expect(container).toMatchSnapshot();
    });
});
