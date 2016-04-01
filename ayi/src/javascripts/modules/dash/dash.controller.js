export default class dashController {
    constructor($scope, $ionicLoading, Report, Auth, Store, CONFIG) {
        var params = {
            uid: Auth.getLogInfo().uid,
            page: CONFIG.PAGE,
            pageSize: CONFIG.MAX
        };
        $scope.user=Auth.getLogInfo();
        $ionicLoading.show({
            template: 'Loading...'
        });
        Store.get(params, function (result) {
            console.log(result);
            if (result.code == '0') {
                CONFIG.Stores = result.data;
                //console.log(CONFIG.Stores);
            } else {

            }
            $ionicLoading.hide();
        });
        $scope.isCM = Auth.isCM();
        $scope.isCR = Auth.isCR();
    }

}




dashController.$inject = ['$scope', '$ionicLoading', 'Report', 'Auth', 'Store', 'CONFIG'];

