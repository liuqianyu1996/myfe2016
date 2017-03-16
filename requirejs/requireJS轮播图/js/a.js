/**
 * Created by LQY on 2017/2/14.
 */
require.config({
    paths:{
        "jquery":"jquery-1.12.4"
    }
})
define(['jquery'],function($){
    function Imgs(){
         this.defalutSettings = {
             selector:"#bigContainer1",
            imgs:[],
            arrowPos:"bottom",
            infoStyle:"square",
            speed:500
        }
        this.container = $('<div class="container"></div>');
        this.image= $('<div class="image"></div>');
        this.info = $('<ul class="info"></ul>');
        this.arrows = $('<div class="arrows"></div>');
        this.next=$('<span class="next">&gt;</span>');
        this.prev = $('<span class="prev">&lt;</span>');


    }
    Imgs.prototype.init=function(opts){
        $.extend(this.defalutSettings,opts);
        this.arrows.append(this.prev).append(this.next);
        this.container.append(this.image).append(this.info).append(this.arrows);
        for(var i=0;i<opts.imgs.length;i++){
            var $img=$(' <img src="'+opts.imgs[i]+'" alt=""/>');
            var $li=$('<li></li>');
            if(opts.infoStyle=="square"){
                $li.html(i+1);
            }else{
                $li.addClass("cricle");
            }
            this.info.append($li);
            this.image.append($img);
        }
        $('li',this.info).eq(0).addClass('selected');
        $('img',this.image).eq(0).addClass('selected');
        $(opts.selector).append(this.container);
        if(opts.arrowPos=="center"){
            this.next.addClass('center');
            this.prev.addClass('center');
            this.arrows.removeClass('bottom');
        }else{
            this.arrows.addClass('bottom');
        }
        var idx = 0;
        var that = this;
        $(this.info).on("mouseover","li",function(){
            idx = $(this).index()
            changeImg(idx);
        });

        $(this.next).on('click',function(){
            idx++;
            if(idx==opts.imgs.length){
                idx=0;
            }
            changeImg(idx);
        })
        $(this.prev).on('click',function(){
            idx--;
            if(idx==-1){
                idx=opts.imgs.length-1;
            }
            changeImg(idx);
        })
        this.container.hover(function(){
            clearInterval(that.timer);
        },function(){
            run();
        })
        run();
        function run(){
            that.timer = setInterval(function(){
                that.next.trigger("click");
            },opts.speed);
        }

        //为什么用this只有第一个动，window下的应该都动
        function changeImg(idx){
            for(var i=0 ; i < opts.imgs.length;i++){
                $('li',that.info).eq(idx).addClass('selected').siblings().removeClass('selected');
                $('img',that.image).eq(idx).addClass('selected').siblings().removeClass('selected');
            }
        }
    }
    return Imgs;
})
