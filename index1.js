const textarea1 = document.querySelector("#textarea1");
const lineCnt = document.querySelector(".line-cnt");

textarea1.addEventListener("keyup", (event) => {
  const cntOfLines = event.target.value.split("\n").length;
  lineCnt.innerHTML = Array(cntOfLines).fill("<span></span>").join("");
});
textarea1.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    const start = textarea1.selectionStart;
    const end = textarea1.selectionEnd;

    textarea1.value =
      textarea1.value.substring(0, start) +
      "\\t" +
      textarea1.value.substring(end);

    event.preventDefault();
  }
});
const textarea2 = document.querySelector("#textarea2");
const lineCnt2 = document.querySelector(".line-cnt2");

textarea2.addEventListener("keyup", (event) => {
  const cntOfLines2 = event.target.value.split("\n").length;
  lineCnt2.innerHTML = Array(cntOfLines2).fill("<span></span>").join("");
});
var str='';
// textarea1.addEventListener('input', function handleChange(event) {
//   // console.log(event.target.value);
//   str+=event.target.value;
// });
// console.log(str);

function update(e) {
   str = textarea1.value;
}

textarea1.addEventListener('keydown', update)
textarea1.addEventListener('keyup', update)
console.log(str);
