!function(){"use strict";angular.module("gulpangular",["ngAnimate","ngCookies","ngTouch","ngSanitize","restangular","ui.router","ngMaterial"])}(),function(){"use strict";function t(t,n,o,e,a,s,r,i){function c(){return d.each(function(n){p.push(t.get(n))}),n.all(p).then(l)}function l(t){return t.map(function(t){return t.data.data}).flatten().sortBy(function(t){return t.created_time})}function u(t,n,o,e,a,s){return e.map(function(e){var r={slug:e},i={version:s},c={fields:o.toString()},l={limit:a.toString()},u={token:n};return t.assign(i,r,c,l,u)})}var p=[],d=u(o,e,a,s,r,i),g={get:c};return g}angular.module("gulpangular").factory("postsFactory",t),t.$inject=["$http","$q","URL","TOKEN","FIELDS","SLUGS","LIMIT","APIVERSION"]}(),function(){"use strict";function t(t,n,o){var e=this;e.posts=o,e.checkbox=!1,t.$watch("vm.checkbox",function(){e.posts=e.checkbox?e.posts.filter(function(t){return"event"===t.type}):o}),n.loading=!1}angular.module("gulpangular").controller("PostsController",t),t.$inject=["$scope","$rootScope","posts"]}(),function(){"use strict";function t(t){t.loading=!0}angular.module("gulpangular").run(t),t.$inject=["$rootScope"]}(),function(){"use strict";function t(t,n){t.state("home",{url:"/",templateUrl:"app/posts/posts.html",controller:"PostsController",controllerAs:"vm",resolve:{posts:["postsFactory",function(t){return t.get()}]}}),n.otherwise("/")}angular.module("gulpangular").config(t),t.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("gulpangular").constant("toastr",toastr).constant("TOKEN","CAAQYWWjo5zkBAKNWF2HlflTTgPSMATHC8Ecp6vZANJ5ZAUABYwilDeekf1cayODlqXNZATKv4dkwdi6PIqY3EGA2ZAEO2pvxEeD1SxwribyZCTIJz1zmBgkKnP8jEVbdhoZBt8IrbvToS9WVW3bWMWBHiLBOx5U5ZCn4xT1lIyGI3niAEaRZCa1g").constant("URL","https://graph.facebook.com/{version}/{slug}/feed?fields={fields}&limit={limit}&access_token={token}").constant("LIMIT",50).constant("APIVERSION","v2.4").constant("FIELDS",["id","type","name","link","from","message","created_time","full_picture"]).constant("SLUGS",["sisaidgallery","duzenos","bbcnews","Klaipeda.renginiai","PORTbyBarBara","Kastonas","klaipedosdramosteatras","238899589464193"])}(),function(){"use strict";function t(t,n){t.debugEnabled(!0),n.options.timeOut=3e3,n.options.progressBar=!0,n.options.preventDuplicates=!0,n.options.positionClass="toast-top-right"}angular.module("gulpangular").config(t),t.$inject=["$logProvider","toastr"]}(),angular.module("gulpangular").run(["$templateCache",function(t){t.put("app/posts/posts.html",'<div class="header"><h1>Facebook News Feeds</h1><md-checkbox class="md-warn" aria-label="Checkbox" ng-model="vm.checkbox">Show events only</md-checkbox></div><h2 ng-if="vm.posts.length < 1">No posts found</h2><div class="card" ng-repeat="post in vm.posts"><md-card><img ng-src="{{post.full_picture}}" class="md-card-image"><md-card-content><h2 class="md-title">{{post.name}}</h2><h3>{{post.from.name}}: {{post.created_time | date:\'dd/MM/yyyy\'}}</h3><p>{{post.message}}</p></md-card-content><div class="md-actions" layout="row" layout-align="end center"><a class="md-button" target="_blank" ng-href="{{post.link}}">Learn more ></a></div></md-card></div>')}]);