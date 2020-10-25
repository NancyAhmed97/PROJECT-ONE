$(".swipUp").click(function () {
    
$("html , body").animate ({scrollTop :"0"} ,2000)

})
$(window).scroll(function(){
   var scroTop=$(window).scrollTop();
 if(scroTop>=872)
 {
     $(".swipUp").css("display","inline-block")
 }else
 {
    $(".swipUp").css("display","none")
 }
})