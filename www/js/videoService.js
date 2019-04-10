
var videoUrl= 'https://scorex.video/wp-json/wp/v2/posts';

angular.module('video.services', [])

.factory('videoApi', function($http){
return {
  all:function () {
    return $http.get('https://www.scorebat.com/video-api/v1/');
  }
}
});
