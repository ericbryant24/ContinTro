contintroApp.service("dataRepository", ["messageService", "serverCom", function(messageService, serverCom){
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
			serverCom.editCard(card, function(error, editedCard) {
				if(!error){
					board.cards.forEach(function(value, index, array) {
						if(value.id === card.id){
							array[index] = card;
						}
					});
					messageService.publish("CARD_EDIT", {card: editedCard});
					callback();
				} else {
					callback(error.message);
				}
			});
		},
		addCard: function(card, callback) {
			serverCom.addCard(card, board.Id, function(error, cardId) {
				if(!error){
					messageService.publish("CARD_EDIT", {type: card.type});
					card.id = cardId;
					board.cards.push(card)
					callback();
				} else {
					callback(error.message);
				}
			});
		},
		getCardById: function(id) {
			return board.cards
				.filter(function(card){
					return card.id === id;
				})[0];
		}
	};
}]);

