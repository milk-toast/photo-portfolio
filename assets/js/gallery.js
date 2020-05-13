var index = 0;
var imgRows = document.getElementsByClassName('img-row');
var length = imgRows.length;

function next() {
  if (index < length-1) {
    imgRows[index].classList.add("hidden");
    imgRows[index+1].classList.remove("hidden");
    index++;
  }
  check();
}


function prev () {
  if (index > 0) {
    imgRows[index].classList.add("hidden");
    imgRows[index-1].classList.remove("hidden");
    index--;
  }
  check();
}

function check() {
  if (index == length-1) {
    document.getElementById("nav-next").classList.add("disabled");
  } else {
    document.getElementById("nav-next").classList.remove("disabled");
  }
  if (index == 0) {
    document.getElementById("nav-prev").classList.add("disabled");
  } else {
    document.getElementById("nav-prev").classList.remove("disabled");
  }
}