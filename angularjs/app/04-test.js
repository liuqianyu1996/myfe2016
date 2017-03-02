var myApp=angular.module('myApp',[]);

/*
myApp.controller('firstController',function($scope){
	$scope.name="laoshan";
});*/

myApp.controller('firstController',['$scope',function($lao){
	$lao.name="laoshan";
}])