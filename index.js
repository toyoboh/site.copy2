let img = document.getElementById('img');
let document = document.querySelectorAll('.btn');

let imgSlider = [
  'slide01-min.jpg',
  'slide02-min.jpg',
  'slide03-min.jpg',
  'slide04-min.jpg',
  'slide05-min.jpg'
]

let i = 0;


//表示する関数
function slider() {

  img.src = imgSlider[i];

  if(i < imgSlider.length -1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("slider()", 3000);
}

window.onload = slider;




