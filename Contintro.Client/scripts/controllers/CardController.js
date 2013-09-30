contintroApp.factory('cardService', function($window){
	return {
		getCardInfoById: function(id) {
			return {
				description: "This is a test card",
				type: "good"
			};
		}
	};
});

contintroApp.controller("cardController", ["$scope", "cardService", function($scope, cardService){
	$scope.init = function(id) {
		$scope.id = id;
		angular.extend($scope, cardService.getCardInfoById(id));
	}
}])