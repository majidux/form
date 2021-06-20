import { Form, ListType } from './utils';

export function Example() {
  const onSubmit = (data: any) => {
    alert(`Username is: ${data.userName} and password is: ${data.password}`);
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

/** Just play with this array to create your form :) / always give the list "ListType[]" type */
const list: ListType[] = [
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
