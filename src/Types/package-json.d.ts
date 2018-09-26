// from @stencil/core/dist/declarations
export interface PackageJson {
  name?: string;
  productName?: string;
  version?: string;
  main?: string;
  bin?: {
    [key: string]: string;
  };
  scripts?: {
    [key: string]: string;
  };
  bugs?: {
    url: string;
    [key: string]: string;
  };
  browser?: string;
  module?: string;
  'jsnext:main'?: string;
  unpkg?: string;
  collection?: string;
  types?: string;
  author?: string;
  homepage?: string;
  files?: string[];
  ['dist-tags']: {
    latest: string;
  };
  dependencies?: {
    [moduleId: string]: string;
  };
  devDependencies?: {
    [moduleId: string]: string;
  };
  lazyDependencies?: {
    [moduleId: string]: string;
  };
  repository?: {
    type?: string;
    url?: string;
  };
  
  [any: string]: any;
}
