
routing.$inject = ['$urlRouterProvider', '$locationProvider'];

function routing($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/login');
}

stateChangeStart.$inject=['$rootScope','$state','Auth','LocalStorage'];

function stateChangeStart($rootScope, $state,Auth,local) {
    //, Auth
    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
        if(local.getObject('user'))
        {
            Auth.setLoggedIn(local.getObject('user'));

        }
        if (!toState.authenticate && !Auth.isLoggedIn()) {
            console.log('User isn’t authenticated');
            $state.transitionTo("login");
            event.preventDefault();
        }
    });
}

export default angular.module('config.router',[])
    .config(routing)
    .run(stateChangeStart)
    .name;
