angular.module('leagues.controller', [])
  .controller('LeaguesCtrl',  function($scope, countryApi) {
     $scope.country = countryApi.all();
     console.log(countryApi.all());
  })
  .controller('LeagueAllCtrl',  function($scope,  $stateParams, $ionicLoading, $ionicPopup, leagueApi) {
    $scope.showInfo = function(s){
          $ionicPopup.alert({
           title: s.playerName,
           template: '<img style="width: 100%" src="'+s.photo+'">'
         });
      }
     leagueApi.get($stateParams.category,$stateParams.slug,$stateParams.id).then(function(response){

          $scope.league = response.data;
          var season = response.data.info.thisSeason;

          leagueApi.getRank(season).then(function (resp) {
            $ionicLoading.hide();
            $scope.rank = resp.data;
            console.log(resp.data);

          })
     });
  })
