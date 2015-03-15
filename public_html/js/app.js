var app = angular.module("AngFireTicTacToe", ["firebase"]);

app.controller("MainCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://angulartictactoe.firebaseio.com/");
  
  $scope.data = $firebaseObject(ref);
});