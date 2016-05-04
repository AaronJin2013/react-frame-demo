export function Routes() {
    return  {
        path: 'shop',
        //component:require.ensure([], function (require) {
        //        return require('./shop')['View'];
        //
        //},'shop')
        getIndexRoute(store, callback) {
            require.ensure([], function (require) {
                callback(null, require('./view.tsx')['Index']);
            }, 'shop')
        },
        getComponents(store, callback) {
            require.ensure([], function (require) {
                callback(null, require('./view.tsx')['View']);
            }, 'shop')
        },
        getChildRoutes(location, callback) {
            require.ensure([], function (require) {
                callback(null, [
                    require('./view')['List'],
                    require('./view')['Detail'],
                    require('./goods')['Routes'](),
                ])
            },'shop')
        },
    };
}