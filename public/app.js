
var live = 'process.env.Api_URL';
angular.module('starter', ['ionic'])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $stateProvider
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html",
      controller: 'AppCtrl'
    })

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.charts', {
    url: '/charts',
    views: {
      'tab-charts': {
        templateUrl: 'templates/tab-charts.html',
        controller: 'ChartsCtrl'
      }
    }
  })

  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  });

$urlRouterProvider.otherwise('/tab/dash');  $ionicConfigProvider.platform.android.tabs.position('bottom');  $ionicConfigProvider.platform.android.navBar.alignTitle('center');
})

.controller('AppCtrl', function($scope) {})
.controller('DashCtrl', function($scope, rawApi) {
  rawApi.all().then(function (resp) {
      console.log(resp);
      $scope.matches = resp.data.sportItem.tournaments;
    });
})

.controller('ChartsCtrl', function($scope) {})
.controller('SettingsCtrl', function($scope) {})

//https://raw.githubusercontent.com/egohub/repo/master/livescore.json
.factory('rawApi', function($http){
  var url = 'https://raw.githubusercontent.com/egohub/repo/master/livescore.json';
  return {
    all:function () {
      return $http.get(live);
    },
    
    detail : function (id) {
      return $http.get('http://localhost:3000/leagues/'+id)
    }
  };
})

$scope.filterFunction = function(element) {
  return element.type==='inprogress' ;
};
