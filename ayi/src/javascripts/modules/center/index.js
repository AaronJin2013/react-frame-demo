
import routes from './center.routes.js';
import centerController from './center.controller.js';

export default angular.module('modules.center', [])
    .config(routes)
    .controller('centerController', centerController)
    .name;
