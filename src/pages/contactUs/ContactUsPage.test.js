import React from 'react';
import ContactUsPage from './ContactUsPage';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('ContactUsPage tests', () => {
    it('renders correctly', () => {
        const { container } = render(
            <BrowserRouter>
                <ContactUsPage />
            </BrowserRouter>
        );
        expect(container).toMatchSnapshot();
    });
});
