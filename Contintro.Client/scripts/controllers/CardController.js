contintroApp.controller("cardController", ["$scope", "cardService", function($scope, cardService){
	$scope.init = function(card) {
		angular.extend($scope, card);
		$scope.editedDescription = $scope.description;
		$scope.editing = false;
	}

	$scope.saveEdits = function() {
		cardService.editCardDescription($scope.id, $scope.editedDescription, function(error){
			if(!error) {
				$scope.description = $scope.editedDescription;
				$scope.editing = false;
			}
			else {
				// todo: handle error
			}
		});
	};

	$scope.cancelEdits = function() {
		$scope.editing = false;
	};

	$scope.edit = function() {
		$scope.editing = true;
	};

	$scope.changeType = function(newType) {
	};
}])