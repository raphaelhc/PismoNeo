import React from 'react';
import {cleanup, screen, render, fireEvent} from '@testing-library/react';
import Tabs from '../';

afterEach(cleanup);
const mock = [
    { value: '2022-03-09', label: '09/03/2022' },
    { value: '2022-03-10', label: '10/03/2022' },
    { value: '2022-03-11', label: '11/03/2022' },
    { value: '2022-03-12', label: '12/03/2022' },
    { value: '2022-03-13', label: '13/03/2022' },
    { value: '2022-03-14', label: '14/03/2022' },
    { value: '2022-03-15', label: '15/03/2022' },
    { value: '2022-03-16', label: '16/03/2022' }
]

  describe('Tabs tests', () => {
    it('should render all menu items', () => {
        const onSelect = jest.fn();
        const component = render(<Tabs data={mock} onSelect={onSelect} selectedDay="2022-03-09" />)
        mock.map(item => {
            return expect(screen.getByText(item.label)).toBeTruthy();   
        })
    });
});