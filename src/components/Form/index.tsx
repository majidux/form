import { useForm, yupResolver, Children } from '../../utils';
import './style.scss';
import { IFormInput, ListType } from './types';

export function Form(props: IFormInput) {
  const { onSubmit, list, schema } = props;
  const { register, handleSubmit, errors } = useForm(
    schema && {
      resolver: yupResolver(schema),
    }
  );

  const renderItems = Children.toArray(
    list?.map((item: ListType): JSX.Element => {
      const {
        name = '',
        type = 'text',
        value,
        placeholder = 'placeholder...',
        itemType = 'input',
        label,
      } = item;
      const formElements: any = {
        /** Here we can add another tag type, you can develop it easily */
        input: (
          <>
            {label && <label className='form-label'>{label}:</label>}
            <div className='form_element-wrapper d-flex dir-column'>
              <input
                {...{
                  name,
                  type,
                  placeholder,
                  ref: register,
                  ...(type === 'submit' && {
                    value,
                  }),
                }}
              />
              {errors[name] && (
                <span className='form_text-error'>{errors[name].message}</span>
              )}
            </div>
          </>
        ),
      };
      return <>{formElements[itemType]}</>;
    })
  );
  return (
    <form onSubmit={handleSubmit((e: any) => onSubmit(e))}>
      <section>{renderItems}</section>
    </form>
  );
}
