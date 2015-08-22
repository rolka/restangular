(function() {
  'use strict';

  angular
    .module('gulpangular')
    .controller('PostsController', PostsController);

  /** @ngInject */
  function PostsController($scope, $rootScope, posts) {
    var vm = this;

    vm.posts = posts;
    vm.checkbox = false;

    $rootScope.loading = false;
  }

})();
