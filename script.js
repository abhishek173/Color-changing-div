var rect = document.querySelector("#center");
var rectangleLocation = rect.getBoundingClientRect();
console.log(rectangleLocation);

rect.addEventListener("mousemove",function(details){
    //console.log(details);
    var insideRectVal = details.clientX - rectangleLocation.left;
    //console.log(insideRectVal);

    if (insideRectVal < rectangleLocation.width/2){
        // console.log("left");
        var redColor = gsap.utils.mapRange(0,rectangleLocation.width/2,255,0,insideRectVal);
        gsap.to(rect,{
            backgroundColor:`rgb(${redColor},0,0)`
        });
    }
    else{
        // console.log("right");
        var blueColor = gsap.utils.mapRange(rectangleLocation.width/2,rectangleLocation.width,0,255,insideRectVal);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${blueColor})`
        });
    }

});

rect.addEventListener("mouseleave",function(){
    // console.log("mouse Leave");
    gsap.to(rect,{
        backgroundColor:"white"
    });
})