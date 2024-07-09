let count = document.querySelector("h5")
let value = localStorage.getItem("value")

if(localStorage.getItem("value") == null)
{
    count.innerText = 0
}
else{
    count.innerText = localStorage.getItem("value")
}
function like()
{
    value++
    count.innerText = localStorage.setItem("value", value)
    count.innerText = value
}