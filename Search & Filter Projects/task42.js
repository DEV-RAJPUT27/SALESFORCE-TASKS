function filterImages(category) {
  let boxes = document.getElementsByClassName("box");

  for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    if (category === 'all') {
      box.classList.remove('hide');
    } else {
      if (box.classList.contains(category)) {
        box.classList.remove('hide');
      } else {
        box.classList.add('hide');
      }
    }
  }
}
