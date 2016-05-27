'use strict';

angular.module("myApp", ['ngRoute']).config(function($routeProvider){
  $routeProvider
    .when('/', {templateUrl: 'views/blog.html'})
    .when('/blog', {templateUrl: 'views/blog.html'})
    .when('/music', {templateUrl: 'views/music.html'})
    .when('/about', {templateUrl: 'views/about.html'})
    .when('/portfolio', {templateUrl: 'views/portfolio.html'})
    .otherwise({ redirectTo: '/' });
});
