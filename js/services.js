'use strict';

angular.module('imdbApp')
  .service('dataService', function($http) {

    var searchData = null;

    var loadSearchData = function(cb) {
      $http.get('data/imdb250.json').success(function(data) {
        var searchData = [];

        for(var i = 0; i < data.length; i++) {
          searchData.push({ rank: data[i].rank,
                            title: data[i].title,
                            id: data[i].imdbID});
        }

        cb(searchData);
        
      });
    };

    return {
      loadSearchData: loadSearchData
    };
  });
