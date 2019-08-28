function makeActive(evt, image) {
    var i, images, biggerPic
    biggerPic = document.getElementById("biggerPic");
    images = document.getElementsByClassName("images");
    for (i = 0; i < images.length; i++) {
        images[i].className = images[i].className.replace(" active", "");
    }  
    evt.currentTarget.className += " active";
}

function change1() {
    document.getElementById("biggerPic").src = "images/p11.jpg";
}

function change2() {
    document.getElementById("biggerPic").src = "images/p3.jpg";
}

function change3() {
    document.getElementById("biggerPic").src = "images/p5.jpg";
}

function change4() {
    document.getElementById("biggerPic").src = "images/p66.jpg";
}



