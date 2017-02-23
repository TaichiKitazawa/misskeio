var menuSwitch = true;
var animateSpan = 400;

$(function(){
    
    
    $('#menuRectWrapper')
    .on('click',function(){   menuOpen();   });
  
    $('.haveChild')
    .on('click',function(){   childMenuOpen();   });

    
    //for android
    var agent = navigator.userAgent;
    //alert(agent);
    if(agent.search(/Android/) != -1){
        //alert("you have android!!");
        //document.querySelector("[name=viewport]").setAttribute("content", "width=600, initial-scale=0.1, user-scalable=no");
    }
    
    var userAgent = window.navigator.userAgent.toLowerCase();
    
   // alert( userAgent );
    
    
    //メニューのリサイズ対策
    $(window).resize(function(){
            var menuList = $('#menuWrapper li');
    var liWidth = menuList.width();
    menuList.css({'height':liWidth+'px'});
    });
    
})

function menuOpen(){
    
    $('#menuOverRay').fadeToggle(400);
    
    //--menu-liの調整-----------------------------
    var menuList = $('#menuWrapper li');
    var liWidth = menuList.width();
    menuList.css({'height':liWidth+'px'});
    //-------------------------------------------
    
    $(".haveChild > a").html("finalists");
    
    if(menuSwitch){
        //アイコンアニメーション
        $('#menuRectWrapper > #menuRectBar1')
            .animate({'top': 34+'px'},animateSpan)
            .animate({rotate: '-=45deg'},animateSpan);
    
        $('#menuRectWrapper > #menuRectBar2')
            .animate({'opacity':0.0 },animateSpan);
    
        $('#menuRectWrapper > #menuRectBar3')
            .animate({'top': 34+'px'},animateSpan)
            .animate({rotate: '+=45deg'},animateSpan);
        //-------------------
        
        parentMenuOpen();
        
        menuSwitch = false;
        
    }else{
        //アイコンアニメーション
        $('#menuRectWrapper > #menuRectBar1')
            .animate({rotate: '+=45deg'},animateSpan)
            .animate({'top': 48+'px'},animateSpan);
    
        $('#menuRectWrapper > #menuRectBar2')
            .animate({'opacity':1.0 },animateSpan);
    
        $('#menuRectWrapper > #menuRectBar3')
            .animate({rotate: '-=45deg'},animateSpan)
            .animate({'top': 20+'px'},animateSpan);
        //------------------
        
        $('#menuWrapper > ls > li')
            .animate({'top': 50+'%', 'left': 50+'%', 'opacity':0.0},animateSpan);
       
        
        
        menuSwitch = true;
    
    }
    
}

function parentMenuOpen(){

    $('#menuWrapper > #parentMenu > li:nth-child(1)')
            .animate({'top': 18+'%', 'opacity':1.0},animateSpan);
        
    $('#menuWrapper > #parentMenu > li:nth-child(2)')
            .animate({'left': 84+'%', 'opacity':1.0},animateSpan);
        
    $('#menuWrapper > #parentMenu > li:nth-child(3)')
            .animate({'left': 16+'%', 'opacity':1.0},animateSpan);
        
    $('#menuWrapper > #parentMenu > li:nth-child(4)')
            .animate({'top': 82+'%', 'left': 32+'%', 'opacity':1.0},animateSpan);
        
    $('#menuWrapper > #parentMenu > li:nth-child(5)')
            .animate({'top': 82+'%', 'left': 68+'%', 'opacity':1.0},animateSpan);

}

var childSwitch=true;

function childMenuOpen(){
    
    if(childSwitch){
        
        $(".haveChild > a").html("戻る");
        
        
        $('#menuWrapper > ls > .noChild')
            .animate({'top': 50+'%', 'left': 50+'%', 'opacity':0.0},animateSpan);
    
        $('#menuWrapper > ls > .haveChild')
            .animate({'top': 50+'%', 'left': 50+'%'},animateSpan);
    
    
    
        $('#menuWrapper > #childMenu > li:nth-child(1)')
            .animate({'top': 22+'%', 'left': 32+'%', 'opacity':1.0},animateSpan);
        
        $('#menuWrapper > #childMenu > li:nth-child(2)')
            .animate({'top': 22+'%', 'left': 68+'%', 'opacity':1.0},animateSpan);
        
        $('#menuWrapper > #childMenu > li:nth-child(3)')
            .animate({'left': 16+'%', 'opacity':1.0},animateSpan);
        
        $('#menuWrapper > #childMenu > li:nth-child(4)')
            .animate({'left': 84+'%', 'opacity':1.0},animateSpan);
        
        $('#menuWrapper > #childMenu > li:nth-child(5)')
            .animate({'top': 82+'%', 'left': 32+'%', 'opacity':1.0},animateSpan);
    
        $('#menuWrapper > #childMenu > li:nth-child(6)')
            .animate({'top': 82+'%', 'left': 68+'%', 'opacity':1.0},animateSpan);
    
        childSwitch=false;
        
    }else{
    
        $(".haveChild > a").html("finalists");
        
        $('#menuWrapper > #parentMenu > li')
            .animate({'top': 50+'%', 'left': 50+'%', 'opacity':1.0},animateSpan);
        
        $('#menuWrapper > #childMenu > li')
            .animate({'top': 50+'%', 'left': 50+'%', 'opacity':0.0},animateSpan);
        
        parentMenuOpen();
        
        childSwitch=true;
    }
    
    
}