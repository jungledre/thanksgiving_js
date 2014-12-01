$(function(){

    console.log('The dom is ready! (drill 2)');

    $(document).on('keydown',function(event){

    // toDo: Confine to ".shape"

    if(event.keyCode == 37 && $('.shape').position().left >= 100) { // left
        $(".shape")
        .animate({left: "-=80"}, 'fast')
    }
    else if(event.keyCode == 38) { // up
        $(".shape")
        .animate({top: "-=80"}, 'fast')
    }
    else if(event.keyCode == 39) { // right
        $(".shape")
        .animate({left: "+=80"}, 'fast')
    }
    else if(event.keyCode == 40) { // down
        $(".shape")
        .animate({top: "+=80"}, 'fast')
    }
    else if(event.keyCode == 83) {
        $(".shape")
        // .effect("shake")
        .animate({left: "-=10"}, 'fast')
        .animate({left: "+=10"}, 'fast')
        .animate({left: "-=10"}, 'fast')
        .animate({left: "+=10"}, 'fast')
    }

//output to console which key was pressed
console.log('The user pressed key: ',event.which);
});

});

