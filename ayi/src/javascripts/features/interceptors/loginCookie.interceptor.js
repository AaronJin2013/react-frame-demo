
loginCookie.$inject = ['$httpProvider'];

function loginCookie($httpProvider) {
    $httpProvider.interceptors.push('loginCookieFactory');
}


loginCookieFactory.$inject = ['$log'];

function loginCookieFactory($log) {
    $log.debug('loginCookie Interceptor');
    var loginCookie = {};
    return loginCookie;
}


export default angular.module('interceptors.loginCookie', ['ngResource'])
    .factory('loginCookieFactory', loginCookieFactory)
    .config(loginCookie)
    .name;