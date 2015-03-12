'use strict';

angular.module('imdbApp')
  .service('dataService', function($http) {

    var searchData = null;
    var allData = null

    var loadSearchData = function(cb) {
      $http.get('data/imdb250.json').success(function(data) {
        searchData = [];
        allData = data;

        for(var i = 0; i < data.length; i++) {
          searchData.push({ rank: data[i].rank,
                            title: data[i].title,
                            id: data[i].imdbID});
        }

        cb(searchData);

      });
    };

    var loadMovieData = function(rank, cb) {
      cb(allData[rank]);
    };

    return {
      loadSearchData: loadSearchData,
      loadMovieData: loadMovieData
    };
  });
