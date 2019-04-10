// Ionic Starter App
angular.module('starter', ['ionic', 'starter.controllers', 'match.controller', 'leagues.controller' ,'starter.services', 'country.services', 'video.services', 'starter.directives', 'league.services' ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function($ionicSideMenuDelegate, $rootScope) {
    return {
        restrict: "A",
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

            function stopDrag(){
              $ionicSideMenuDelegate.canDragContent(false);
            }

            function allowDrag(){
              $ionicSideMenuDelegate.canDragContent(true);
            }

            $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
            $element.on('touchstart', stopDrag);
            $element.on('touchend', allowDrag);
            $element.on('mousedown', stopDrag);
            $element.on('mouseup', allowDrag);

        }]
    };
}])
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {


  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
  })


  .state('tab.matches', {
    url: '/matches',
    views: {
      'tab-matches': {
        templateUrl: 'templates/matches/matches.html',
        controller: 'MatchesCtrl'
      }
    }
  })

  .state('tab.match', {
    url: '/matches/:id',
    views: {
      'tab-matches': {
        templateUrl: 'templates/matches/match.html',
        controller: 'MatchDetailCtrl'
      }
    }
  })

  .state('tab.leagues', {
      url: '/leagues',
      views: {
        'tab-leagues': {
          templateUrl: 'templates/tab-leagues.html',
          controller: 'LeaguesCtrl'
        }
      }
    })
    .state('tab.league-detail', {
      url: '/leagues/:sofaId',
      views: {
        'tab-leagues': {
          templateUrl: 'templates/leagues/league-detail.html',
          controller: 'LeagueDetailCtrl'
        }
      }
    })
    .state('tab.league-all', {
      url: '/leagues/:category/:slug/:id',
      views: {
        'tab-leagues': {
          templateUrl: 'templates/leagues/league-all.html',
          controller: 'LeagueAllCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/matches');
  $ionicConfigProvider.platform.android.tabs.position('bottom');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

});
