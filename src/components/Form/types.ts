export interface IFormInput {
  onSubmit: (...event: any) => void;
  list?: ListType[] | any[];
  defaultValues?: Record<string, any>;
}

export interface ListType {
  /** Item type defines our tag type, we can easily add new feature like date picker by adding new type such as 'date' */
  itemType?: 'input' | 'button';
  type?: 'text' | 'password' | 'submit' | any;
  name?: string;
  value?: string | number;
  placeholder?: string;
  label?: string;
  className?: string;
  require?: string;
}
