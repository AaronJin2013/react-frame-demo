Trade.$inject = ['$resource', 'RESOURCE_ACTIONS', 'CONFIG'];

function Trade($resource, RESOURCE_ACTIONS, CONFIG) {
    var _url = CONFIG.BASEURL + '/trade';
    //_url = '/api/report.json';
    return $resource(
        _url,
        {
            storeId: '@storeId',
            page: '@page', pagesize: '@pagesize',
            //callback: 'JSON_CALLBACK'
        },
        RESOURCE_ACTIONS);
}


export default angular.module('factories.Trade', ['ngResource'])
    .factory('Trade', Trade)
    .name;