var i = 0;
var images = [];
var time = 3000;

images[0] = 'concert-background.jpg'
images[1] = 'concert-background2.jpg'
images[2] = '1947558.jpg'


function changeImg() {
    document.slide.src = images[i];


    if(i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;