import React from 'react';
import Footer from './Footer';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Footer tests', () => {
    it('renders correctly', () => {
        const { container } = render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );
        expect(container).toMatchSnapshot();
    });
});
