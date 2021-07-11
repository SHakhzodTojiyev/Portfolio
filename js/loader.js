let loader = document.querySelector(".loading");

window.addEventListener('load', function(){
    loader.parentElement.removeChild(loader);
})