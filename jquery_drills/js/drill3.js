$(function(){

    console.log('The dom is ready! (drill 3)');

    var colors = ['red','blue','green','orange','purple','yellow','teal'];


    var removeBall = function (event) {
        var thisColor = colors[Math.floor(Math.random() * colors.length)];
        $('.shape').removeClass('ball').css("background-color", thisColor)
    }
    var addBall = function (event) {
        var thisColor = colors[Math.floor(Math.random() * colors.length)];
        $('.shape').addClass('ball').css("background-color", thisColor)
    }


    $('.shape').mouseenter(removeBall).mouseleave(addBall)

});

