


//Iterates through Read All Buttons and identifies individual posts
const readAllBtns = document.querySelectorAll(".readAllBtn");

readAllBtns.forEach(button => {
    button.addEventListener("click", () => {
        const slug = button.getAttribute("data-id");
        const excerpt_id = "excerpt" + slug;
        const excerpt = document.getElementById(excerpt_id);
        let display = excerpt.style.display;
        
        if (display === "none") {
            excerpt.style.display = "block";
         } else {
           excerpt.style.display = "none";
        }

});

});

 