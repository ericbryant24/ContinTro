contintroApp.service('cardService', ["$window", "dataRepository", function($window, dataRepository){
	return {
		editCardDescription: function(cardId, description, callback) {
			var card = dataRepository.getCardById(cardId);
			if(card){
				card.description = description;
				dataRepository.editCard(card, function(error) {
					if(!error){
						callback();
					} else {
						console.log(error.message);
						callback(true);
						// todo handle error
					}
				});
			}
		}
	};
}]);
