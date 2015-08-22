(function() {
  'use strict';

  angular
    .module('gulpangular')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.progressBar = true;
    toastr.options.preventDuplicates = true;
    toastr.options.positionClass = 'toast-top-right';
  }

})();
