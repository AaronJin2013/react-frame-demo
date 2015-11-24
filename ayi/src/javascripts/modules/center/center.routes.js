
routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('center', {
            url: '/center',
            cache:false,
            absolute: true,
            template: require('./center.html'),
            controller: 'centerController as center'
        })

        //.state('dash.report', {
        //    url: '/report',
        //    absolute: true,
        //    views: {
        //        'tab-all': {
        //            template: require('../report/view.html')
        //        }
        //    }
        //})
    ;
}
