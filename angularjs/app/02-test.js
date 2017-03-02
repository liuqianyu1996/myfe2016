var myApp=angular.module('myApp',[]);


myApp.controller('firstController',function($scope){
	//$scope.name="laoshan";  //0xa12b3c
	$scope.name={
		'data':'laoshan'
	}

	//$scope.name="laoshan123" 0x2c4a2b 
	//console.log($scope);

});

myApp.controller('secondController',function($scope){
	$scope.name=$scope.$$prevSibling.name;
	//console.log($scope.$$prevSibling.name);
})
/*
function firstController($scope){
	$scope.name="laoshan";
}*/