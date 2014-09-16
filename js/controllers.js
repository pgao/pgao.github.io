var homepageApp = angular.module('homepageApp', ['ngRoute', 'ngAnimate']);

homepageApp.run(function($rootScope, $location) {
    $rootScope.isActive = function(checkedPath) {
        return checkedPath === $location.path();
    };
    $rootScope.getBackgroundImage = function() {
        return {
            'background': 'url(' + $rootScope.navImage + ') no-repeat center center',
            'background-size': '100%',
        }
    }
});

homepageApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'html/home.html',
            controller: 'HomeController',
            navImage: '',
            pageClass: 'home',
            pageEmphasis: '',
            pageTitle: 'GAOISM',
            showNavBar: false
        })

        .when('/write', {
            templateUrl: 'html/write.html',
            controller: 'WriteController',
            navImage: '/img/heart.jpg',
            pageClass: 'write',
            pageEmphasis: 'words',
            pageTitle: "I write. | GAOISM",
            showNavBar: true
        })

        .when('/make', {
            templateUrl: 'html/make.html',
            controller: 'MakeController',
            navImage: '/img/lion.jpg',
            pageClass: 'make',
            pageEmphasis: 'things',
            pageTitle: "I make. | GAOISM",
            showNavBar: true
        })

        .when('/am', {
            templateUrl: 'html/am.html',
            controller: 'AmController',
            navImage: '/img/seal.jpg',
            pageClass: 'am',
            pageEmphasis: 'Peter Gao',
            pageTitle: "I am. | GAOISM",
            showNavBar: true
        });

});

// homepageApp.controller('NavbarController', function ($scope, $location) {
//     $scope.isActive = function (viewLocation) {
//         return viewLocation === $location.path();
//     };
// });

homepageApp.controller('HomeController', function ($scope) {

});

homepageApp.controller('WriteController', function ($scope) {
    $scope.writings = [
        {
            'name': 'Ramblings.',
            'clickUrl': 'pgao.tumblr.com',
            'imageUrl': '/img/write/gaoism-blog.png',
        },
        {
            'name': 'Satire.',
            'clickUrl': 'haltingproblem.tumblr.com',
            'imageUrl': '/img/write/halting-problem.png'
        },
        {
            'name': 'Quotes.',
            'clickUrl': 'instantgratification.herokuapp.com',
            'imageUrl': '/img/write/instagrat.png'
        },
    ];
});

homepageApp.controller('MakeController', function ($scope) {
    $scope.projects = [
        {
            'name': 'Playalista',
            'clickUrl': 'https://github.com/pgao/playalista',
            'imageUrl': '/img/projects/playalista.png',
            'description': '',
        },
        {
            'name': 'Happy Meter',
            'clickUrl': 'https://github.com/pgao/HappyMeter',
            'imageUrl': 'http://farm3.staticflickr.com/2853/9333223986_040f78e0ed_o.jpg',
            'description': 'What is happiness?  According to Sri, it is a bank account stuffed with cash and the adulation of your peers.  This tool tells you the price of a stock of your choice and correlates it to how Twitter is feeling about that stock at any point in time.',
        },
        {
            'name': 'Phone-Octo-Ninja',
            'clickUrl': 'https://github.com/pgao/phone-octo-ninja/',
            'imageUrl': '/img/projects/phone-octo-ninja.jpg',
            'description': 'Control the Internet of Things from your smartphone with the power of augmented reality.  Walk into a coffee shop, take out your phone, and be able to see everything you can control in the immediate area.  Tap on an icon and change the behaviour of a real physical object.  A true universal remote control.',
        },
        {
            'name': 'Instant Gratification',
            'clickUrl': 'https://github.com/pgao/Instant-Gratification',
            'imageUrl': 'http://farm4.staticflickr.com/3697/9330429143_1fef06d3f5_o.jpg',
            'description': 'Facebook Battle of the Bay Hackathon 2012.  The best way to amuse yourself publicly without the police getting called on you.  The next step in efficient time wasting technology.',
        },
        {
            'name': 'Hapwear',
            'clickUrl': 'https://github.com/pgao/HapWear',
            'imageUrl': 'http://i.imgur.com/SiJ20.jpg',
            'description': 'Angelhack Summer 2012.  Wearable technology.  Instead of looking at your phone for turn by turn directions, our bracelet lets you feel where you\'re supposed to go by vibrating on your wrist in the correct direction.',
        },
        {
            'name': 'Intro to Hacking Workshop',
            'clickUrl': 'http://blog.hackersatberkeley.com/?p=16',
            'imageUrl': '/img/projects/intro-hack.png',
            'description': 'I\'m one of the workshop officers for Hackers@Berkeley, and this is the first workshop we had in 2012.  We made a ghetto version of Instagram with filters that could be controlled via an Arduino ultrasound sensor.',
        },
        {
            'name': 'Robotics',
            'clickUrl': 'http://robotics.harker.org/',
            'imageUrl': 'http://farm8.staticflickr.com/7164/6828451651_3349fd719a_z.jpg',
            'description': 'For four years, I built massive 120 lb semi-autonomous aluminium behemoths as part of my school\'s FRC robotics team. I learned a lot about mechanical, electrical, software, and people engineering in the most brutally intense way possible. The robot in the picture is named pharad. She features a custom-machined, tracked drive train capable of traversing extremely uneven terrain at high speed with no damage, utilising a pneumatically driven kicker to play the robot equivalent of soccer.'
        }
    ];
});

homepageApp.controller('AmController', function ($scope) {

});

homepageApp.run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.navImage = current.$$route.navImage;
        $rootScope.showNavBar = current.$$route.showNavBar;
        $rootScope.pageClass = current.$$route.pageClass;
        $rootScope.pageEmphasis = current.$$route.pageEmphasis;
        $rootScope.pageTitle = current.$$route.pageTitle;
    });
}]);
