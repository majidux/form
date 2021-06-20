# A simple form component

##### Import form component and pass in an list array with this format

```javascript
import { Form } from "@components";

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

function Example() {
  const onSubmit = (data: any) => {
    alert(data);
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
