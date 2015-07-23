var mainAppName = 'myApp';

var mainApp = angular.module(mainAppName,['example']);

angular.element(document).ready(function(){
	angular.bootstrap(document,[mainAppName]);
});
