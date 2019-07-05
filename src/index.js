import _ from 'lodash';
import './index.less';
import helper from './helper';
import readonly from './index.ts';
import arrayReadonly from './arrayReadonly.ts';
import otherPropsCheck from './otherPropsCheck.ts';
import otherPropsCheck1 from './otherPropsCheck.1.ts';
import interfaceFunction from './interfaceFunction.ts';
import interfaceFunction1 from './interfaceFunction.1.ts';
import indextype from './indextype.ts';
import interfaceClass from './interfaceClass';
import interfaceClassStatic from './interfaceClassStatic';
import interfaceExtends from './interfaceExtends';
import classExtends from './classExtends';
import classExtends1 from './classExtends1';
import classPublic from './classPublic';
import classPrivate from './classPrivate';
import classCompatible from './classCompatible';

const btnList = [
  readonly,
  arrayReadonly,
  otherPropsCheck,
  otherPropsCheck1,
  interfaceFunction,
  interfaceFunction1,
  indextype,
  interfaceClass,
  interfaceClassStatic,
  interfaceExtends,
  classExtends,
  classExtends1,
  classPublic,
  classPrivate,
  classCompatible
];
const btnStyleList = [
  'button-3d',
  'button-action',
  'button-pill',
  // 'button-giant',
  'button-longshadow-right',
  'button-longshadow-left'
];

helper(btnList, btnStyleList);
