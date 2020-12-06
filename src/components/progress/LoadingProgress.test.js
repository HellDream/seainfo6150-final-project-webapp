import React from 'react';
import LoadingProgress from './LoadingProgress';
import { render } from '@testing-library/react'

describe('LoadingProgress tests', () => {
    it('renders correctly', () => {
        const { container } = render(<LoadingProgress />);
        expect(container).toMatchSnapshot();
    });
});
  