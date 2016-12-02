/**
 * Created by LQY on 2016/11/29.
 */
(function(){
    var ocontainer = document.getElementById ('container');
    var oBigImg = document.getElementById ('big-img');
    var aBigPic = oBigImg.getElementsByTagName ('img');
    var oSmallImg = document.getElementById ('small-img');
    var aSmallPic = oSmallImg.getElementsByTagName ('img');
    var oPrev = document.getElementById ('prev');
    var oNext = document.getElementById ('next');
    var oInfo = document.getElementById ('info');
    var oCurrentPage = document.getElementById ('current-page');
    var iNow = 0;
    var iZIndex = 9;
    oPrev.onmouseover = oNext.onmouseover =function(){
        if(this == oPrev ){
            animate(oPrev , {opacity:100});
        }else{
            animate (oNext ,{opacity:100})
        }

    }
    oPrev.onmouseout = oNext.onmouseout =function(){
        if(this == oPrev ){
            animate(oPrev , {opacity:0});
        }else{
            animate (oNext ,{opacity:0})
        }

    }
    oPrev.onclick = oNext.onclick = function(){
        if(this == oNext){
            iNow ++ ;
            if(iNow == aBigPic.length){
                iNow = 0;
            }
        }else{
            iNow --;
            if(iNow == -1){
                iNow = aBigPic.length -1;
            }

        }
        changeImg (iNow);
    }
    for(var i = 0 ; i < aSmallPic.length; i++){
        aSmallPic [i].index = i;
        aSmallPic[i].onmouseover = function(){
            animate (this,{opacity:100})
        }
        aSmallPic[i].onmouseout = function(){
            if(iNow != this.index ) {
                animate(this, {opacity: 30})
            }
        }
        aSmallPic [i].onclick = function(){
            if(iNow != this.index) {
                changeImg(this.index)

            }
        }

    }
    var timer;
    function run(){
        timer = setInterval(function(){
            oNext.onclick ();
        },1000)
    };
    run();
    ocontainer.onmouseover = function(){
        clearInterval (timer);
    }
    ocontainer.onmouseout = function(){
        run();
    }

    function changeImg(index){
        iNow = index;
        aBigPic[index].style.opacity="0";
        aBigPic [index].style.filter =  "alpha(opacity=0)"
        aBigPic[index].style.zIndex = ++iZIndex ;
        animate(aBigPic[index],{opacity:100})
        oNext.style.zIndex = oPrev.style.zIndex = oInfo.style.zIndex = ++iZIndex ;
        for(var i = 0; i < aSmallPic.length ; i++ ){
            aSmallPic [i].style.opacity = "0.3";
            aSmallPic [i].style.filter = "alpha(opacity=30)"
        }
        //animate (aSmallPic [index],{opacity: 100})ÎÊÀÏÊ¦
        oCurrentPage.innerHTML = index + 1;
        var iLeft = 0;
        if(index == 0 || index == 1){
            iLeft = 0;
        }else if(index == aSmallPic.length - 2 || index == aSmallPic.length - 1){
            iLeft = aSmallPic.length/2;
        }else{
            iLeft = index - 1;
        }
        animate (oSmallImg, {left : -iLeft * aSmallPic [0].offsetWidth});

    }










})()