$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
});

$(document).ready(function () {
    $('#loginButton').click(function() {
    $('#loginModal').modal('show');
   });
});
$(document).ready(function () {
    $('#reserveButton').click(function() {
    $('#reserveModal').modal('show');
   });
});


/*$('#button1').on('click', function() {
    $('#openModal').modal('show');
});*/
/*$(document).ready(function () {

    // Attach Button click event listener 
   $("#myBtn").click(function(){

        // show Modal
        $('#myModal').modal('show');
   });
}); */
/*$('#loginButton').on('click', function() {
    $('#loginModal').modal('show');
})*/
/*    $('#reserveButton').click(function() {
    $('.reserveModal').modal('show');
    });*/