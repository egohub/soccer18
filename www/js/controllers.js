angular.module('starter.controllers', [])
.controller('menuCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
}])
.controller('AppCtrl', function($scope) {})

// .controller('MatchesCtrl', function($scope, $stateParams, rawApi) {
//   rawApi.all().then(function (resp) {
//       $scope.matches = resp.data.sportItem.tournaments;
//     });
// })
.controller('MatchDetailCtrl', function($scope, $stateParams,$http, rawApi) {
  rawApi.detail($stateParams.id).then(function(response){

       // $scope.title = response.data.category.name;
       $scope.detail = response.data;
       console.log(response.data);
  });
})

// .controller('LeaguesCtrl',  function($scope, sofaCountry, LSFactory) {
//
    // $scope.country = [];
    // var country = LSFactory.getAll();
    //   if (country.length > 0) {
    //         $scope.country = country;
    //     } else {
    //         sofaCountry.all().then(function(data) {
    //             processBooks(data.data.data);
    //             $scope.country = data.data.data;
    //         })
    //     }
    //
    //     function processBooks(country) {
    //         LSFactory.clear();
    //         // we want to save each book individually
    //         // this way we can access each book info. by it's _id
    //         for (var i = 0; i < country.length; i++) {
    //             LSFactory.set(country[i].id, country[i]);
    //         };
    //     }
//
//   })

// .controller('LeaguesCtrl',  function($scope, countryApi) {
//    $scope.country = countryApi.all();
// })

.controller('LeagueDetailCtrl', function($scope, $stateParams, countryApi, LSFactory) {
  $scope.country = [];
       console.log(LSFactory.get($stateParams.sofaId));
      countryApi.detail($stateParams.sofaId).then(function(data){
              LSFactory.set($stateParams.sofaId, data.data.tournaments.list)
              // processBooks(data.data);
              console.log(data.data);
              $scope.country = data.data;
      })


      // function processBooks(country) {
      //     LSFactory.clear();
      //     for (var i = 0; i < country.length; i++) {
      //         LSFactory.set(country[i].category.slug, country[i].tournaments);
      //     };
      // }
//       countryApi.detail($stateParams.sofaId).then(function(response){
//           console.log(response)
// });
})
// .controller('LeagueDetailCtrl', function($scope, $stateParams, LSFactory, sofaCountry) {
//   $scope.leagues= [];
//   var pp  ;
//   sofaCountry.get($stateParams.sofaId).then(function(response){
//     // console.log(JSON.parse(localStorage.getItem('$stateParams.sofaId')));
//     var sofa = JSON.parse(localStorage.getItem('$stateParams.sofaId'));
//       console.log(sofa);
//         // var pp
//         sofa["list"]  = JSON.stringify(response.data.tournaments);
//          console.log(sofa);
//          // processTour(sofa, pp)
//          localStorage.setItem(sofa, sofa);
//        $scope.title = response.data.category.name;
//        $scope.leagues = response.data.tournaments.list;
//        console.log(JSON.parse(localStorage.getItem($stateParams.sofaId)));
//
//
//   });
  // function processTour(item, obj) {
  //      console.log(item, item[obj]);
  //      item["list"] = obj
  //     // LSFactory.delete(item);
  //     // for (var i = 0; i < country.length; i++) {
  //         LSFactory.set(item, obj);
  //         console.log(LSFactory.get(item));
  //     // };
  // }
// })

.controller('AccountCtrl', function($scope, $sce, $ionicLoading, videoApi) {
   $scope.iframe = function (url){
        return $sce.trustAsHtml(url);
    }
    
  $scope.toggleVideo = function (item) {
    if(item.showVideo) {
      item.showVideo = !item.showVideo;
    } else {
      item.showVideo = true;
    }
  };

  $scope.toggleAlt = function (item) {
    if(item.showAlt) {
      item.showAlt = !item.showAlt;
    } else {
      item.showAlt = true;
    }
  };

  videoApi.all().then((data) => {
    console.log(data);
    $scope.bat = data.data;
   
  })
   
});


//old
// .controller('LeaguesCtrl', function($scope, Chats, sofaCountry, LSFactory) {
//   $scope.country = [];
//   var country = LSFactory.getAll();
//   if (books.length > 0) {
//     $scope.books = books;
//   } else {
//     // BooksFactory.get(page).success(function(data) {
//     // })
//   sofaCountry.all().then(function (resp) {
//       $scope.sofa = resp.data.links;
//       console.log($scope.sofa);
//   });
//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   };
// }
// })
