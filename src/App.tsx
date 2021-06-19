import { Form, yup } from './utils';
import './style.scss';

function App() {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className='height-fit d-flex justify-content-center align-items-center'>
      <Form
        {...{
          onSubmit,
          schema,
          list,
        }}
      />
    </div>
  );
}

export default App;

const schema = yup.object().shape({
  userName: yup.string().required('Please enter your User name'),
  password: yup.string().required('Please enter your password'),
});

const list = [
  {
    name: 'userName',
    label: 'User Name',
  },
  {
    name: 'password',
    label: 'Password',
  },
  {
    value: 'Send',
    type: 'submit',
  },
];
