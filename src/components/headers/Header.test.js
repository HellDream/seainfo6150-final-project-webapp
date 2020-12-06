import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react'

describe('Header tests', () => {
    it('renders correctly', () => {
        const { container } = render(<Header />);
        expect(container).toMatchSnapshot();
    });
});
  