var app = angular.module("tictactoe", ["firebase"]);

app
.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/home', {
          templateUrl: 'pages/home.html',
          controller: 'HomeController'
        }).
        when('/preGame', {
          templateUrl: 'pages/preGame.html',
          controller: 'PreGameController'
        }).
        when('/playGame', {
          templateUrl: 'pages/playGame.html',
          controller: 'GameController'
        }).
        otherwise({
          redirectTo: '/home'
        });
    }])
.controller("HomeController", function($scope, $firebaseObject, $location) {
    
    $scope.loadPreGame = function(){
        $location.path('/preGame');
    }
    
//var ref = new Firebase("https://angulartictactoe.firebaseio.com/");
  //$scope.data = $firebaseObject(ref);
});