import React from 'react';
import Error from './Error';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
describe('Error tests', () => {
    it('renders correctly', () => {
        const { container } = render(<BrowserRouter><Error /></BrowserRouter>);
        expect(container).toMatchSnapshot();
    });
});
  