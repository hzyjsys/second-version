/*
* @Author: JMW
* @Date:   2017-03-27 16:43:07
* @Last Modified by:   JMW
* @Last Modified time: 2017-04-25 11:26:52
*/
'use strict';
jQuery(document).ready(function($) {
    var explorer =navigator.userAgent;
	//改变窗口大小浏览器自动刷新
	window.onresize=function(){ 
        location.reload(); 
    }; 
	//logo切换
    var flag=0;
    $(".logo").click(function(){
        if(flag==1){
            $(".logo").find("img").attr("src","../images/logo2.png");
            flag=0;
        }else{
            $(".logo").find("img").attr("src","../images/logo1.png");
            flag=1;
        }
    });
	// 导航下拉
    $('#nav-bar .nav li').mouseenter(function(event) {
        $(this).addClass('on').siblings('li').removeClass('on');
        $(this).find('dl').stop().slideDown().parents('li').siblings('li').find('dl').stop().slideUp();
    }).mouseleave(function(event) {
        $(this).removeClass('on');
        $(this).find('dl').stop().slideUp(); 
    });
    //左侧导航栏跟随
    // if (explorer.indexOf("MSIE") >= 0||explorer.indexOf("rv:11.0")>=0) {
    //     var l=$(".left-nav").offsetLeft;
    //     console.log(l);
    //     $(window).scroll( function() {
    //         var m =$(document).scrollTop();
    //         if(m>570&&$(window).width()>=1200){
    //             $(".left-nav").css({"position":"fixed","top":"50px","left":l+"px","marginLeft":"0"});
    //         }else if(m>570&&$(window).width()<1200&&l<=0){
    //             $(".left-nav").css({"position":"fixed","top":"50px","left":"0"});
    //         }else{
    //             $(".left-nav").css({"position":"absolute","top":"50px","left":"0"});
    //         }
    //     });
    // }else{
    //     $(window).scroll( function() {
    //         var m =$(document).scrollTop();
    //         if(m>570){
    //             $(".left-nav").css("top",(m-480)+"px");
    //         }else{
    //             $(".left-nav").css("top","50px");
    //         }
    //     });
    // }   
});