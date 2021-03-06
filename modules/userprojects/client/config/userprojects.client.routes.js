//These are the routes for the user project module. The map is also routed from here.

(function () {
  'use strict';

  angular
    .module('userprojects')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('userprojects', {
        abstract: true,
        url: '',
        template: '<ui-view/>'
      })
      .state('userprojects.list', {
        url: '/userprojects',
        templateUrl: 'modules/userprojects/client/views/list-userprojects.client.view.html',
        controller: 'UserprojectsListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Userprojects List'
        }
      })
      .state('userprojects.create', {
        url: '/create',
        templateUrl: 'modules/userprojects/client/views/form-userproject.client.view.html',
        controller: 'UserprojectsController',
        controllerAs: 'vm',
        resolve: {
          userprojectResolve: newUserproject
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Userprojects Create'
        }
      })
      .state('userprojects.edit', {
        url: '/:userprojectId/edit',
        templateUrl: 'modules/userprojects/client/views/form-userproject.client.view.html',
        controller: 'UserprojectsController',
        controllerAs: 'vm',
        resolve: {
          userprojectResolve: getUserproject
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Edit Userproject {{ userprojectResolve.name }}'
        }
      })
      .state('userprojects.view', {
        url: '/:userprojectId',
        templateUrl: 'modules/userprojects/client/views/view-userproject.client.view.html',
        controller: 'UserprojectsController',
        controllerAs: 'vm',
        resolve: {
          userprojectResolve: getUserproject
        },
        data: {
          pageTitle: 'Userproject {{ userprojectResolve.name }}'
        }
      })
      //This is the route setup for the map
        .state('userprojects.map', {
        url: '/userprojects/map',
        templateUrl: 'modules/userprojects/client/views/project-map.client.view.html',
        controller: 'UserprojectsMapController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Projects Map'
        }
      });
  }

  getUserproject.$inject = ['$stateParams', 'UserprojectsService'];

  function getUserproject($stateParams, UserprojectsService) {
    return UserprojectsService.get({
      userprojectId: $stateParams.userprojectId
    }).$promise;
  }

  newUserproject.$inject = ['UserprojectsService'];

  function newUserproject(UserprojectsService) {
    return new UserprojectsService();
  }
}());
