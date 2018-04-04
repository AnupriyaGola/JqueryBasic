
$(document).ready(function() {
  
   $(".t1").hide();
   $(".t2").hide();
   $(".t3").hide();
   $(".dropdown-content").hide();
   $(".stop").removeClass("Borderclose");
   $(".save").removeClass("Bordersubmit");

$(".one").click(function(){
   $(".t1").toggle();
   $(".t2").hide();
   $(".t3").hide();
});

 

$(".two").click(function(){
   $(".t2").toggle();
   $(".t1").hide();
   $(".t3").hide();
});


$(".three").click(function(){
   $(".t3").toggle();
   $(".t1").hide();
   $(".t2").hide();
});

$(".dropbtn").click(function(){
   $(".dropdown-content").toggle();
  });
  
$(".stop").focus(function(){
	$(this).addClass("Borderclose");
});

$(".stop").focusout(function(){
	$(".stop").removeClass("Borderclose");
});

$(".save").focus(function(){
	$(this).addClass("Bordersubmit");
});

$(".save").focusout(function(){
	$(".save").removeClass("Bordersubmit");
});

$(".find").focus(function(){
	$(this).addClass("Borderfind");
});

$(".save").focusout(function(){
	$(".save").removeClass("Borderfind");
});

$(".pic").click(function(){
	$(".home").toggle();
	$(".link").toggle();
	$(".dropdown").toggle();
	$(".disabled").toggle();
	$(".search").toggle();
	$(".butt").toggle();
});

});