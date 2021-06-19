export interface IFormInput {
  onSubmit: (...event: any) => void;
  list?: any;
  schema?: any;
}

export interface ListType {
  /** Item type defines our tag type, we can easily add new feature like date picker by adding new type such as 'date' */
  itemType?: 'input';
  type?: 'text' | 'password' | 'submit' | any;
  name: string;
  value?: string | number;
  placeholder?: string;
  label?: string;
  className?: string;
  require?: any;
}
