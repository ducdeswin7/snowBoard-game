$(function() {

    function loop(){
        $('.luttins-1')
            .animate({marginLeft:270},2000)
            .animate({marginLeft:20},2000, loop);

        $('.luttins-2')
            .animate({marginRight:270},2000)
            .animate({marginRight:20},2000, loop);

    }

    loop();
});