var homepageApp = angular.module('homepageApp', ['ngRoute', 'ngAnimate']);

homepageApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'html/home.html',
            controller: 'HomeController',
            title: 'GAOISM'
        })

        .when('/write', {
            templateUrl: 'html/write.html',
            controller: 'WriteController',
            title: "I write. | GAOISM"
        })

        .when('/make', {
            templateUrl: 'html/make.html',
            controller: 'MakeController',
            title: "I make. | GAOISM"
        })

        .when('/am', {
            templateUrl: 'html/am.html',
            controller: 'AmController',
            title: "I am. | GAOISM"
        });

});

homepageApp.controller('HeaderController', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        console.log($location.path());
        return viewLocation === $location.path();
    };
});

homepageApp.controller('HomeController', function ($scope) {
    $scope.pageClass = 'page-home';
});

homepageApp.controller('WriteController', function ($scope) {
    $scope.pageClass = 'page-write';
});

homepageApp.controller('MakeController', function ($scope) {
    $scope.pageClass = 'page-make';
});

homepageApp.controller('AmController', function ($scope) {
    $scope.pageClass = 'page-am'; 
});

homepageApp.run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);
