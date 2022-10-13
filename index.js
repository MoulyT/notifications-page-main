const cardUnreadNodeList = document.querySelectorAll(".card--unread");
const cardUnread = Array.from(cardUnreadNodeList);

cardUnread.forEach(function (card) {
  card.addEventListener("click", function (event) {
    markAsReaded(event);
  });
});

function markAsReaded(event) {
  let card = event.target;
  card.classList.remove("card--unread");
  card
    .querySelector(":scope .card__dot--unread")
    .classList.remove("card__dot--unread");
}
