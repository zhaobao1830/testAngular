/**
 * Created by zb on 2016/6/20.
 */
var app=angular.module('myApp',[])
        .directive("hello",function(){
        var option={
            restrict:"AECM",
            template:"<h3><span ng-transclude></span>Hello, Directive</h3>",
            replace:true,
            transclude: true
        };
        return option
    })


//restrict 的取值可以有四种：
//
//A 用于元素的 Attribute，这是默认值
//E 用于元素的名称
//C 用于 CSS 中的 class
//M 注释