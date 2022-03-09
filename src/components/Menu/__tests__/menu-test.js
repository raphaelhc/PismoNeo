import React from 'react';
import {cleanup, screen, render, fireEvent} from '@testing-library/react';
import Menu from '../';
import { menu } from 'common/menu'

afterEach(cleanup);
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUsedNavigate,
 }));

  describe('Menu tests', () => {
    it('should render all menu items', () => {
        const component = render(<Menu />)
        fireEvent.click(screen.getByRole('menuButton'))
        menu.map(item => {
            return expect(screen.getByText(item.label)).toBeTruthy();    
        })
    });

    it('should call function navigate when click on menu item sending the correct route', () => {
        const component = render(<Menu />)
        fireEvent.click(screen.getByRole('menuButton'))
        fireEvent.click(screen.getByText(menu[0].label))
        expect(mockedUsedNavigate).toHaveBeenLastCalledWith(menu[0].value)

        fireEvent.click(screen.getByText(menu[1].label))
        expect(mockedUsedNavigate).toHaveBeenLastCalledWith(menu[1].value)
    });
});