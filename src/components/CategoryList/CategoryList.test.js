import React from 'react';
import CategoryList from './CategoryList';
import { render } from '@testing-library/react'

describe('CategoryList tests', () => {
    it('renders correctly', () => {
        const { container } = render(<CategoryList />);
        expect(container).toMatchSnapshot();
    });
});
