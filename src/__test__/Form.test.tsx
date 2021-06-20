import { Form } from '../utils';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

test('renders correctly', () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const { getByTestId, asFragment } = render(<Form {...{ onSubmit, list }} />);
  expect(getByTestId('form')).toHaveTextContent('Send');
  expect(asFragment(<Form {...{ onSubmit, list }} />)).toMatchSnapshot();
});

const list = [
  {
    name: 'userName',
    require: 'Please enter your User name',
  },
  {
    value: 'Send',
    type: 'submit',
    itemType: 'button',
  },
];
