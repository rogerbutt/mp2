'use strict';

angular.module('imdbApp')
  .service('dataService', function($http) {

    var movieData = null

    var loadData = function(cb) {
      $http.get('data/imdb250.json').success(function(data) {
        movieData = data;
        cb(movieData);
        //derp
      });
    };

    return {
      loadData: loadData
    };
  });
