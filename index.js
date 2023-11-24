topFunction = () => window.scrollTo({ top: 0, behavior: "smooth" });

function moveToo(element) {
  document.getElementById(element).scrollIntoView();
}

function moveTo(element) {
  var ele = document.getElementById(element);
  window.scrollTo({ top: ele.offsetTop - 40, behavior: "smooth" });
}
