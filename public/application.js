var mainAppName = 'myApp';

var mainApp = angular.module(mainAppName, ['example']);

var mainApp = angular.module(mainAppName, ['ngRoute', 'example']);


mainApp.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);
angular.element(document).ready(function() {
    angular.bootstrap(document, [mainAppName]);
});
