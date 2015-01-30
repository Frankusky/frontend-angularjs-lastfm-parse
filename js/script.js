// Javascript Code. 	
Parse.initialize("17bWxlwghmf6ipXa8Aezb6RBkVM476ZYmIb2914E", "DyrgpCflF2dh8elInX9Liukus3Ma4Dc1KLTx0L3R");

angular.module('AuthApp', []).run(['$rootScope', function($scope) {
	$scope.scenario = 'Sign up';
	$scope.currentUser = Parse.User.current();
	
	$scope.signUp = function(form) {
		var user = new Parse.User();
		user.set("email", form.email);
		user.set("username", form.username);
		user.set("password", form.password);
		
		user.signUp(null, {
			success: function(user) {
				$scope.currentUser = user;
				$scope.$apply();
			},
			error: function(user, error) {
				alert("Unable to sign up:  " + error.code + " " + error.message);
			}
		});
	};
	
	$scope.logIn = function(form) {
		Parse.User.logIn(form.username, form.password, {
			success: function(user) {
				$scope.currentUser = user;
				$scope.$apply();
			},
			error: function(user, error) {
				alert("Unable to log in: " + error.code + " " + error.message);
			}
		});
	};
	
	$scope.logOut = function(form) {
		Parse.User.logOut();
		$scope.currentUser = null;
	};
}]);

