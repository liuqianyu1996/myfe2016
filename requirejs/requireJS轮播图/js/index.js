/**
 * Created by LQY on 2017/2/14.
 */
require.config({
    paths:{
        "jquery":"jquery-1.12.4"
    }
})
require(['jquery','a'],function($,Imgs){
    var aImgArr1 = ["imgs/1.jpg","imgs/2.jpg","imgs/3.jpg","imgs/4.jpg"];
    var settings1={
        selector:"#bigContainer1",
        imgs:aImgArr1,
        arrowPos:"bottom",
        infoStyle:"square",
        speed:500
    }
    var imgs1 = new Imgs(settings1);
    imgs1.init(settings1);
    var aImgArr2 = ["imgs/1.jpg","imgs/2.jpg","imgs/3.jpg"];
    var settings2={
        selector:"#bigContainer2",
        imgs:aImgArr2,
        arrowPos:"center",
        infoStyle:"cricle",
        speed:1000
    }
    var imgs2 = new Imgs();
    imgs2.init(settings2);
})