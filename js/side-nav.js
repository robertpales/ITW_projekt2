var preScroll = window.pageYOffset;
window.onscroll = function() 
{
    var currentPos = window.pageYOffset;
    let header = document.querySelector("header");
    let hamburger = document.querySelector(".open-side-nav");

    if (currentPos === 0)
    {
        header.style.top = "0";
        hamburger.style.display = "none";
        closeNav();
    }
    else 
    {
        header.style.top = "-100px"
        hamburger.style.display = "block";
    }
    preScroll = currentPos;
}

window.onload = function() 
{
    document.querySelector(".open-side-nav").style.display = "none";
}
function toogleNav() 
{
    const nav = document.querySelector(".side-nav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function closeNav() 
{
    document.querySelector(".side-nav").style.display = "none";
}