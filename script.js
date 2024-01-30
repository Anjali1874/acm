const initSlider = () => {
    const imagelist = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");

    slideButtons.forEach(button => {
        button.addEventListener("click",() => {
            const direction = button.id=="prev-slide" ? -1:1;
            const scrollAmount = imagelist.clientWidth * direction;
            imagelist.scrollBy({left:scrollAmount, behavior: "smooth"});
        });
    });
}

window.addEventListener("load",initSlider);

window.onload=function()
{
    setTimeout(function(){
        var loader=document.getElementsByClassName("loader-wrapper")[0];
        loader.style.display="none";
    },500);
}