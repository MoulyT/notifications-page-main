// The objective of the script is to handle notifications. It should allow
// to count de number of notification with counter(), to mark all as read
// with markAllAsReaded() and to change the style of the notification
// when you click in the card with markAsReaded()

const cardUnreadNodeList = document.querySelectorAll(".card--unread");
const cardUnread = Array.from(cardUnreadNodeList);
const markAllAsReadButton = document.getElementById("button__all_read");
const notificationCounter = document.getElementById(
  "header__notification_counter"
);

let NumberOfNotifications = 0;

counter();

// counter() not only counts the notifications but it resets the counter every time
// its invoked. It reade how many class "card--unread" there are in the DOM and
// displays it in the HTML class.
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

// the attribute of markAsReaded(event) is the element that's clicked
// If it contains the "card--unread" class it removes it from the
// card and removes the unread dot style

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

//markAllAsReaded() does what is name inficates.

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
