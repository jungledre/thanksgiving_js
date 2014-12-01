$(function(){
    console.log('The dom is ready! (drill 1)');

    var ballAction = function (event) {
        ballX = Math.random() * 500
        ballY = Math.random() * 500
        if (ballX > 850) {ballX -= 100}
        else if (ballY > 450) {ballY -= 100};
        $(this)
            .fadeOut('fast', function(){
                $(this).animate({
                    top: ballX,
                    left: ballY
                }, 'fast')
                $(this).fadeIn()
            })
        }

    $('.stage').on('click', '.ball', ballAction)

});
