import React from 'react';
import ContactUsPage from './ContactUsPage';
import { render } from '@testing-library/react'

describe('ContactUsPage tests', () => {
    it('renders correctly', () => {
        const { container } = render(<ContactUsPage />);
        expect(container).toMatchSnapshot();
    });
});
  