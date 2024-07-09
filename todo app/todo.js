let form = document.querySelector("form")

let tbody = document.querySelector("tbody")

form.addEventListener("submit",getData)

function getData(event)
{
    event.preventDefault()
    
    let task = document.getElementById("task").value
    
    let pri = document.getElementById("priority").value

    let row = document.createElement("tr")
    
    let col1 = document.createElement("td")
    col1.innerText = task
    col1.style.backgroundColor = "aqua"

    let col2 = document.createElement("td")
    col2.innerText = pri
    if(pri == "high"){
        col2.style.backgroundColor = "red"
    }
    else{
        col2.style.backgroundColor = "greenyellow"
    }
    let col3 = document.createElement("td")
    col3.innerText = 'delete'
    col3.style.backgroundColor = "red"
   
    col3.addEventListener("click",funDel)
    function funDel()
    {
        row.remove()
    }


    row.append(col1,col2,col3)
    tbody.appendChild(row)
}