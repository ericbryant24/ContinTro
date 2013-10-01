contintroApp.service("dataRepository", ["serverCom", function(serverCom){
	var board = {}; 	

	return {
		setCurrentBoard: function(id, callback) {
			serverCom.getBoardById(id, function(error, b){
				if(!error) {
					board = b;
				} else {
					callback(error.message);
				}
			});

			callback(false, board);
		},
		getCurrentBoard: function() {
			return board;
		},
		editCard: function(card, callback) {
			callback();
		},
		getCardById: function(id) {
			return board.cards
				.filter(function(card){
					return card.id === id;
				})[0];
		}
	};
}]);

