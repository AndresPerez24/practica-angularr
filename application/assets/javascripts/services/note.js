angular.module('contact')
.factory('contactList', function contactListFactory(){
		return{
			all: function() {
				return $http.get('https://koombea-dummy-api.herokuapp.com/people');
			}
		}
	});