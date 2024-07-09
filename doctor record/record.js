let form = document.querySelector("form");
let tbody = document.querySelector("tbody");

form.addEventListener("submit", getData);

function getData(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;

  let Did = document.getElementById("Did").value;

  let special = document.getElementById("special").value;

  let experience = document.getElementById("exp").value;

  let email = document.getElementById("email").value;

  let phone = document.getElementById("phone").value;

  let row = document.createElement("tr");

  let col1 = document.createElement("td");
  col1.innerText = name;

  let col2 = document.createElement("td");
  col2.innerText = Did;

  let col3 = document.createElement("td");
  col3.innerText = special;

  let col4 = document.createElement("td");
  col4.innerText = experience;

  let col5 = document.createElement("td");
  col5.innerText = email;

  let col6 = document.createElement("td");
  col6.innerText = phone;

  let col7 = document.createElement("td");
  if(experience > 5)
  {
    col7.innerText = "Senior"
  }
  else if(experience > 2 && experience < 5)
  {
    col7.innerText = "Junior"
  }
  else{
    col7.innerText = "Trainee"
  }

  let col8 = document.createElement("td");
  col8.innerText = "Delete";
  col8.style.backgroundColor = "red"
  col8.style.cursor ="pointer"

  col8.addEventListener("click", funDel)
  function funDel()
  {
    row.remove()
  }

  row.append(col1, col2, col3, col4, col5, col6, col7, col8);
  tbody.appendChild(row);
}

