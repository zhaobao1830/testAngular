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


//restrict ��ȡֵ���������֣�
//
//A ����Ԫ�ص� Attribute������Ĭ��ֵ
//E ����Ԫ�ص�����
//C ���� CSS �е� class
//M ע��