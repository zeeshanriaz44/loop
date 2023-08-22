function myfun() {
  let input = +document.getElementById("num").value;
  for (let i = 1; i <= 10; i++) {
    document.querySelector("#res").innerHTML += `${input} x ${i}=   ${
      input * i
    } <br> `;
  }
}
