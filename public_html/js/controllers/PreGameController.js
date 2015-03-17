app.controller("PreGameController", function($scope, $location) {
    
    var ref = new Firebase("https://angulartictactoe.firebaseio.com/");
    
    $scope.startGame = function(){
        
        if(typeof $scope.player1 === 'undefined' || typeof $scope.player2 === 'undefined'){
            alert("Please enter both Player Names");
            return false;
        }
        
        if(typeof $scope.player1Selection === 'undefined' || typeof $scope.player2Selection === 'undefined'){
            alert("Please Select your Symbol");
            return false;
        }
        
        ref.push({
            matchId: 1,
            player1: $scope.player1,
            player2: $scope.player2,
            player1Icon: $scope.player1Selection,
            player2Icon: $scope.player2Selection,
            board:['','','','','','','','',''],
            playerTurn:$scope.player1,
            playerIcon:$scope.player1Selection,
            gameStatus:0 //0-> Not Started, 1-> In Progress, 2-> Completed
        });
        $location.path('/playGame');
    }
    
    $scope.selectedIcon = function(playerNumber, playerSelection){
        if(playerNumber === 1){
            if(playerSelection === 'x'){
                $scope.player1Selection = 'X';
                $scope.player2Selection = 'O';
            }else{
                $scope.player1Selection = 'O';
                $scope.player2Selection = 'X';
            }
        }else{
            if(playerSelection === 'x'){
                $scope.player2Selection = 'X';
                $scope.player1Selection = 'O';
            }else{
                $scope.player2Selection = 'O';
                $scope.player1Selection = 'X';
            }
        }
    }
    

});