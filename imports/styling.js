import { create as createJss } from 'jss';
import { create as createInjectSheet } from 'react-jss';
import camelCase from 'jss-camel-case';
import vendorPrefixer from 'jss-vendor-prefixer';
import defaultUnit from 'jss-default-unit';

const jss = createJss();
jss.use(camelCase());
jss.use(defaultUnit());
jss.use(vendorPrefixer());

export const injectSheet = createInjectSheet(jss);
