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
var time = 5000;


// Image List 

images [0] = 'main-1.gif';
images [1] = 'main-2.gif';
images [2] = 'main-3.gif';
images [3] = 'main4.gif';


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