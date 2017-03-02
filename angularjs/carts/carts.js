/**
 * Created by LQY on 2017/2/22.
 */
function cartController($scope){
    $scope.carts = [
        {
            pId:1000,
            pName:'iphone6s',
            pnum:3,
            price:5400,
        },
        {
            pId:1200,
            pName:'mac',
            pnum:3,
            price:15400,
        },
        {
            pId:2000,
            pName:'iphone7s',
            pnum:10,
            price:7400,
        },
        {
            pId:3000,
            pName:'ipad',
            pnum:21,
            price:2400,
        }

    ];

    function idx(id){
        var index = -1;
        angular.forEach($scope.carts,function(value,key){
            if(id==value.pId){
                index = key;
            }
        })
        return index;
    }
    $scope.add=function(id){
        var index = idx(id);
        $scope.carts[index].pnum++;
    }
    $scope.reduce = function(id){
        var index  = idx(id);
        $scope.carts[index].pnum--;
        if($scope.carts[index].pnum<=0){
            $scope.carts.splice(index,1);
        }
    }
    $scope.sum=function(){
        var sum=0;
        angular.forEach($scope.carts,function(value, key){
            sum+=value.price*value.pnum;
        });

        return sum;
    }
    $scope.totol = function(){
        var totol = 0;
        angular.forEach($scope.carts,function(value,key){
            totol += parseInt(value.pnum)
        })
        return totol;
    }
    $scope.del=function(id){
        var index= -1;
        angular.forEach($scope.carts,function(value,key){
            if(id == value.pId){
                index = key;
            }
        })
        if(index !=-1){
            $scope.carts.splice(index,1);
        }
    }
    $scope.destory = function(){
        $scope.carts = [];
    }
}
