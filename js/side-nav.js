var preScroll = window.pageYOffset;

window.onscroll = function () 
{
    const currentPos = window.pageYOffset;
    const header = document.querySelector(".main-nav ul");
    const button = document.querySelector(".open-side-nav");

    if (currentPos === 0) 
        {
        header.style.transform = "translateY(0)";
        button.classList.remove("visible");
        closeNav();
    } 
    else 
    {
        header.style.transform = "translateY(-100px)";
        button.classList.add("visible");
    }

    preScroll = currentPos;
};

function toggleSideNav() {
    const nav = document.querySelector(".side-nav");
    const mainNav = document.querySelector("header");
    const overlay = document.querySelector(".overlay");

    nav.classList.add("active"); 
    mainNav.classList.add("hidden");
    overlay.classList.add("active");
}

function closeSideNav() {
    const nav = document.querySelector(".side-nav");
    const mainNav = document.querySelector("header");
    const overlay = document.querySelector(".overlay");

    nav.classList.remove("active");
    mainNav.classList.remove("hidden");
    overlay.classList.remove("active");
}