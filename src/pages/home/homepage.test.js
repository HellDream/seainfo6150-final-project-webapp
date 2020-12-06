import React from 'react';
import Home from './homepage';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Home tests', () => {
    it('renders correctly', () => {
        const { container } = render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
        expect(container).toMatchSnapshot();
    });
});
