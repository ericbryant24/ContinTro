contintroApp.service("messageService", ["$rootScope", function($rootScope) {
	return {
		publish: function(name, params) {
			$rootScope.$emit(name, params);
		},
		subscribe: function(name, listener) {
			$rootScope.$on(name, listener);
		}
	}
}]);