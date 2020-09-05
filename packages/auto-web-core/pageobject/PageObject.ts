interface PageObjectCfg {
  url: string;
}

export const PageObjectHolder: {
  [name: string]: { cfg: PageObjectCfg; page: FunctionConstructor };
} = {};

const PageObject = (cfg: PageObjectCfg) => {
  return (PageClazz: any) => {
    // console.log("PageClazz", PageClazz);
    PageClazz.prototype.url = cfg.url;
    const pageName = PageClazz.name.replace('Page', '');
    PageObjectHolder[pageName] = {
      cfg,
      page: PageClazz,
    };
  };
};

export default PageObject;
