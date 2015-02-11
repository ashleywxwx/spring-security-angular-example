angular.module('hello', [ 'ngRoute' ]).config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl : 'home.html',
		controller : 'home'
	}).when('/login', {
		templateUrl : 'login/login.html',
		controller : 'navigation'
	}).otherwise('/');

}).controller('home', function($scope, $http) {
	$http.get('/resource/').success(function(data) {
		$scope.greeting = data;
	})
});
