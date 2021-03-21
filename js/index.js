
$(document).ready(function() {
  $(".skitter-large").skitter();

  particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  var typed = new Typed('.element', {
    // Waits 1000ms after typing "First"
    strings: ['WEB DEVOLEPMENT.', 'ROUTE ACADIMY FULL STUCK.']
    ,loop:true
    ,typespeed:0
  });
});



$("#demo").click(1500,function(){
  $("#demo").animate({width:"100%"},1500);
  $("#demo").animate({height:"100%"},1500,
    function(){$("#demo h1").show(1500,
    function(){$("#demo .col-md-4").fadeIn(1500)})});

})

$(".img-item").click(function(){
  let imgSrc=$(this).attr("src");
  $(".special").attr("src",imgSrc);
  
})

$("#icon-box").click(function(){
  let colorBoxWidth=$("#color-box").innerWidth();
  if($("#all-box").css("left") == "0px")
  {
      $("#all-box").animate({left:`-${colorBoxWidth}`},1000);
  }
  else
  {
      $("#all-box").animate({left:`0px`},1000); 
  }
})

for (let i = 0; i < $(".color-item").length; i++) {

  let red =Math.round(Math.random()*255);
  let green =Math.round(Math.random()*255);
  let blue =Math.round(Math.random()*255);
  $(".color-item").eq(i).css("backgroundColor",`rgb(${red},${green},${blue})`);
}

$(".color-item").click(function(){
  let colorItem =$(this).css("backgroundColor");
$(".colored").css("color",colorItem);

})