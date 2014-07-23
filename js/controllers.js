var homepageApp = angular.module('homepageApp', ['ngRoute', 'ngAnimate']);

homepageApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'html/home.html',
            controller: 'mainController'
        })

        .when('/write', {
            templateUrl: 'html/write.html',
            controller: 'writeController'
        })

        .when('/make', {
            templateUrl: 'html/make.html',
            controller: 'makeController'
        })

        .when('/am', {
            templateUrl: 'html/am.html',
            controller: 'amController'
        });
});

homepageApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home'; 
});

homepageApp.controller('writeController', function($scope) {
    $scope.pageClass = 'page-write'; 
});

homepageApp.controller('makeController', function($scope) {
    $scope.pageClass = 'page-make'; 
});

homepageApp.controller('amController', function($scope) {
    $scope.pageClass = 'page-am'; 
});
