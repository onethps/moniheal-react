import {Jss} from 'jss';
import {jss} from 'react-jss';
import cache from 'jss-plugin-cache';
import nested from 'jss-plugin-nested';
import vendorPrefixer from 'jss-plugin-vendor-prefixer';

export const setupJss = (): Jss => {
  jss
    .use(cache())
    .use(nested())
    .use(vendorPrefixer())
  ;

  return jss;
};