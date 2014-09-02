var homepageApp = angular.module('homepageApp', ['ngRoute', 'ngAnimate']);

homepageApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'html/home.html',
            controller: 'HomeController',
            pageTitle: 'GAOISM',
            showNavBar: false
        })

        .when('/write', {
            templateUrl: 'html/write.html',
            controller: 'WriteController',
            pageTitle: "I write. | GAOISM",
            showNavBar: true
        })

        .when('/make', {
            templateUrl: 'html/make.html',
            controller: 'MakeController',
            pageTitle: "I make. | GAOISM",
            showNavBar: true
        })

        .when('/am', {
            templateUrl: 'html/am.html',
            controller: 'AmController',
            pageTitle: "I am. | GAOISM",
            showNavBar: true
        });

});

homepageApp.controller('NavbarController', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});

homepageApp.controller('HomeController', function ($scope) {
    $scope.pageClass = 'home';
});

homepageApp.controller('WriteController', function ($scope) {
    $scope.pageClass = 'write';
    $scope.showWritingProject = function(project) {
        console.log("showing project", project);
    }
});

homepageApp.controller('MakeController', function ($scope) {
    $scope.pageClass = 'make';
});

homepageApp.controller('AmController', function ($scope) {
    $scope.pageClass = 'am';
});

homepageApp.run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.pageTitle = current.$$route.pageTitle;
        $rootScope.showNavBar = current.$$route.showNavBar;
    });
}]);
