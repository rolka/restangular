(function() {
  'use strict';

  angular
    .module('gulpangular')
    .factory('postsFactory', postsFactory);

  /* @ngInject */
  function postsFactory($http, $q, URL, TOKEN, FIELDS, SLUGS, LIMIT, APIVERSION) {

    var promises = [];
    var postsURLs = makeURLs(URL, TOKEN, FIELDS, SLUGS, LIMIT, APIVERSION);

    var service = {
      get: get
    };

    return service;

    function get() {

      postsURLs.each(function(url) {
        promises.push($http.get(url));
      });

      return $q.all(promises).then(getComplete);
    }

    function getComplete(data) {
      return data.map(function(row) {
        return row.data.data;
      }).flatten().sortBy(function(row) {
        return row.created_time;
      });
    }

    function makeURLs(urlIn, tokenIn, fieldsIn, slugsIn, limitIn, versionIn) {
      return slugsIn.map(function(slugIn) {

        var s = {slug: slugIn},
            v = {version: versionIn},
            f = {fields: fieldsIn.toString()},
            l = {limit: limitIn.toString()},
            t = {token: tokenIn};

        return urlIn.assign(v,s,f,l,t);

      });
    }

  }

})();