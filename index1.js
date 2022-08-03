const textarea1 = document.querySelector("#textarea1");
const lineCnt1 = document.querySelector(".line-cnt");

textarea1.addEventListener("keyup", (event) => {
  const cntOfLines1 = event.target.value.split("\n").length;
  lineCnt1.innerHTML = Array(cntOfLines1).fill("<span></span>").join("");
});
const textarea2 = document.querySelector("#textarea2");
const lineCnt2 = document.querySelector(".line-cnt2");

textarea2.addEventListener("keyup", (event) => {
  const cntOfLines2 = event.target.value.split("\n").length;
  lineCnt2.innerHTML = Array(cntOfLines2).fill("<span></span>").join("");
});