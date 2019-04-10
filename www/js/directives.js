angular.module('starter.directives', [])

.directive('hideTabs', function() {
  return {
    restrict: 'A',
    controller: function($scope, $ionicTabsDelegate) {
      $scope.$on('$ionicView.beforeEnter', function() {
        $ionicTabsDelegate.showBar(false);
      });
      $scope.$on('$ionicView.beforeLeave', function() {
        $ionicTabsDelegate.showBar(true);
      })
    }
  }
})

.directive('matchInfo', function () {
   return{
     restrict: 'E',
     templateUrl: 'templates/matches/match-info.html'
   }
})
