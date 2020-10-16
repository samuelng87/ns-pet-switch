
//facebook share button 
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
  fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'))

//alert('Warning ! You need a lot of chakra to connect into this website, are you ready? ')



var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
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
images [0] = 'republic.gif'
images [1] = 'https://thumbs.gfycat.com/FoolishFittingGlowworm-size_restricted.gif';
images [2] = 'ironfist.gif';
images [3] = 'frogkillchoy.gif'
images [4] = 'lighting.gif';
images [5] = 'devsfrog.gif';
images [6] = 'punch.gif';
images [7] = 'https://thumbs.gfycat.com/FoolishFittingGlowworm-size_restricted.gif'
images [8] = 'hanami.gif';
images [9] = 'rokupunch.gif';
images [10] = 'https://thumbs.gfycat.com/FoolishFittingGlowworm-size_restricted.gif';
images [11] = 'rokuironfist.gif';
images [12] = 'asi.gif';
images [13] = 'https://thumbs.gfycat.com/FoolishFittingGlowworm-size_restricted.gif';
images [14] = 'lightbuff.gif';
images [15] = 'warsenjutsu.gif';
images [16] = 'https://thumbs.gfycat.com/FoolishFittingGlowworm-size_restricted.gif';
images [17] = 'copyskill.gif';
images [18] = 'https://thumbs.gfycat.com/FoolishFittingGlowworm-size_restricted.gif';
images [19] = 'lightingarmor.gif';
images [20] = 'https://thumbs.gfycat.com/FoolishFittingGlowworm-size_restricted.gif';
images [21] = 'ultimate.gif'
images [22] = 'https://thumbs.gfycat.com/FoolishFittingGlowworm-size_restricted.gif';


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

const container = document.querySelector('.con-tainer')

 const text = document.querySelector('#text')

 const totalTime = 25000 
 const breatheTime = (totalTime / 5) * 2
 const holdTime = totalTime / 5 

breatheAnimation()

 function breatheAnimation () {
     text.innerHTML = 'I have mastered the Kinjutsu a thousand times in a thousand lifetimes.  Now i must do it once again'
     container.className = 'container grow'

     setTimeout(() => {

text.innerText = 'Sometimes we need to lose the small battles in order to win the war.  In the darkness only ambition will guide you'

setTimeout(() => {
text.innerText = 'Change is not something human beings like and it cause us fear. Fear works to the benefit of those who would like to control others'
container.className = 'container shrink'
}, holdTime)

}, breatheTime)

}

setInterval(breatheAnimation, totalTime)


function myFunction() {
    var run = document.getElementById("myAudio").autoplay;
    document.getElementById("demo").innerHTML = run;
  }

