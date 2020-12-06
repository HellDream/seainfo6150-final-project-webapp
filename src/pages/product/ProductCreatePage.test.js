import React from 'react';
import ProductCreatePage from './ProductCreatePage';
import { render } from '@testing-library/react'

describe('ProductCreatePage tests', () => {
    it('renders correctly', () => {
        const { container } = render(<ProductCreatePage />);
        expect(container).toMatchSnapshot();
    });
});
  