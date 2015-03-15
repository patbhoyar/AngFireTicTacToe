app
.directive('selectBlock', function ($firebaseArray) {
    return {
        link: function ($scope, element, attrs) {
            element.bind('click', function () {
                var indices = attrs.selectBlock.split(",");
                var newIndices = $scope.gameData.board;
                
                if(indices[0] === '0' && indices[1] === '0'){ newIndices[0] = $scope.gameData.playerIcon; }
                else if(indices[0] === '0' && indices[1] === '1'){ newIndices[1] = $scope.gameData.playerIcon; }
                else if(indices[0] === '0' && indices[1] === '2'){ newIndices[2] = $scope.gameData.playerIcon; }
                else if(indices[0] === '1' && indices[1] === '0'){ newIndices[3] = $scope.gameData.playerIcon; }
                else if(indices[0] === '1' && indices[1] === '1'){ newIndices[4] = $scope.gameData.playerIcon; }
                else if(indices[0] === '1' && indices[1] === '2'){ newIndices[5] = $scope.gameData.playerIcon; }
                else if(indices[0] === '2' && indices[1] === '0'){ newIndices[6] = $scope.gameData.playerIcon; }
                else if(indices[0] === '2' && indices[1] === '1'){ newIndices[7] = $scope.gameData.playerIcon; }
                else if(indices[0] === '2' && indices[1] === '2'){ newIndices[8] = $scope.gameData.playerIcon; }
                
                $(element).text($scope.gameData.playerIcon);
                $(element).attr('disabled','disabled');
                
                $scope.gameRef.update({
                    playerTurn:$scope.changePlayer(),
                    playerIcon:$scope.changePlayerTurn(),
                    board: newIndices
                });
            });
            
            $scope.changePlayer = function(){
                if($scope.gameData.playerTurn === $scope.gameData.player1)
                    return $scope.gameData.player2;
                else
                    return $scope.gameData.player1;
            }
            
            $scope.changePlayerTurn = function(){
                if($scope.gameData.playerIcon === $scope.gameData.player1Icon)
                    return $scope.gameData.player2Icon;
                else
                    return $scope.gameData.player1Icon;
            }
        }
    };
});