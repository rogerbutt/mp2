

var imdbControllers = angular.module('imdbControllers', []);

imdbControllers.controller('imdbListCtrl', function(dataService, $scope) {

  dataService.loadData(function(data) {
    $scope.movies = data;
  });
});

imdbControllers.controller('imdbDetailCtrl', function() {

})

imdbControllers.controller('imdbGalleryCtrl', function() {

});
