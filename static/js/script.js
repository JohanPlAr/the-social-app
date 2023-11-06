


//Iterates through Read All Buttons and identifies individual posts and manipulates
// textfield display settings
const readAllBtns = document.querySelectorAll(".readAllBtn");
const commentsBtn = document.querySelectorAll(".commentsBtn");

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


commentsBtn.forEach(button => {
    button.addEventListener("click", () => {
        const slug = button.getAttribute("data-id");
        const comments_id = "comments" + slug;
        const comments = document.getElementById(comments_id);
        let display = comments.style.display;
        
        if (display === "none") {
            comments.style.display = "block";
         } else {
           comments.style.display = "none";
        }

});

});