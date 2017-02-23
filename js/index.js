var missionInSw = true;
var conceptInSw = true;
var finalistInSw = true;

$(function(){
        
    
    setTimeout( firstAnimation, 1000);
    
    
    

//--scrollAnimation------------------------------------------
    
    
     var downSwitch = false; //var firstDisapper = true;
     var scrollPx;

     $(window).scroll(function () {
         
         scrollPx = $(this).scrollTop();
         
         // ダウンアイコン用 
         if (scrollPx < 10 && downSwitch) {
         
             $('#downIconWrapper')
                .css({ 'display': 'block' })
                .animate({'opacity':1.0, rotate: '-=90deg'},400);
             
             downSwitch=false;
             firstDisapper = true;
         
         }else if (scrollPx > 10 && !(downSwitch)) {
         
             $('#downIconWrapper')
                .animate({'opacity':0.0, rotate: '-=90deg'},
                         { duration: 400,
                           complete: function(){   $(this).css({ 'display': 'none' }); }
                          })
                .animate({ rotate: '90deg'},0);
             
             downSwitch=true;
             
         }
         
         //コンセプトのスクロールアニメーション
         
         if (scrollPx > missionPosY-100 && missionInSw){
            
         for(var i=1; i<8; i++){
             
            var pOrder = '#missionWrapper > p:nth-of-type('+i+')';
            $(pOrder).css({ 'top': 12*i +'%'});
        
            
            $(pOrder)
            .css({ 'left': 44 +'%'})
            .delay((i-1)*1200)
            .animate({ 'opacity':1.0 ,'left': 50 +'%'},2000);
             
         }
             
             
             missionInSw = false;  
             
         }
         
         if (scrollPx > conceptPosY && conceptInSw){
            /*
            $('#conceptWrapper > p')
            .css({left:-10+'%'})
            .animate({'opacity':1.0, 'left':0+'%'},1800);         
             conceptInSw = false;  
            */ 
             
             $('#conceptWrapper > p')
            .animate({'scale':0.8},0)
            .animate({'opacity':1.0, 'scale':1.0},2200);         
             conceptInSw = false;
             
         }
         
         
         // ファイナリストのスクロールアニメーション
         if (scrollPx > (finalistPosY+500) && finalistInSw){
         
            var numLength = $('.finalistNum').length;
    
            for(var i=0 ; i<numLength ; i++){
                $('.finalistNum:nth-child('+(i+1)+')')
                .css({'margin-top': 80+'px','opacity': 0.0 })
                .delay(i*400)
                .animate({'margin-top': 30+'px','opacity': 1.0 },800);
            }
             
            finalistInSw = false;   
         
         }
    
    });
    
    //トップからの距離の取得
    getTopPx();
    
//--Down-Event------------------------------- 
    
    $('#downIconWrapper')
      .on('click',function(){    $('html, body').animate({scrollTop: ($(window).height()-40)}, 800);    });
    
    
//--スクリーンサイズに合わせる
    var winHeight = $(window).height();
    $('#topViewWrapper')
      .css({ 'height': winHeight +'px' });
    
    $('#missionWrapper')
      .css({ 'height': winHeight +'px' });
    
    
//--ファイナリストの振り向きイベント
    $('.finalistNum')
    .on('click',function(){    
    
        var changeImg = $(this).find('img');
        var changeImgSrc = changeImg.attr('src');
        
        // frontを含む画像ではなかった場合
        if(changeImgSrc.indexOf("front")<0){
            changeImgSrc = insertStr(changeImgSrc, 21, 'front');
            changeImg.attr('src' ,changeImgSrc);
        }
        
        
        
        
    });
    
})

