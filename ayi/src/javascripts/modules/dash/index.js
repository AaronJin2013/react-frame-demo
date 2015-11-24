
import routes from './dash.routes';
import dashController from './dash.controller';

export default angular.module('modules.dash', [])
    .config(routes)
    .controller('dashController', dashController)
    .name;
