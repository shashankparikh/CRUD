angular.module("classifieds",["ngMaterial","ui.router","ui.carousel"])
        .config(function($mdThemingProvider , $stateProvider){


        	$mdThemingProvider.theme('default')
        	.primaryPalette('teal')
        	.accentPalette('orange');
             

             $stateProvider
             .state('stateone',{
             	url : '/stateone',
             	template : '{{message}}',
             	controller : 'stateonectrl'
             })
             .state('statetwo',{
             	url : '/statetwo',
             	template : '<h1>state two</h1>'
             });	


        })
        .controller('stateonectrl',function($scope){
        	$scope.message = "State One";
        });
	