function filterItems(category) {
  let items = document.getElementsByClassName('item');
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }

  let menu = document.querySelectorAll('.filter-menu span');
  for (let j = 0; j < menu.length; j++) {
    menu[j].classList.remove('active');
  }
  event.target.classList.add('active');
}
