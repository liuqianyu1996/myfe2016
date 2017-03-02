var myApp=angular.module('myApp',[],function($provide){
	//console.log(1);
	/* provider数据提供形式
	$provide.provider('customerService',function(){
		this.$get=function(){
			return {
				'message':'laoshan so happy'
			}
		}
	})*/

	//工厂模式提供数据
	/*
	$provide.factory('customerService',function(){
		//return [1,2,3,4,5];
		return "laoshan";
	});*/

	$provide.service('customerService',function(){
		return "laoshan";
	})

});

myApp.controller('firstController',function($scope,customerService){
	$scope.names=customerService;
	//console.log(customerService);
});

myApp.controller('secondController',function($scope,customerService){
	$scope.name=customerService;
})