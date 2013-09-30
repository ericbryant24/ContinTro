contintroApp.factory("boardRepository", function(){
	data = {
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
			return data.boards[0];
		},
		saveCard: function(cardId, boardId) {
		}
	}
});

contintroApp.service("boardService", ["$window", "boardRepository", function($window, boardRepository){
	return {
		getAllCardIds: function(boardId) {
			return boardRepository.getBoardById(boardId).cards
				.map(function(card) {
					return card.id;
				});
		},

		getGoodCardIds: function(boardId) {
			return boardRepository.getBoardById(boardId).cards
				.filter(function(card){
					return card.type === "good";
				})
				.map(function(card) {
					return card.id;
				});
		},

		getBadCardIds: function(boardId) {
			return boardRepository.getBoardById(boardId).cards
				.filter(function(card){
					return card.type === "bad";
				})
				.map(function(card) {
					return card.id;
				});
		},

		getConfusingCardIds: function(boardId) {
			return boardRepository.getBoardById(boardId).cards
				.filter(function(card){
					return card.type === "confusing";
				})
				.map(function(card) {
					return card.id;
				});
		}
	};
}]);

contintroApp.controller("boardController", ['$scope', 'boardService', function($scope, boardService){
	$scope.init = function(id){
		$scope.id = id;
	};

	$scope.cards = boardService.getAllCardIds($scope.id);
	$scope.goodCards = boardService.getGoodCardIds($scope.id);
	$scope.badCards = boardService.getBadCardIds($scope.id);
	$scope.confusingCards = boardService.getConfusingCardIds($scope.id);
}]);