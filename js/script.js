const menuBtn = document.querySelector(".btn-menu");

const line1 = document.querySelectorAll(".btn-line")[0];
const line2 = document.querySelectorAll(".btn-line")[1];
const line3 = document.querySelectorAll(".btn-line")[2];

console.log(line1, line2, line3);

// addEventListener;
menuBtn.addEventListener("mouseover", menuOver);
menuBtn.addEventListener("mouseleave", menuOut);
menuBtn.addEventListener("click", menuShow);

function menuOver() {
  line1.style.width = "35px";
  line2.style.width = "27px";
  line2.style.marginLeft = "8px";
  line3.style.width = "0px";
}
function menuOut() {
  line2.style.width = "35px";
  line2.style.marginLeft = "0px";
  line3.style.width = "35px";
}

function menuShow() {
  line2.style.opacity = "0";
  line1.style.marginBottom = "0";
  line2.style.marginBottom = "0";
  line1.style.transform = "translate(-1px, 5px) rotate(45deg)";
  line3.style.transform = "translate(-2px, -1px) rotate(-45deg)";
}

/*
.btn-menu .btn-line {
  height: 3px;
  width: 35px;
  margin: 0 0 5px 0;
  background-color: #111;
}
*/
