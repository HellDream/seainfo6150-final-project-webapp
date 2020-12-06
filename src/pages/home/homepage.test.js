import React from 'react';
import Home from './homepage';
import { render } from '@testing-library/react'

describe('Home tests', () => {
    it('renders correctly', () => {
        const { container } = render(<Home />);
        expect(container).toMatchSnapshot();
    });
});
  