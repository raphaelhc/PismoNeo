import React from 'react';
import {cleanup, screen, render, fireEvent} from '@testing-library/react';
import AppBar from '../';
import { AppProvider } from 'containers/Main/AppContext'

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);
  describe('AppBar tests', () => {
    
    it('should render the name sent as prop', () => {
        const component = render(
            <AppProvider>
                <AppBar title="Test" />
            </AppProvider>
        )
        expect(screen.getByRole('heading')).toHaveTextContent('Test')
    });

    it('should change component color when selecting other view mode', () => {
        const component = render(
            <AppProvider>
                <AppBar title="Test" />
            </AppProvider>
        )
        expect(screen.getByRole('BarTopLevelElement')).toHaveStyle("background-color: rgb(25, 118, 210)")
        fireEvent.click(screen.getByRole('action'))
        expect(screen.getByRole('BarTopLevelElement')).toHaveStyle("background-color: rgb(18, 18, 18)")
    });
    
});