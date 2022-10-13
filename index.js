const cardUnreadNodeList = document.querySelectorAll(".card--unread");
const cardUnread = Array.from(cardUnreadNodeList);
const markAllAsReadButton = document.getElementById("button__all_read");
const notificationCounter = document.getElementById(
  "header__notification_counter"
);

let NumberOfNotifications = 0;

counter();

function counter() {
  let NumberOfNotifications = 0;
  for (let i = 0; i < cardUnread.length; i++) {
    if (cardUnread[i].classList.contains("card--unread")) {
      NumberOfNotifications++;
    }
  }
  notificationCounter.innerHTML = NumberOfNotifications;
}

markAllAsReadButton.addEventListener("click", function (btn) {
  markAllAsReaded();
});

cardUnread.forEach(function (card) {
  card.addEventListener("click", function (event) {
    markAsReaded(event);
  });
});

function markAsReaded(event) {
  let card = event.target;
  if (card.classList.contains("card--unread")) {
    card.classList.remove("card--unread");
    card
      .querySelector(":scope .card__dot--unread")
      .classList.remove("card__dot--unread");
  }
  counter();
}

function markAllAsReaded() {
  for (let i = 0; i < cardUnread.length; i++) {
    if (cardUnread[i].classList.contains("card--unread")) {
      document.querySelector(".card--unread").classList.remove("card--unread");
      document
        .querySelector(".card__dot--unread")
        .classList.remove("card__dot--unread");
    }
  }
  counter();
}
