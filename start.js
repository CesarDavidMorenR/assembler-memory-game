/* David - Begin */

let btnStart = document.getElementById("btn-start");

btnStart.addEventListener("click", () => {
  // let mainBody = document.querySelector(".main-dad");
  let name = document.getElementById("nombre-user").value;
  let primerName = document.getElementById("primer-nombre");

  primerName.textContent = name;

  // mainBody.style.display = "none";
});

/* David -End */
