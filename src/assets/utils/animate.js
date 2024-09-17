
function animate(element, animation){
    element.classList.add("animate__animated", animation)
    element.addEventListener("animationend", animationEndListener)
    element.style.setProperty('--animate-duration', '.5s');

    function animationEndListener(){
        element.classList.remove("animate__animated", animation)
        element.removeEventListener("animationend", animationEndListener)
    }
}

export default animate