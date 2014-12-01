$(function(){
    console.log('The dom is ready! (drill 1)');

    var ballAction = function(event){
        ballX = Math.random() * 500
        ballY = Math.random() * 500
        if (ballX > 850) {ballX -= 200}
        else if (ballY > 450) {ballY -= 200};
        $(this)
            .fadeOut('fast', function(){
                $(this).animate({
                    top: ballX,
                    left: ballY
                }, 'fast')
                $(this).fadeIn()
            })
        }
    // ballAction2 BROKEN
    var ballAction2 = function(event){
        $(this).css({
            left:(Math.random() * 500) * ($('.stage').width()-$('.ball').width())
            top:(Math.random() * 500) * ($('.stage').height()-$('.ball').height())
        })
        .fadeIn()
    }

    $('.stage').on('click', '.ball', ballAction2)

});
