import React from 'react';
import ProductCreatePage from './ProductCreatePage';
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';

describe('ProductCreatePage tests', () => {
    it('renders correctly', () => {
        const { container } = render(<BrowserRouter><ProductCreatePage /></BrowserRouter>);
        expect(container).toMatchSnapshot();
    });
});
  