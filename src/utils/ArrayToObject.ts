export function handleArrayToObject(data: any[]): any {
  return data.reduce((output: any, current: any) => ({
    ...output,
    ...current,
  }));
}
