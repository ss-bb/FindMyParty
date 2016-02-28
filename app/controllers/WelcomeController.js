app.controller('WelcomeController', ['$scope', function($scope) {
	init();

	$scope.categories = [{
			"image":'soiree.jpg',
			"alt":'soiree',
			"titre1":'appartement',
			"titre2":'party',
			"description":'Une description',
			"href":'#/event'
		},
		{
			"image":'sport.jpg',
			"alt":'sport',
			"titre1":'sport',
			"titre2":'sport',
			"description":'Une description',
			"href":'#/event'
		},
		{
			"image":'voyage.jpg',
			"alt":'voyage/fete',
			"titre1":'voyage',
			"titre2":'voyage',
			"description":'Plus loin que la nuit et le jour',
			"href":'#/event'
		},
		{
			"image":'visite.jpg',
			"alt":'visite/fete',
			"titre1":'visite',
			"titre2":'visite',
			"description":'Une description',
			"href":'#/event'
		},
		{
			"image":'latin.jpg',
			"alt":'lorem ipsum',
			"titre1":'lorem',
			"titre2":'ipsum',
			"description":'Une description',
			"href":'#/event'
		}];

	console.log($scope.categories);
}]);