function firstAnimation(){

    //--FirstAnimation---------------------------
    
    var animateSpan = 800,timeInterval = 800;
    
    $('#logoWrapper > #logoCrown')
      .animate({'opacity':0.0,'top': 5+'%'/*,'scale' : 0.9*/},0)
      .delay(timeInterval)
      .animate({'opacity':1.0,'top': 0+'%'/*,'scale':1.0*/},animateSpan);
    
    $('#logoWrapper > #logoMissKeio')
      .animate({'opacity':0.0, 'left':42+'%'},0)
      .animate({'opacity':1.0, 'left':50+'%'},animateSpan);
    
    $('#logoWrapper > #logoContest')
      .animate({'opacity':0.0, 'left':54+'%'},0)
      .animate({'opacity':1.0, 'left':50+'%'},animateSpan);
    
    $('#logoWrapper > #logoFrom1986')
      .animate({'opacity':0.0/*, 'top':231+'px'*/},0)
      .delay(timeInterval*2)
      .animate({'opacity':1.0/*, 'top':191+'px'*/},animateSpan);
    
//--After-Logo-appear------    
    
    $('#menuRectWrapper > #menuRectBar1')
      .animate({'opacity':0.0,'left': -40+'px'},0)
      .delay(timeInterval*3)
      .animate({'opacity':1.0,'left': 8+'px'},animateSpan/2);
    
    $('#menuRectWrapper > #menuRectBar2')
      .animate({'opacity':0.0,'left': -40+'px'},0)
      .delay(timeInterval*3+100)
      .animate({'opacity':1.0,'left': 8+'px'},animateSpan/2);
    
    $('#menuRectWrapper > #menuRectBar3')
      .animate({'opacity':0.0,'left': -40+'px'},0)
      .delay(timeInterval*3+200)
      .animate({'opacity':1.0,'left': 8+'px'},animateSpan/2);
    
    
    
    $('#downIconWrapper')
      .animate({'opacity':0.0, rotate: '+=90deg'},0)
      .delay(timeInterval*3)
      .animate({'opacity':1.0, rotate: '-=90deg' },animateSpan/2);

}

//トップからコンセプトの縦の距離を計算
var missionPosY,conceptPosY,finalistPosY,rect,elm;
function getTopPx() {

    elm = document.getElementById("conceptWrapper");
    rect = elm.getBoundingClientRect();
    conceptPosY= rect.top+$(window).scrollTop();
    
    elm = document.getElementById("missionWrapper");
    rect = elm.getBoundingClientRect();
    missionPosY = rect.top+$(window).scrollTop();
    
    elm = document.getElementById("finalistsWrapper");
    rect = elm.getBoundingClientRect();
    finalistPosY = rect.top+$(window).scrollTop();
    
}
//文字列を挿入する関数
function insertStr(str, index, insert) {
    return str.slice(0, index) + insert + str.slice(index, str.length);
}





//個人ページに飛ばす関数たち。ごり押し感すごいけど時間ないからしゃあない！

function no1Jump(){
    
    function where(){
        
        var gotten = $.cookie("VOTE_SNS_AUTHED");
        
        if( gotten ){
            location.href = "./finalist1vote.html";
        }else{
            location.href = "./finalist1.html";   
        }
        
    }  
    
    setTimeout(where , 1000);
}

function no2Jump(){

    function where(){
        var gotten = $.cookie("VOTE_SNS_AUTHED");
        
        if( gotten ){
            location.href = "./finalist2vote.html";
        }else{
            location.href = "./finalist2.html";   
        }
    }
    
    setTimeout(where , 1000);
    
}

function no3Jump(){

    function where(){
        var gotten = $.cookie("VOTE_SNS_AUTHED");
        
        if( gotten ){
            location.href = "./finalist3vote.html";
        }else{
            location.href = "./finalist3.html";   
        }
    }
    
    setTimeout(where , 1000);
    
}


function no4Jump(){

    function where(){
        var gotten = $.cookie("VOTE_SNS_AUTHED");
        
        if( gotten ){
            location.href = "./finalist4vote.html";
        }else{
            location.href = "./finalist4.html";   
        }
    }
    
    setTimeout(where , 1000);
    
}


function no5Jump(){

    function where(){
        var gotten = $.cookie("VOTE_SNS_AUTHED");
        
        if( gotten ){
            location.href = "./finalist5vote.html";
        }else{
            location.href = "./finalist5.html";   
        }
    }
    
    setTimeout(where , 1000);
    
}


function no6Jump(){

    function where(){
        var gotten = $.cookie("VOTE_SNS_AUTHED");
        
        if( gotten ){
            location.href = "./finalist6vote.html";
        }else{
            location.href = "./finalist6.html";   
        }
    }
    
    setTimeout(where , 1000);
    
}

//------------------------------------------------
