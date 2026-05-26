const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", function() {
    const keyword = search.value.toLowerCase();

    cards.forEach(function(card) {
        const textCard = card.textContent.toLowerCase();

        if (textCard.includes(keyword)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});