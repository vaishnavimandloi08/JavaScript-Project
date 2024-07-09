// let fname = document.getElementById("u1").value;
// let pass = document.getElementById("p1").value;

username = "aarav@123";
password = 123456;

function login() {
  let fname = document.getElementById("u1").value;
let pass = document.getElementById("p1").value;

  if (fname == username) {
    if (pass == password) {
      alert("successfull logged");
    } else {
      alert("wrong password");
    }
  } else {
    alert("Invalid Credantial");
  }
}
