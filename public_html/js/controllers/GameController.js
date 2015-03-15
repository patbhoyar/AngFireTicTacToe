app.controller("GameController", function($scope, $firebaseObject, $location) {
    
    //var ref = new Firebase("https://angulartictactoe.firebaseio.com/-JkTdlfZPEk3T34B2huk");
    //$scope.gameData = $firebaseObject(ref);
    //console.log($scope.gameData);
    
    
    $scope.ref = new Firebase("https://angulartictactoe.firebaseio.com/");
    $scope.gameId = "-JkTdlfZPEk3T34B2huk";
    $scope.gameRef = $scope.ref.child($scope.gameId);
    $scope.gameData = $firebaseObject($scope.gameRef);
    
    $scope.boardClicked = function(x,y){
        console.log(x+", "+y);
    }

});