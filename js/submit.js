/** 
 * Author: Róbert Páleš
 * File: submit.js
 * Date: 30.4.2025
 * Form submit popup
*/

function submitForm(event) 
{
    event.preventDefault();

    const popup = document.getElementById("popup");
    
    popup.classList.add("active");

    setTimeout(() => 
    {
        popup.classList.remove("active");
    }, 5000);

    event.target.closest("form").reset();
}