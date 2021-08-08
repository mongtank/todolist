const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
const bgi=document.querySelector("body img");


const imgselect = images[Math.floor(Math.random()*images.length)];
bgi.src=`images/${imgselect}`;
