import React from 'react';
import {cleanup, screen, render} from '@testing-library/react';
import Component from '../';

afterEach(cleanup);
  
  describe('Placeholder tests', () => {
    it('should render the name sent as prop', () => {
        const component = render(
            <Component text="teste">
                <div role='cardText'>card text</div>
            </Component>
        )
        expect(screen.getByText(/teste/i)).toBeTruthy()
    });
});