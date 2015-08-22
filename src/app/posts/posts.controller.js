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

    $scope.$watch('vm.checkbox', function() {
      if(vm.checkbox) {
        vm.posts = vm.posts.filter(function(post) {
          return post.type === 'event';
        });
      }
      else {
        vm.posts = posts;
      }
    });

    $rootScope.loading = false;
  }

})();
