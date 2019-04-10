angular.module('match.controller', [])
.controller('MatchesCtrl', function($scope, $ionicTabsDelegate,   $ionicLoading , $stateParams, rawApi) {
  rawApi.all().then(function (resp) {
      $scope.matches = resp.data.sportItem.tournaments;
    });
  $ionicLoading.show({  template: '<ion-spinner icon="lines" class="spinner-assertive"></ion-spinner>' });

  rawApi.live().then(function (resp) {
        $scope.lives = resp.data.sportItem.tournaments;
        $ionicLoading.hide();
    });
  rawApi.tomorrow().then(function (resp) {
          $scope.tom = resp.data.sportItem.tournaments;
  });

    // rawApi.promise().then(function (resp) {
    //   // console.log(resp[0].data);
    //     $scope.tom = resp[1].data.sportItem.tournaments;
    //     $scope.matches = resp[0].data.sportItem.tournaments
    // });
})
