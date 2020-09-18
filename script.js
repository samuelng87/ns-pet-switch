
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var circle = document.getElementById('circle')
var upBtn = document.getElementById('upBtn')
var downBtn = document.getElementById('downBtn')




var rotateValue = circle.style.transform;
var rotateSum;

upBtn.onclick = function () {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum
}

downBtn.onclick = function () {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum
}


var i = 0; // start point 
var images = []
var time = 4500;


// Image List 
images [0] = 'https://thumbs.gfycat.com/FoolishFittingGlowworm-size_restricted.gif'
images [1] = 'https://thumbs.gfycat.com/FoolishFittingGlowworm-size_restricted.gif'
images [2] = 'ironfist.gif';
images [3] = 'frogkillchoy.gif'
images [4] = 'lighting.gif';
images [5] = 'slash.gif';
images [6] = 'punch.gif';
images [7] = 'lighting.gif'
images [8] = 'rokuironfist.gif';
images [9] = 'https://thumbs.gfycat.com/FoolishFittingGlowworm-size_restricted.gif';
images [10] = '';

// change img 

function changeImg() {
    document.slide.src = images[i];

if ( i < images.length - 1){
i++ ;  
} else {
    i = 0; 
}

setTimeout("changeImg()", time);   
}


window.onload = changeImg; 


function printNumber (num) {
    return num;
}


printNumber((2020,2021))

