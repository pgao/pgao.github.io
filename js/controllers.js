var homepageApp = angular.module('homepageApp', ['ngRoute', 'ngAnimate', 'angular-flexslider']);

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
            navImage: '/img/nav/scotland.jpg',
            pageClass: 'write',
            pageEmphasis: 'words',
            pageTitle: "I write. | GAOISM",
            showNavBar: true
        })

        .when('/make', {
            templateUrl: 'html/make.html',
            controller: 'MakeController',
            navImage: '/img/nav/pharad.jpg',
            pageClass: 'make',
            pageEmphasis: 'things',
            pageTitle: "I make. | GAOISM",
            showNavBar: true
        })

        .when('/am', {
            templateUrl: 'html/am.html',
            controller: 'AmController',
            navImage: '/img/nav/heart.jpg',
            pageClass: 'am',
            pageEmphasis: 'Peter Gao',
            pageTitle: "I am. | GAOISM",
            showNavBar: true
        });

});

homepageApp.controller('HomeController', function ($scope) {
    $scope.backgroundImages = [
        '/img/home/brain.jpg',
        '/img/home/torch.jpg',
        '/img/home/pollock.jpg',
        '/img/home/fountain.jpg',
        '/img/home/flipturn.jpg',
        '/img/home/lion.jpg',
        '/img/home/seal.jpg',
        '/img/home/buttons.jpg',
    ]
});

homepageApp.controller('WriteController', function ($scope) {
    $scope.writings = [
        {
            'name': 'Thoughts.',
            'clickUrl': 'http://pgao.tumblr.com',
            'imageUrl': '/img/write/gaoism-blog.png',
            'description': 'Personal ramblings, both coherent and incoherent.'
        },
        {
            'name': 'Satire.',
            'clickUrl': 'http://haltingproblem.tumblr.com',
            'imageUrl': '/img/write/halting-problem.png',
            'description': 'If you look long enough into the absurdity, the absurdity begins to look back through you.'
        },
        {
            'name': 'Quotes.',
            'clickUrl': 'http://instantgratification.herokuapp.com',
            'imageUrl': '/img/write/instagrat.png',
            'description': 'If... just one human being is inspired to say something nasty to a friend, or perhaps to strike a loved one, it will all have been worth the while.'
        },
    ];
});

homepageApp.controller('MakeController', function ($scope) {
    $scope.projects = [
        {
            'name': 'Playalista',
            'clickUrl': 'https://github.com/pgao/playalista',
            'imageUrl': '/img/projects/playalista.png',
            'description': 'A music jukebox backed by Youtube. All of my music library was stuck on one of my computers as a huge folder of MP3s, so I took my favourites, ripped out their names, and then used Youtube to play them, so I can listen to my music across all of my computers without having to download a bunch of files.',
        },
        {
            'name': 'Happy Meter',
            'clickUrl': 'https://github.com/pgao/HappyMeter',
            'imageUrl': '/img/projects/happymeter.jpg',
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
            'imageUrl': '/img/projects/instagrat.jpg',
            'description': 'Facebook Battle of the Bay Hackathon 2012.  The best way to amuse yourself publicly without the police getting called on you.  The next step in efficient time wasting technology.',
        },
        {
            'name': 'Hapwear',
            'clickUrl': 'https://github.com/pgao/HapWear',
            'imageUrl': '/img/projects/hapwear.jpg',
            'description': 'Angelhack Summer 2012.  Wearable technology.  Instead of looking at your phone for turn by turn directions, our bracelet lets you feel where you\'re supposed to go by vibrating on your wrist in the correct direction.',
        },
        {
            'name': 'Intro to Hacking',
            'clickUrl': 'http://blog.hackersatberkeley.com/?p=16',
            'imageUrl': '/img/projects/intro-hack.png',
            'description': 'I\'m one of the workshop officers for Hackers@Berkeley, and this is the first workshop we had in 2012.  We made a ghetto version of Instagram with filters that could be controlled via an Arduino ultrasound sensor.',
        },
        {
            'name': 'Robotics',
            'clickUrl': 'http://robotics.harker.org/',
            'imageUrl': '/img/projects/pharad.jpg',
            'description': 'For four years, I built massive 120 lb semi-autonomous aluminium behemoths as part of my school\'s FRC robotics team. The robot in the picture is named pharad. She uses a tracked drive train and a pneumatically driven kicker to play the robot equivalent of soccer.'
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
