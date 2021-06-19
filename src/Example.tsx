import { Form } from './utils';

export function Example() {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form
      {...{
        onSubmit,
        list,
      }}
    />
  );
}

/** Just play with this array to create your form :) */
const list = [
  {
    name: 'userName',
    label: 'User Name',
    placeholder: 'username...',
    require: 'Please enter your User name',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    require: 'Please enter your password',
  },
  {
    value: 'Send',
    type: 'submit',
    itemType: 'button',
  },
];
