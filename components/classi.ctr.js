(function()
{
	"use strict";
angular.module("classifieds")
.controller("classifiedsctrl",function($scope , $http , $mdSidenav, $mdToast , $mdDialog){

     $http.get('data/classified.json').then(function(classifieds){

     $scope.classifiedss = 	classifieds.data;
     
});
    $scope.opensidebar = function()
     {
    	$mdSidenav('left').open();
     }
   
	
	$scope.closesidebar = function()
     {
    	$mdSidenav('left').close();
     }

     $scope.showtoast  = function(message)
     {

     	$mdToast.show(
     		$mdToast.simple()
     		.content(message)
     		.position('top,right')
     		.hideDelay(5000)

     		);
     }

     $scope.savebutton = function(classifie)
     {
     	if(classifie)
     	{
     	$scope.classifiedss.push(classifie);
     	$scope.classifie = {};
     	$scope.closesidebar();
     	$scope.showtoast("Item is saved");
     }
     }

     $scope.editbutton = function(classifiededit)
     {
     	$scope.editing = "true";
     	$scope.opensidebar();
     	$scope.classifie=classifiededit;
     }

     $scope.saveedit = function()
     {
     	$scope.editing = "false";
     	$scope.classifie = {};
        $scope.showtoast("Item is edited");

     }
     
     $scope.deletebutton = function(classifieds)
     {
     	var confirm = $mdDialog.confirm()
     	.title("Are You Sure to delete " + classifieds.title)
     	.ok("Yes")
     	.cancel("No");
     	$mdDialog.show(confirm).then(function(){
     		var index = $scope.classifiedss.indexOf(classifieds);
        
         	 $scope.classifiedss.splice(index,1);
         
     	});
         
        
     }

    });
	

})();