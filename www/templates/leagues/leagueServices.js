var url= 'https://www.sofascore.com/u-tournament/17/season/13380/json';

angular.module('league.services', [])

.factory('leagueApi', function($http,$ionicLoading){
    return {
      get : function (category,  slug,  uniqueId) {
     return $http.get('https://soccer18.herokuapp.com/tournament/'+category+'/'+slug+'/'+uniqueId)
      },
      getRank: function (thisSeason) {
        $ionicLoading.show({  template: '<ion-spinner icon="lines" class="spinner-assertive"></ion-spinner>' });
        return $http.get(thisSeason);
        console.log('this tour. ' + thisSeason);
      }
    }
});
