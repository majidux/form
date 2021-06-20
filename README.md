# A simple form component

##### Import form component and pass in an array list with this format

```javascript
import { Form, ListType } from "@components";

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

function Example() {
  const onSubmit = (arg) => {
    alert(arg);
  };

  return (
    <Form
      {...{
        onSubmit,
        list,
      }}
    />
  );
};
```
