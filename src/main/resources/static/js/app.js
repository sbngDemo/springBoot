'use strict';

var states = [
  { name: 'login', state: { url: '/', templateUrl: 'views/login.html', controller: 'LoginCtrl', data: { text: 'login', visible: false }, authenticate: false } },
  { name: 'activitymenu', state: { url: '/activity-menu', templateUrl: 'views/activity_menu.html', controller: 'MenuCtrl', data: { text: 'menu', visible: false }, authenticate: false } },
  { name: 'dashboard', state: { url: '/dashboard', templateUrl: 'views/dashboard.html', controller: 'DashboardCtrl', data: { text: 'dashboard', visible: false }, authenticate: false } },
  { name: 'data-deid', state: { url: '/data-deid', templateUrl: 'views/data-deid.html', controller: 'RShinyCtrl', data: { text: 'data-deid', visible: false }, authenticate: false } },
  { name: 'doc-deid', state: { url: '/doc-deid', templateUrl: 'views/doc-deid.html', controller: 'RShinyCtrl', data: { text: 'doc-deid', visible: false }, authenticate: false } },
  { name: 'risk-analysis', state: { url: '/risk-analysis', templateUrl: 'views/risk-analysis.html', controller: 'RShinyCtrl', data: { text: 'risk-analysis', visible: false }, authenticate: false } },
  { name: 'anonymization', state: { url: '/anonymization', templateUrl: 'views/anonymization.html', controller: 'RShinyCtrl', data: { text: 'anonymization', visible: false }, authenticate: false } },
  { name: 'reports', state: { url: '/reports', templateUrl: 'views/reports.html', controller: 'RShinyCtrl', data: { text: 'reports', visible: false }, authenticate: false } },
  { name: 'data-utility', state: { url: '/data-utility', templateUrl: 'views/data-utility.html', controller: 'RShinyCtrl', data: { text: 'data-utility', visible: false }, authenticate: false } }

];
angular.module('deidapp', [
    'ui.router', 'smart-table' 
  ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    angular.forEach(states, function(state) {
      $stateProvider.state(state.name, state.state);
    });
    $locationProvider.html5Mode(false);
  })

.run(function($rootScope, $state, $location) {
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
    
  });
});