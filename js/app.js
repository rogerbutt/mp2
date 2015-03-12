var imdbApp = angular.module('imdbApp', [
  'ngRoute',
  'imdbControllers'
]);

imdbApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'imdbListCtrl'
      }).
      when('/details/:phoneId', {
        templateUrl: 'partials/details.html',
        controller: 'imdbDetailCtrl'
      }).
      when('/gallery', {
        templateUrl: 'partials/gallery.html',
        controller: 'imdbGalleryCtrl'
      }).
      otherwise({
        redirectTo: '/list'
      });
  }]);

console.log('asdf');
