/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable security/detect-object-injection */

export const removeUndefinedKeys = (object: any) => {
  return Object.keys(object).reduce((acc, key) => {
    if ((object as any)[key] !== undefined) {
      (acc as any)[key] = (object as any)[key];
    }
    return acc;
  }, {});
};
