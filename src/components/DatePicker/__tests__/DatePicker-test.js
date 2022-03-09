import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MinMaxDateRangePicker from '../'

beforeEach(() => {
   Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query) => ({
      media: query,
      matches: query === '(pointer: fine)',
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }),
  });
});

afterEach(() => {
  delete window.matchMedia;
});

it('should be possible to set a start and checkout and call the function sent as prop', async () => {
  const handleClick = jest.fn()
  render(<MinMaxDateRangePicker filterValue={[null, null]} setfilterValue={handleClick} />);

  const startDateInput = await screen.findByRole('textbox', { name: /Check-in/i });
  const endDateInput = screen.getByRole('textbox', { name: /Check-out/i });

  userEvent.clear(startDateInput);
  await userEvent.type(startDateInput, '06-01-2020', { delay: 1 });
  expect(handleClick).toHaveBeenCalled()

  userEvent.clear(endDateInput);
  await userEvent.type(endDateInput, '09-01-2020', { delay: 1 });

  expect(handleClick).toHaveBeenCalled()

  expect(screen.getByRole('textbox', { name: /Check-in/i })).toHaveValue('06/01/2020');
  expect(screen.getByRole('textbox', { name: /Check-out/i })).toHaveValue('09/01/2020');
});