(function() {
  'use strict';

  angular
    .module('gulpangular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope) {
    $rootScope.loading = true;
  }

})();
