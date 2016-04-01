
routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('dash', {
            url: '/dash',
            cache:false,
            absolute: true,
            template: require('./dash.html'),
            controller: 'dashController as dash'
        })

        .state('dash.report', {
            url: '/report',
            absolute: true,
            views: {
                'tab-all': {
                    template: require('../report/view.html')
                }
            }
        })

        .state('dash.report.list', {
            url: '/',
            cache:false,
            views: {
                'tab-report': {
                    template: require('../report/reports.html'),
                    controller: 'reportsController as reports'
                }
            }
        })
        .state('dash.report.add', {
            url: '/add',
            cache:false,
            views: {
                'tab-report': {
                    template: require('../report/reportadd.html'),
                    controller: 'reportAddController'
                }
            }
        })

        .state('dash.report.store', {
            url: '/store',
            cache:false,
            views: {
                'tab-report': {
                    template: require('../store/stores.html'),
                    controller: 'reportAddStoreController'
                }
            }
        })
        .state('dash.report.detail', {
            url: '/detail/:id',
            cache:false,
            views: {
                'tab-report': {
                    template: require('../report/reportadd.html'),
                    controller: 'reportController'
                }
            }
        })
        .state('dash.store', {
            url: '/store',
            absolute: true,
            views: {
                'tab-all': {
                    template: require('../store/view.html')
                }
            }
        })
        .state('dash.store.list', {
            url: '/',
            params:{
                type:'=type'
            },
            views: {
                'tab-store': {
                    template: require('../store/stores.html'),
                    controller: 'StoresController'
                }
            }
        })
        .state('dash.store.nav', {
            url: '/nav',
            views: {
                'tab-store': {
                    template: require('../store/storesnav.html'),
                    controller: 'StoresNavController'
                }
            }
        })
        .state('dash.setting', {
            url: '/setting',
            absolute: true,
            views: {
                'tab-all': {
                    template: require('../setting/view.html')
                }
            }
        })
        .state('dash.setting.info', {
            url: '/info',
            views: {
                'tab-setting': {
                    template: require('../setting/setinfo.html'),
                    controller: 'SettingInfoController'
                }
            }
        })
    ;
}
