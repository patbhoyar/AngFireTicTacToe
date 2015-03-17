app.controller("GameController", function($scope, $firebaseObject, $location) {
    
    //var ref = new Firebase("https://angulartictactoe.firebaseio.com/-JkTdlfZPEk3T34B2huk");
    //$scope.gameData = $firebaseObject(ref);
    //console.log($scope.gameData);
    
    
    $scope.ref = new Firebase("https://angulartictactoe.firebaseio.com/");
    $scope.gameId = "-JkTdlfZPEk3T34B2huk";
    $scope.gameRef = $scope.ref.child($scope.gameId);
    $scope.gameData = $firebaseObject($scope.gameRef);

    $scope.getGameStatus = function(){
        /*
         *  BOARD STRUCTURE
         *  0 | 1 | 2
         *  3 | 4 | 5
         *  6 | 7 | 8
         *
         *  Possible Winning Scenarios
         *  0,1,2 | 3,4,5 | 6,7,8
         *  0,3,6 | 1,4,7 | 2,5,8
         *  0,4,8 | 2,4,6
         *
         * Game Status - 0-> Not Started, 1-> In Progress, 2-> Completed
         */
        
        if($scope.gameData.board[0] === $scope.gameData.board[1] && $scope.gameData.board[1] === $scope.gameData.board[2]){
            return {gameStatus : 2};
        }else if($scope.gameData.board[3] === $scope.gameData.board[4] && $scope.gameData.board[4] === $scope.gameData.board[5]){
            return {gameStatus : 2};
        }else if($scope.gameData.board[6] === $scope.gameData.board[7] && $scope.gameData.board[7] === $scope.gameData.board[8]){
            return {gameStatus : 2};
        }else if($scope.gameData.board[0] === $scope.gameData.board[3] && $scope.gameData.board[3] === $scope.gameData.board[6]){
            return {gameStatus : 2};
        }else if($scope.gameData.board[1] === $scope.gameData.board[4] && $scope.gameData.board[4] === $scope.gameData.board[7]){
            return {gameStatus : 2};
        }else if($scope.gameData.board[2] === $scope.gameData.board[5] && $scope.gameData.board[5] === $scope.gameData.board[8]){
            return {gameStatus : 2};
        }else if($scope.gameData.board[0] === $scope.gameData.board[4] && $scope.gameData.board[4] === $scope.gameData.board[8]){
            return {gameStatus : 2};
        }else if($scope.gameData.board[2] === $scope.gameData.board[4] && $scope.gameData.board[4] === $scope.gameData.board[6]){
            return {gameStatus : 2};
        }else{
            return {gameStatus : 1};
        }
    }
    
    $scope.resetGame = function(){
        $scope.resetBlock();
        $scope.gameData.$loaded().then(function() {
            $scope.gameRef.update({
                matchId: 1,
                player1: $scope.gameData.player1,
                player2: $scope.gameData.player2,
                player1Icon: $scope.gameData.player1Icon,
                player2Icon: $scope.gameData.player2Icon,
                board:['','','','','','','','',''],
                playerTurn:$scope.gameData.player1,
                playerIcon:$scope.gameData.player1Icon,
                gameStatus:0 
            });
        });
    }
    
    $scope.resetBlock = function(){
        $("#board").find("button").each(function(){
            $(this).text('');
            $(this).removeAttr('disabled');
        });
    }
    
    $scope.gameOver = function(){
        console.log($scope.gameData.playerTurn);
    }
});