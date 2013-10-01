contintroApp.controller("boardController", ['$scope', 'boardService', function($scope, boardService){
	$scope.init = function(id){
		boardService.setCurrentBoard(id, function() {
			$scope.id = id;
			$scope.cards = boardService.getAllCards($scope.id);
			$scope.goodCards = boardService.getGoodCards($scope.id);
			$scope.badCards = boardService.getBadCards($scope.id);
			$scope.confusingCards = boardService.getConfusingCards($scope.id);
		});
	};
}]);