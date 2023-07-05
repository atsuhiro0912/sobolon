$(function() {
    // drawerjsの処理
    $('.drawer').drawer();


    //smoothscroll
    //＃から始まるURLがクリックされた時
    jQuery('a[href^="#"]').click(function() {
        //移動速度を指定
        let speed = 300;
        //hrefで指定されたIDを取得
        let id = jQuery(this).attr("href");
        //idの値が＃のみだったらターゲットをHTMLタグにしてトップへ戻るようにする
        let target = jQuery("#" == id ? "html" : id);
        //ページのトップを基準にターゲットの位置を取得
        let position = jQuery(target).offset().top;
        //ターゲットの位置までspeedで速度を移動
        jQuery("html, body").animate(
        {
            scrollTop: position - $('#js-header').outerHeight()
        },
        speed
        );
        return false;
    });

    //wowjs
    new WOW().init();
    
    //googleform
let $form = $('#js-form');
$form.submit(function(e) {
    $.ajax({
        url: $form.attr('action'),
        data: $form.serialize(),
        type: "post",
        dataType: "xml",
        statusCode: {
            0: function () {
                $form.slideUp();
                $('#js-success').slideDown();
            },
            200: function(){
                $form.slideUp();
                $('#js-error').slideDown();
            }
        }
    });
    return false;
});


//form

let $submit = $('#js-submit');
$('#js-form input, #js-form textarea').on('change', function() {
    if (
        $('#js-form input[type="text"]').val() !== "" && 
        $('#js-form input[type="email"]').val() !== "" && 
        $('#js-form input[name="entry.1645211126"]').prop('checked') === true
    ) {
        //全て入力された場合
        $submit.prop('disabled', false);
        $submit.addClass('-active');
       
    } else {
        //入力が不完全な場合
        $submit.prop('disabled', true);
        $submit.removeClass('-active');
    }
});


});








