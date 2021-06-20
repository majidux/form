import { yup } from './';

/** This function doesn't care about your given data type as long as its an array */
type ArrayToObjectType<GenericType> = GenericType & unknown[];
/** ArrayToObject function takes an array and turns it to a key-value pair of an object until it hits the end of array */
export function handleArrayToObject<GenericType>(
  data: ArrayToObjectType<GenericType>
): unknown {
  return data?.reduce((output: any, current: any) => ({
    ...output,
    ...current,
  }));
}

type YupShapeType = any;
/** handleYupShape function takes an object which was created before ArrayToObjectType */
export function handleYupShape(data: YupShapeType): any {
  return yup.object().shape({ ...data });
}

type ExtractorType<GenericType> = GenericType & {
  list: GenericType[];
  basedOn: keyof GenericType;
  keyName: keyof GenericType;
};

export function handleYupExtractor<Type>({
  list,
  basedOn,
  keyName,
}: ExtractorType<Type>): unknown[] {
  return list?.map(
    (item: Type) =>
      item[basedOn] && {
        [item[keyName] as any]: yup.string().required(item[basedOn] as any),
      }
  );
}

type FilterFalsyType = { list: unknown[] };
/** handleFilterFalsy function takes an array and delete all falsy parameters and returns a new array */
export function handleFilterFalsy({ list }: FilterFalsyType): unknown[] {
  return list?.filter(Boolean);
}
