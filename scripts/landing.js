var animatePoints = function(){
    var points = document.getElementsByClassName('point');
    function revealPoint(i){
      points[i].style.opacity = 1;
      points[i].style.transform = "scaleX(1) translateY(0)";
      points[i].style.msTransform = "scaleX(1) translateY(0)";
      points[i].style.WebkitTransform = "scaleX(1) translateY(0)";
    }

    for (var i=0; i < points.length; i++){
      revealPoint(i);
    }
};

    //     var revealSecondPoint = function(){
    //         points[1].style.opacity = 1;
    //         points[1].style.transform = "scaleX(1) translateY(0)";
    //         points[1].style.msTransform = "scaleX(1) translateY(0)";
    //         points[1].style.WebkitTransform = "scaleX(1) translateY(0)";
    //     };
    //
    //     var revealThirdPoint = function(){
    //         points[2].style.opacity = 1;
    //         points[2].style.transform = "scaleX(1) translateY(0)";
    //         points[2].style.msTransform = "scaleX(1) translateY(0)";
    //         points[2].style.WebkitTransform = "scaleX(1) translateY(0)";
    //     };
    //
    //     revealFirstPoint();
    //     revealSecondPoint();
    //     revealThirdPoint();
    // };
