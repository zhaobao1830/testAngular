/**
 * Created by zb on 2016/5/3.
 */
//(function(){
//    var app=angular.module('myApp',[])
//    app.controller('myCtrl',function($scope){
//        $scope.firstName="zz"
//        $scope.secondName="yy"
//        $scope.fullName=function(){
//            return $scope.firstName + " " + $scope.secondName;
//        }
//    })
//})()

angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
});