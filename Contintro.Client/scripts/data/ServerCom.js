contintroApp.factory("serverCom", function() {
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
		getBoardById: function(id, callback) {
			callback(false, data.boards[0]);
		}
	};
});