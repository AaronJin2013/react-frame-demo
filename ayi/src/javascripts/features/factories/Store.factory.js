Store.$inject = ['$resource', 'RESOURCE_ACTIONS', 'CONFIG'];

function Store($resource, RESOURCE_ACTIONS, CONFIG) {
    var _url = CONFIG.BASEURL + '/stores';
    //_url = '/api/report.json';
    return $resource(
        _url,
        {
            uid: '@uid',
            page: '@page', pagesize: '@pagesize'
            //callback: 'JSON_CALLBACK'
        },
        RESOURCE_ACTIONS);
}


export default angular.module('factories.Store', ['ngResource'])
    .factory('Store', Store)
    .name;