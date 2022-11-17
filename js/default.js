const button = document.querySelector('.button-mark-all-read');

function markAllRead() {
  // Apply read message style to unread messages
  const unreadMessages = document.querySelectorAll('.notify-post-unread');
  for (let i = 0; i < unreadMessages.length; i++) {
    if (unreadMessages[i].classList.contains('notify-post-unread')) {
      unreadMessages[i].classList.remove('notify-post-unread');
      unreadMessages[i].setAttribute('aria-label', 'Read message');
    }
  }

  // Hide the unread message indicator dot
  const unreadIndicator = document.querySelectorAll('.recent-indicator');
  for (let i = 0; i < unreadIndicator.length; i++) {
    unreadIndicator[i].classList.add('hidden');
    unreadIndicator[i].ariaHidden = true;
  }

  const notifyCount = document.querySelector('.notify-count');
  // Set the unread count to zero
  notifyCount.innerHTML = '0';
  // Hide the unread messages counter
  notifyCount.classList.add('hidden');
  notifyCount.setAttribute('aria-hidden', true);
  // Hide the mark all read button
  button.classList.add('hidden');
  button.setAttribute('aria-hidden', true);
}

button.addEventListener('click', markAllRead, false);