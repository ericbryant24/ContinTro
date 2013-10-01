contintroApp.controller("boardController", ['$scope', 'messageService', 'boardService', function($scope, messageService, boardService){
	$scope.init = function(id){
		boardService.setCurrentBoard(id, function() {
			$scope.id = id;
			$scope.cards = boardService.getAllCards($scope.id);
			$scope.goodCards = boardService.getGoodCards($scope.id);
			$scope.badCards = boardService.getBadCards($scope.id);
			$scope.confusingCards = boardService.getConfusingCards($scope.id);
		});
	};

	messageService.subscribe("CARD_EDIT", function(event, params) {
		if(params.card.type === "good"){
			$scope.goodCards.forEach(function(value, index, array) {
				if(value.id === params.card.id){
					array[index] = params.card;
				}
			});
		} else if(params.card.type === "bad") {
			$scope.badCards.forEach(function(value, index, array) {
				if(value.id === params.card.id){
					array[index] = params.card;
				}
			});
		} else if(params.card.type === "confused") {
			$scope.confusingCards.forEach(function(value, index, array) {
				if(value.id === params.card.id){
					array[index] = params.card;
				}
			});
		} else {
			// todo: handle error
		}
	});
}]);