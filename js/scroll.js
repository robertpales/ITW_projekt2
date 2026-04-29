/** 
 * Author: Róbert Páleš
 * File: scroll.js
 * Date: 30.4.2025
 * Scroll button behavior
*/

function scroll() 
{
    const button = document.getElementById("scroll-button");

    function scrollFunction() 
    {
        if (window.scrollY > 0)
        {
            button.classList.add("visible");
        } 
        else 
        {
            button.classList.remove("visible");
        }
    }

    window.addEventListener("scroll", scrollFunction);
    button.addEventListener("click", () => 
    {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

window.addEventListener("DOMContentLoaded", scroll);
