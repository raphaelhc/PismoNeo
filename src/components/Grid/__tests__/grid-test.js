import React from 'react';
import {cleanup, screen, render, fireEvent} from '@testing-library/react';
import Grid from '../';

afterEach(cleanup);

  describe('Grid tests', () => {
    it('should render Children', () => {
        const component = render(
            <Grid actionButtonLabel="teste">
                <div role='cardText'>card text</div>
            </Grid>
        )
        expect(screen.getByRole('cardText')).toBeTruthy();
    });

    it('renders correctly', () => {
        const component = render(
            <Grid actionButtonLabel="teste">
                <div role='cardText'>card text</div>
            </Grid>
        );
        expect(component).toMatchSnapshot();
      });
    
});