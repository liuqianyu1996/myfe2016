var myApp=angular.module('myApp',[]);

myApp.controller('firstController',function($scope){
	$scope.num=123456678;

	$scope.today=new Date();

	$scope.data={
		'message':'TGUJGFR',
		'newlit':'hsdkjfhsk',
		'city':[
			{'name':'上海','py':'shanghai'},
			{'name':'北京','py':'beijing'},
			{'name':'广州','py':'guangzhou'},
			{'xx':'laoshan'}
		]
	}
})