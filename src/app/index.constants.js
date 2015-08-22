/* global toastr:false */
(function() {
  'use strict';

  angular
    .module('gulpangular')
    .constant('toastr', toastr)
    .constant('TOKEN', 'CAAQYWWjo5zkBAKNWF2HlflTTgPSMATHC8Ecp6vZANJ5ZAUABYwilDeekf1cayODlqXNZATKv4dkwdi6PIqY3EGA2ZAEO2pvxEeD1SxwribyZCTIJz1zmBgkKnP8jEVbdhoZBt8IrbvToS9WVW3bWMWBHiLBOx5U5ZCn4xT1lIyGI3niAEaRZCa1g')
    .constant('URL', 'https://graph.facebook.com/{version}/{slug}/feed?fields={fields}&limit={limit}&access_token={token}')
    .constant('LIMIT', 50)
    .constant('APIVERSION', 'v2.4')
    .constant('FIELDS', [
      'id',
      'type',
      'name',
      'link',
      'from',
      'message',
      'created_time',
      'full_picture'
    ])
    .constant('SLUGS', [
      'sisaidgallery',
      'duzenos',
      'bbcnews',
      'Klaipeda.renginiai',
      'PORTbyBarBara',
      'Kastonas',
      'klaipedosdramosteatras',
      '238899589464193'
    ]);

})();
