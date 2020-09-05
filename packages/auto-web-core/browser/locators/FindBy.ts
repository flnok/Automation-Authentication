export const FindByV2 = (locator: string) => {
  let el: any;
  return (obj: any, name: string) => {
    Object.defineProperty(obj, name, {
      get(): any {
        return (el = el || $(locator));
      },
    });
  };
};
