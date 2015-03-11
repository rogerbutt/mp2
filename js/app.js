var imdbApp = angular.module('imdbApp', [
  'ngRoute',
  'imdbControllers'
]);

imdbApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/list', {
        templateUrl: '../public/partials/list.html',
        controller: 'imdbListCtrl'
      }).
      when('/details/:phoneId', {
        templateUrl: '../public/partials/details.html',
        controller: 'imdbDetailCtrl'
      }).
      when('/gallery', {
        templateUrl: '../public/partials/gallery.html',
        controller: 'imdbGalleryCtrl'
      }).
      otherwise({
        redirectTo: '/list'
      });
  }]);
