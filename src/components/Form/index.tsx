/** This is an uncontrolled form component */
import {
  useForm,
  yupResolver,
  Children,
  handleArrayToObject,
  handleYupShape,
  handleYupExtractor,
  handleFilterFalsy,
} from '../../utils';
import './style.scss';
import { IFormInput, ListType } from './types';

export function Form(props: IFormInput) {
  const { onSubmit, list = [], defaultValues } = props;
  const extractedRequiredItem = handleYupExtractor<ListType>({
    list,
    keyName: 'name',
    basedOn: 'require',
  });

  const schema = handleYupShape(
    handleArrayToObject<ListType>(
      handleFilterFalsy({ list: extractedRequiredItem })
    )
  );

  const { register, handleSubmit, errors, reset } = useForm(
    schema && {
      defaultValues,
      resolver: yupResolver(schema),
    }
  );

  const handleSubmitForm = (data: any): void => {
    onSubmit(data);
    reset();
  };

  const renderItems = Children.toArray(
    list?.map((item: ListType): JSX.Element => {
      const {
        name = '',
        type = 'text',
        value,
        placeholder = 'placeholder...',
        itemType = 'input',
        label,
        className = '',
      } = item;

      const formElements = {
        /** Here we can add another tag type, you can develop it easily */
        input: (
          <section
            className={`form_element-wrapper d-flex dir-column ${className}`}
          >
            {label && <label className='form-label'>{label}:</label>}
            <input
              {...{
                type,
                placeholder,
                ref: register,
                ...(type === 'submit' && {
                  value,
                }),
                name,
              }}
            />
            {errors[name] && (
              <span className='form_text-error'>{errors[name].message}</span>
            )}
          </section>
        ),
        button: <button className='form-button'>{value}</button>,
      };
      return <>{formElements[itemType]}</>;
    })
  );
  return (
    <form
      data-testid='form'
      className='form_parent'
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      {renderItems}
    </form>
  );
}
