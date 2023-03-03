window.onload = function () {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
};

let elementsArray = document.querySelectorAll(".scroll");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeIn();
