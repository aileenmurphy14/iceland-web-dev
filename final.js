var i =0;
var images=[];
var time = 2000;

images[0] = 'icecap.jpg';
images[1] = 'waterfall.jpg';
images[2] = 'beach2.jpg';
images[3] = 'plane2.jpg'
images[4] = 'thermalpark.jpg'

function changeSlides(){
  document.slide.src = images[i];
  if (i < images.length-1){
    i++;
  }
  else{
    i=0;
  }
  setTimeout("changeSlides()", time);
}


window.onload = function(){
  changeSlides();
}



//sources: 
//Traversey Media https://www.youtube.com/watch?v=4YQ4svkETS0
//w3schools.com
