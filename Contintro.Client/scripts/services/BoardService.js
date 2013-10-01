contintroApp.service("boardService", ["$window", "dataRepository", function($window, dataRepository){
	return {
		setCurrentBoard: function(id, callback) {
			dataRepository.setCurrentBoard(id, function(error){
				if(!error) {
					callback();
				} else {
					// todo: handle error
				}
			});
		},
		getAllCards: function(boardId) {
			board = dataRepository.getCurrentBoard();
			if(board && board.cards) {
				return board.cards;
			} else {
				// todo: handle error
			}
		},

		getGoodCards: function(boardId) {
			board = dataRepository.getCurrentBoard();
			if(board && board.cards) {
				return board.cards
					.filter(function(card){
						return card.type === "good";
					});
			} else {
				// todo: handle error
			}
		},

		getBadCards: function(boardId) {
			board = dataRepository.getCurrentBoard();
			if(board && board.cards) {
				return board.cards
					.filter(function(card){
						return card.type === "bad";
					});
			} else {
				// todo: handle error
			}
		},

		getConfusingCards: function(boardId) {
			board = dataRepository.getCurrentBoard();
			if(board && board.cards) {
				return board.cards
					.filter(function(card){
						return card.type === "confusing";
					});
			} else {
				// todo: handle error
			}
		}
	};
}]);

