var app = angular.module('GetOutApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    var viewBase = 'app/views/';
    $routeProvider
        .when('/', {
            controller: 'WelcomeController',
            templateUrl: viewBase + 'index.html'
        })    
        .when('/event/', {
            controller: 'EventController',
            templateUrl: viewBase + 'event.html'
        })        
        .when('/sport', {
            controller: 'CustomersController',
            templateUrl: viewBase + 'customers/customers.html'
        })
        .when('/sport/:sportname', {
            controller: 'CustomerOrdersController',
            templateUrl: viewBase + 'customers/customerOrders.html'
        })
        .when('/event/:eventId', {
            controller: 'CustomerEditController',
            templateUrl: viewBase + 'customers/customerEdit.html'
        })
        .when('/about', {
            controller: 'AboutController',
            templateUrl: viewBase + 'about.html'
        })
        .otherwise({ redirectTo: '/' });
}]);

