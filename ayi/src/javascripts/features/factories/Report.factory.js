Report.$inject = ['$resource', 'RESOURCE_ACTIONS', 'CONFIG'];

function Report($resource, RESOURCE_ACTIONS, CONFIG) {
    var _url = CONFIG.BASEURL + '/reports/:id';

    //_url = '/api/report.json';
    return $resource(
        _url,
        {
            id: '@id',
            uid: '@uid', storeid: '@storeid', type: '@type',
            page: '@page', pagesize: '@pagesize'
            //callback: 'JSON_CALLBACK'
        },
        RESOURCE_ACTIONS);
}


export default angular.module('factories.Report', ['ngResource'])
    .factory('Report', Report)
    .name;