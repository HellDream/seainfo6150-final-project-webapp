import React from 'react';
import Dialog from './Dialog';
import { render } from '@testing-library/react'

describe('CategoryItem tests', () => {
    it('renders correctly', () => {
        const { container } = render(<Dialog message="message" open={true} onClose={(open)=>{}} ok={()=>{}} />);
        expect(container).toMatchSnapshot();
    });
});
  