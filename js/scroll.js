function scroll() 
{
    const scrollBtn = document.getElementById("scroll-button");

    function scrollFunction() 
    {
        if (window.scrollY > 20) 
        {
            scrollBtn.style.display = "block";
        } 
        else 
        {
            scrollBtn.style.display = "none";
        }
    }

    window.addEventListener("scroll", scrollFunction);
    scrollBtn.addEventListener("click", () => 
    {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

window.addEventListener("DOMContentLoaded", scroll);