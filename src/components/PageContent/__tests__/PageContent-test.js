import React from 'react';
import {cleanup, screen, render, fireEvent} from '@testing-library/react';
import Component from '../';

afterEach(cleanup);
  
  describe('PageContent tests', () => {
    it('should render Children', () => {
        const onClose = jest.fn();
        const component = render(
            <Component pageName="teste">
                <div role='cardText'>card text</div>
            </Component>
        )
        expect(screen.getByRole('cardText')).toBeTruthy();
    });
    
});