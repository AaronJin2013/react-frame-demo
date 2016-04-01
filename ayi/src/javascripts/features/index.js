
import interceptors from './interceptors/index.js';
import values from './values/index.js';
import filters from './filters/index.js';
import config from './config/index.js';
import factories from './factories/index.js';


export default angular.module('app.features', [interceptors,values,filters,factories,config])
    .name;