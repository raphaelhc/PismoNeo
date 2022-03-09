import React from 'react';
import {cleanup, screen, render, fireEvent} from '@testing-library/react';
import Card from '../';

afterEach(cleanup);

  describe('Card tests', () => {
    
    it('should render the name sent as prop', () => {
        const component = render(
            <Card actionButtonLabel="teste">
                <div role='cardText'>card text</div>
            </Card>
        )
        expect(screen.getByRole('cardActionButton')).toHaveTextContent('teste')
    });

    it('should render the name sent as prop', () => {
        const handleClick = jest.fn()
        const component = render(
            <Card actionButtonLabel="teste" onSelect={handleClick}>
                <div>card text</div>
            </Card>
        )
        fireEvent.click(screen.getByRole('cardActionButton'))
        expect(handleClick).toHaveBeenCalledTimes(1)
    });

    it('should render Children', () => {
        const component = render(
            <Card actionButtonLabel="teste">
                <div role='cardText'>card text</div>
            </Card>
        )
        expect(screen.getByRole('cardText')).toBeTruthy();
    });
    
});