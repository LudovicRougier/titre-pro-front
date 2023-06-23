/* eslint-disable security/detect-object-injection */
export function removeDuplicates<T>(arr: T[], identifier: keyof T): T[] {
  const uniqueEntities: { [key: string]: boolean } = {};

  return arr.filter((entity) => {
    const key = String(entity[identifier]);
    const isDuplicate = uniqueEntities[key];
    uniqueEntities[key] = true;
    return !isDuplicate;
  });
}
