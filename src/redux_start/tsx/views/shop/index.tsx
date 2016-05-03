

export const Routes = {
    path: 'shop',
    //component:require.ensure([], function (require) {
    //        callback(null, require('./shop'))
    //},'shop').View
    getComponents(store, callback) {
        require.ensure([], function (require) {
            callback(null, require('./compent.tsx'))
        }, 'shop')
    }
};