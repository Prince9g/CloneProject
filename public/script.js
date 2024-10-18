document.addEventListener('DOMContentLoaded', () => {
    var item = document.querySelectorAll('.contact');
    console.log(item);
    item[0].addEventListener('mouseenter', () => {
        document.getElementById("arrow").style.transform = "rotate(360deg)";
    });
});
