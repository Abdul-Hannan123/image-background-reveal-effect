var imgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var originalImg = document.querySelector("#originalImg");
var line = document.querySelector("#line");

// Setting image width equal to box width
originalImg.style.width = imgBox.offsetWidth + "px";

// This gives distance from left side of the page to the box.
var leftSpace = imgBox.offsetLeft;
// When mouse moves over the box
imgBox.onmousemove = function (e) {
    //  Calculate how much width to show
    var boxWidth = (e.pageX - leftSpace) + "px";
    // Apply width to top image
    imgWrap.style.width = boxWidth;
    // Move the vertical line
    line.style.left = boxWidth;
}