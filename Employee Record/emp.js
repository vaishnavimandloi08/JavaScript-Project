let form = document.querySelector("form")

let tbody = document.querySelector("tbody")

form.addEventListener("submit",getData)

function getData(event)
{
    event.preventDefault()

    let name = document.getElementById("name").value
    let Did = document.getElementById("Did").value
    let dept = document.getElementById("dept").value
    let year = document.getElementById("year").value
    let email = document.getElementById("email").value
    let mobile = document.getElementById("mobile").value

    let row = document.createElement("tr")
    
    let col1 = document.createElement("td")
    col1.innerText = name

    let col2 = document.createElement("td")
    col2.innerText = Did

    let col3 = document.createElement("td")
    col3.innerText = dept

    let col4 =  document.createElement("td")
    col4.innerText = year

    let col5 = document.createElement("td")
    col5.innerText = email

    let col6 = document.createElement("td")
    col6.innerText = mobile

    let col7 = document.createElement("td")
    if(year > 5)
    {
        col7.innerText = "Senior"
        col7.style.backgroundColor = "yellow"
    }
    else if(year > 2 && year < 5)
    {
        col7.innerText = "Junior"
        col7.style.backgroundColor = "greenyellow"
    }
    else{
        col7.innerText = "Fresher"
        col7.style.backgroundColor = "aqua  "
    }

    let col8 = document.createElement("td")
    col8.innerText = "Delete"
    col8.style.backgroundColor= "red"
    col8.style.cursor = "pointer"


    col8.addEventListener("click", funDel)

    function funDel()
    {
        row.remove()
    }

    row.append(col1,col2,col3,col4,col5,col6,col7,col8)
    tbody.append(row)
}