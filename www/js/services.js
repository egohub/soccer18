function dateFormat(date, format) {
  var tom = new Date().getDate() + 1;
    format = format.replace("TM", (tom < 10 ? '0' : '') + tom);
    format = format.replace("DD", (date.getDate() < 10 ? '0' : '') + date.getDate());
    format = format.replace("MM", (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1));
    format = format.replace("YYYY", date.getFullYear());
    return format;
}
var today = Date.now();
var formatDate = dateFormat(new Date(), "YYYY-MM-DD");
var tomorrowDate = dateFormat(new Date(), "YYYY-MM-TM");

var mockCountry = 'https://raw.githubusercontent.com/egohub/soccer18/master/data/sofaCountries.json';
var sofaUrl  = 'http://soccer18.herokuapp.com/sofacountry';
var sofaIdUrl = 'https://www.sofascore.com/list/category/football/';
var sofaLive = 'http://soccer18.herokuapp.com/live';
var jsdate = Date.now();
angular.module('starter.services', [])

.factory('rawApi', function($http, $q){
  var url = 'https://www.sofascore.com/football//'+formatDate+'/json';
  var tom = 'https://www.sofascore.com/football//'+tomorrowDate+'/json';
  var promiseOne = $http.get(url);
  var promiseTwo = $http.get(tom);

  return {
    live : function () {
      return $http.get('https://www.sofascore.com/football/livescore/json?_='+jsdate);
    },
    promise : function () {
      return $q.all([promiseOne, promiseTwo]);
    },
    all:function () {
      return $http.get(url);
    },
    tomorrow:function () {
      return $http.get(tom);
    },
    detail : function (id) {
      return $http.get('https://www.sofascore.com/event/'+id+'/json?_='+jsdate)
    }
  };
})
.factory('Live', function($http) {
    return {
      now :function () {
        return $http.get(sofaLive)
      }
  }

})

.factory('sofaCountry', function ($http) {
  return {
    all:function () {
      return $http.get('https://raw.githubusercontent.com/egohub/soccer18/master/data/sofaCountries.json');
    },
    get : function (sofaId) {
      return $http.get(sofaIdUrl+sofaId+'/tournaments/json')
    }
  }
})

.factory('LSFactory', [function() {
    var LSAPI = {
        clear: function() {
            return localStorage.clear();
        },

        get: function(id) {
            return JSON.parse(localStorage.getItem(id));
        },

        update: function(id, data) {
          var init = JSON.parse(localStorage.getItem(id));
          init.list = data;
          localStorage.setItem(id, JSON.stringify(data));
        },

        set: function(id, data) {
            return localStorage.setItem(id, JSON.stringify(data));
        },

        delete: function(id) {
            return localStorage.removeItem(id);
        },

        getAll: function() {
            var country = [];
            var items = Object.keys(localStorage);

            for (var i = 0; i < items.length; i++) {
                if (items[i] !== 'leagueName' || items[i] != 'href') {
                    country.push(JSON.parse(localStorage[items[i]]));
                }
            }

            return country;
        }
    };

    return LSAPI;

}])
