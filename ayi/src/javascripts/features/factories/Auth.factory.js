Auth.$inject = ['$q', '$injector'];

function Auth($q, $injector) {
    var auth = {
        isLoggedIn: false,
        info: null
    };
    var Auth = {
        isLoggedIn: function () {
            return auth.isLoggedIn;
            //return true;
        },
        setLoggedIn: function (result) {
            console.log('setlog');
            console.log(result);
            auth.isLoggedIn = true;
            auth.info = result;
        },
        setLoggedOut: function (result) {
            auth.isLoggedIn = false;
        },
        getLogInfo: function () {
            return auth.info;
        }
    };
    return Auth;
}


export default angular.module('factories.Auth', ['ngResource'])
    .factory('Auth', Auth)
    .name;