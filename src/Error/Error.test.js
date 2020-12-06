import React from 'react';
import Error from './Error';
import { render } from '@testing-library/react';
describe('Error tests', () => {
    it('renders correctly', () => {
        const { container } = render(<Error />);
        expect(container).toMatchSnapshot();
    });
});
  