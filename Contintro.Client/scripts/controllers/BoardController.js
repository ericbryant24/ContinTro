contintroApp.factory("dataRepository", function(){
	var data = {
		boards: [
			{
				id: 1,
				cards: [
					{
						id: 1,
						description: "A good card",
						type: "good"
					},
					{
						id: 2,
						description: "Another good card",
						type: "good"
					},
					{
						id: 3,
						description: "A bad card",
						type: "bad"
					},
					{
						id: 4,
						description: "A confusing card",
						type: "confusing"
					},
				]
			}
		]
	};
	return {
		getBoardById: function(id) {
			return data.boards.filter(function(board){
				return board.id === id;
			})[0];
		},
		editCardDescription: function(cardId, description, callback) {
			callback();
		}
	}
});

contintroApp.service("boardService", ["$window", "dataRepository", function($window, dataRepository){
	return {
		getAllCards: function(boardId) {
			var board = dataRepository.getBoardById(boardId);
			return !board ? [] : board.cards;
		},

		getGoodCards: function(boardId) {
			var board = dataRepository.getBoardById(boardId);
			return !board ? [] :
				board.cards
					.filter(function(card){
						return card.type === "good";
					});
		},

		getBadCards: function(boardId) {
			var board = dataRepository.getBoardById(boardId);
			return !board ? [] :
				board.cards
					.filter(function(card){
						return card.type === "bad";
					});
		},

		getConfusingCards: function(boardId) {
			var board = dataRepository.getBoardById(boardId);
			return !board ? [] :
				board.cards 
					.filter(function(card){
						return card.type === "confusing";
					});
		}
	};
}]);

contintroApp.controller("boardController", ['$scope', 'boardService', function($scope, boardService){
	$scope.init = function(id){
		$scope.id = id;
		$scope.cards = boardService.getAllCards($scope.id);
		$scope.goodCards = boardService.getGoodCards($scope.id);
		$scope.badCards = boardService.getBadCards($scope.id);
		$scope.confusingCards = boardService.getConfusingCards($scope.id);
	};
}]);