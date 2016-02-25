var vetApp = angular.module('vetApp', ["ngRoute"])
    .config(function ($routeProvider) {
    
        $routeProvider.when('/calendar',
        {
            templateUrl: 'calendar.html',
            controller: 'calendarCtrl'
        });
        $routeProvider.when('/foo',
        {
            templateUrl: 'foo.html',
            controller: 'fooCtrl'
        });
        $routeProvider.otherwise({redirectTo: '/calendar'});
    });

