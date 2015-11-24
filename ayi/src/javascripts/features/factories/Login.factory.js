Login.$inject = ['$resource', 'RESOURCE_ACTIONS', 'CONFIG'];

function Login($resource, RESOURCE_ACTIONS, CONFIG) {
    var _url = CONFIG.BASEURL + '/Login';
    return $resource(
        //'http://angularjs.org/greet.php',
        _url,
        {
            username: '@username',
            userpwd: '@userpwd'
            //callback: 'JSON_CALLBACK'
        },
        RESOURCE_ACTIONS);
}


export default angular.module('factories.Login', ['ngResource'])
    .factory('Login', Login)
    .name;