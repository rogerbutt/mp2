

var imdbControllers = angular.module('imdbControllers', []);

imdbControllers.controller('imdbListCtrl', function(dataService, $scope) {

  dataService.loadSearchData(function(data) {
    $scope.movies = data;
  });

});

imdbControllers.controller('imdbDetailCtrl', function($routeParams, $scope, dataService) {

  dataService.loadMovieData($routeParams.movieId, function(data) {
    $scope.movie = data;
  });

});

imdbControllers.controller('imdbGalleryCtrl', function(dataService, $scope) {

  dataService.loadSearchData(function(data) {
    $scope.movies = data;
  });

});
