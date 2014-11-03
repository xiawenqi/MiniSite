//yarkb
$("ul.apply-up > li").click(function(){
    $('ul.apply-up > li').addClass('apply-list-normal')
    $('ul.apply-up > li').removeClass('apply-list-active')
    $(this).removeClass('apply-list-normal')
    $(this).addClass('apply-list-active')
})
