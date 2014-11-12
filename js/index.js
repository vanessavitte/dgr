$(document).ready(function() {
  
	window.scrollTo(0, 1);
	
	$('.js #menu-toggle').click(function (e) {
		$('#page_container').addClass('active');
		e.preventDefault();
    });
    
    $('#return').click(function(e){
    	$('#page_container').removeClass('active');
    	e.preventDefault();
    });
    
});


$(document).ready(function(){
  $("#button").click(function(){
    $(".1").toggle();
  });
});

$(document).ready(function(){
  $("#button2").click(function(){
    $(".2").toggle();
  });
});