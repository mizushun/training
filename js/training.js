$(function(){
    var topBtn = $('#page-top');
    var content1 = $('#content1');
    var content2 = $('#content2');
    var content3 = $('#content3');
    topBtn.hide();
    content1.hide();
    content2.hide();
    content3.hide();
    //スクロールが100に達したらボタンを表示
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            content1.fadeIn();
        }if($(this).scrollTop()>200){
            content2.fadeIn();
        }if($(this).scrollTop()>300){
            content3.fadeIn();
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function(){
        $('body,html').animate({
            scrollTop:0
        },500);
        return false;
    });
});
