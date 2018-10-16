window.onload = function() {
    var behavior = document.querySelector('.behavior').getSVGDocument(),
        profit = document.querySelector('.profit').getSVGDocument(),
        landscape = document.querySelector('.landscape').getSVGDocument(),
        
        behavior = SVG(behavior.querySelector('svg')),
        profit = SVG(profit.querySelector('svg')),
        landscape = SVG(landscape.querySelector('svg')),
 
        gear = behavior.select('#gear'),
        yellow_arrow = behavior.select('#yellow_arrow'),
        green_arrow = behavior.select('#green_arrow'),
        person = behavior.select('#person'),
        
        left_arrow = profit.select('#left_arrow'),
        right_arrow = profit.select('#right_arrow'),
        dollar = profit.select('#dollar'),

        cloud = landscape.select('#cloud'),
        bird_left_top = landscape.select('#bird_left_top'),
        bird_left_bottom = landscape.select('#bird_left_bottom'),
        bird_right_top = landscape.select('#bird_right_top'),
        bird_right_bottom = landscape.select('#bird_right_bottom'),
        water = landscape.select('#water');

        
    /*Animate behavior picture*/

    //move gear
    function moveGear() {
        gear.animate(4000).rotate(-360).loop();
    }
    moveGear();
    
    //move behavior arrows to the left/right
    function moveBehaviorArrows() {
        green_arrow.animate().x(-100).move(0, 0).loop();
        yellow_arrow.animate().x(100).move(0, 0).loop();
    }
    moveBehaviorArrows();


    /*Animate profit picture*/

    // move profit arrows up and down
    function moveProfitArrowsUp() {
      left_arrow.animate().dy(-50);
      right_arrow.animate().dy(50).after(moveProfitArrowsDown);
    }
    function moveProfitArrowsDown() {
      left_arrow.animate().dy(50);
      right_arrow.animate().dy(-50).after(moveProfitArrowsUp);
    }
    moveProfitArrowsUp();

    //resize dollar sign 
    function resizeDollarUp() {
        dollar.animate().scale(1.3).after(resizeDollarDown);
    }
    function resizeDollarDown() {
        dollar.animate().scale(1).after(resizeDollarUp);
    }
    resizeDollarUp();



    /*Animate landscape picture*/

    //move cloud to the left/right
    function moveCloudToLeft() {
        cloud.animate(4000).dx(-15).after(moveCloudToRight);
    }
    function moveCloudToRight() {
        cloud.animate(4000).dx(15).after(moveCloudToLeft);
    }
    moveCloudToLeft();

    //move birds
    function moveBirds() {
        bird_left_top.animate().dmove(-3, -4).animate().rotate(10).animate().dmove(0, 8).animate(2000)
        .x(-50);
        bird_left_bottom.animate().dmove(-3, 2).animate().dmove(-4, -1)
        .animate(4000).x(-50);
        bird_right_top.animate().dmove(-3, -2).animate().rotate(20).animate().
        dmove(-2, -5).animate(7000).x(-50);
        bird_right_bottom.animate().dmove(2, 2).animate().dmove(2, -2).animate(5000)
        .move(-30, -30);
    }
    moveBirds();
}