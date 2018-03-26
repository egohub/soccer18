
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = yyyy + '-' + mm + '-' + dd;



var live = 'process.env.Api_URL';
console.log(live);
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
  rawApi.today().then(function (resp) {
      console.log(resp);
      $scope.matches = resp.data.sportItem.tournaments;
    });
  rawApi.all().then(function (resp) {
      console.log(resp);
      $scope.lives = resp.data.sportItem.tournaments;
    });
})

.controller('ChartsCtrl', function($scope) {})
.controller('SettingsCtrl', function($scope) {})

//https://raw.githubusercontent.com/egohub/repo/master/livescore.json
.factory('rawApi', function($http){
  var url = 'https://soccer18.herokuapp.com/live';
  return {
    all:function () {
      return $http.get(live);
    },
    today: function(){
       return $http.get('https://www.sofascore.com/football//'+today+'/json');
    },
    detail : function (id) {
      return $http.get('https://soccer18.herokuapp.com/event/'+id)
    }
  };
})

$scope.filterFunction = function(element) {
  return element.type==='inprogress' ;
};
