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
images [0] = 'https://data.whicdn.com/images/317782926/original.gif'
images [1] = 'https://data.whicdn.com/images/317782926/original.gif'
images [2] = 'frogstyle.gif';
images [3] = 'https://i.pinimg.com/originals/d5/de/95/d5de95e1558c2b3669158893ad86a7b0.gif'
images [4] = 'ironfist.gif';
images [5] = 'https://i.pinimg.com/originals/d5/de/95/d5de95e1558c2b3669158893ad86a7b0.gif'
images [6] = 'slash.gif';
images [7] = 'https://i.pinimg.com/originals/d5/de/95/d5de95e1558c2b3669158893ad86a7b0.gif'
images [8] = 'punch.gif';


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