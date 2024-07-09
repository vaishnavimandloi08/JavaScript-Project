let form = document.querySelector("form")
let tbody = document.querySelector("tbody")


form.addEventListener("submit",studData)


function studData()
{
    let stud_arr = []
    event.preventDefault()
    

    let rows = document.getElementById("rows").value
    let name = document.getElementById("name").value
    let enroll = document.getElementById("enroll").value
    let sem = document.getElementById("sem").value
    let dept = document.getElementById("dept").value
    let subject = document.getElementById("subject").value
    let marks = document.getElementById("marks").value

    
    let stud_obj = {
        rows,
        name,
        enroll,
        sem,
        dept,
        subject,
        marks
    }

   stud_arr.push(stud_obj)
   

   for(let i = 0; i < stud_arr.length; i++)
   {
      let row = document.createElement("tr")

      let col1 = document.createElement("td")
      col1.innerText = stud_arr[i].rows



      let col2 = document.createElement("td")
      col2.innerText = stud_arr[i].name

      let col3 = document.createElement("td")
      col3.innerText = stud_arr[i].enroll


      let col4 = document.createElement("td")
      col4.innerText = stud_arr[i].sem


      let col5 = document.createElement("td")
      col5.innerText = stud_arr[i].dept


      let col6 = document.createElement("td")
      col6.innerText = stud_arr[i].subject



      let col7 = document.createElement("td")
      col7.innerText = stud_arr[i].marks



      let col8 = document.createElement("td")
      if(marks > 80)
      {
        col8.innerText = "10"
      }
      else if(marks > 60 && marks < 80)
      {
        col8.innerText = "8"
      }
      else{
        col8.innerText = "5"
      }


      let col9 = document.createElement("td")
      if(marks > 90)
      {
        col9.innerText = "A+"
      }
      else if(marks > 80 && marks < 90)
      {
        col9.innerText = "A"
      }
      else if(marks > 70 && marks < 80)
      {
        col9.innerText = "B"
      }
      else if(marks > 60 && marks < 70)
      {
        col9.innerText = "C"
      }
      else if(marks > 50 && marks < 60)
      {
        col9.innerText = "D"
      }
      else if(marks > 40 && marks < 50)
      {
        col9.innerText = "E"
      }
      else{
        col9.innerText = "Fail"
      }


      let col10 = document.createElement("td")
      col10.addEventListener("click",funDel)

      function funDel()
      {
        event.target.parentNode.remove()
      }
      col10.innerText = "Delete"
      col10.style.backgroundColor = "red"
      col10.style.cursor = "pointer"

      row.append(col1,col2,col3,col4,col5,col6,col7,col8,col9,col10)
      tbody.append(row)

   }
}