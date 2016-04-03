// JavaScript Document

var imageCount = 1;
var totalAmount = 5;

function slide(x) 
{
	var image = document.getElementById("mainSliderImage");
	imageCount = imageCount + x;
	if(imageCount > totalAmount){imageCount = 1;}
	if(imageCount < 1){imageCount = totalAmount;} //Keeps the 
	image.src = "img/CoverImage_"+ imageCount +".jpg";
}


var header = document.querySelectorAll("#largeImage");
TweenMax.staggerFrom(header, 0.5, {opacity: 0, scale:0.5, delay:2}, 0.3);

window.addEventListener("load", init, false);