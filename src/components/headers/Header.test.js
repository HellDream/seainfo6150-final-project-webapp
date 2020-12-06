import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Header tests', () => {
    it('renders correctly', () => {
        const { container } = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        expect(container).toMatchSnapshot();
    });
});
