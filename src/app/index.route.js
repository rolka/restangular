(function() {
  'use strict';

  angular
    .module('gulpangular')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/posts/posts.html',
        controller: 'PostsController',
        controllerAs: 'vm',
        resolve: {
          posts: function(postsFactory) {
            return postsFactory.get();
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
