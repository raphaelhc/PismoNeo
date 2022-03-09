import React from 'react';
import {cleanup, screen, render, fireEvent} from '@testing-library/react';
import Menu from '../';

afterEach(cleanup);
  
  describe('Modal tests', () => {
    it('should not render modal component when receiving open prop with value false', () => {
        const onClose = jest.fn();
        const { queryByTestId } = render(
            <Menu open={false} title="teste" onClose={onClose}>
                <div>children</div>
            </Menu>
        )
        expect(queryByTestId(/modalDialog/i)).toBeNull();
    });
    it('should render the modal component when receiving the open prop with value true', () => {
        const onClose = jest.fn();
        const { queryByTestId } = render(
            <Menu open={true} title="teste" onClose={onClose}>
                <div>children</div>
            </Menu>
        )
        expect(queryByTestId(/modalDialog/i)).toBeTruthy();
    });

    it('should render Children', () => {
        const onClose = jest.fn();
        const component = render(
            <Menu open={true} title="teste" onClose={onClose}>
                <div role='cardText'>card text</div>
            </Menu>
        )
        expect(screen.getByRole('cardText')).toBeTruthy();
    });
    
});