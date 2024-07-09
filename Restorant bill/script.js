function display()
{
    let v1 = document.getElementById("i1").innerText
let v2 = document.getElementById("l1").innerText
let v3 = parseInt(v1 * v2)
document.getElementById("t1").innerHTML = v3

let s1 = document.getElementById("i2").innerText
let s2 = document.getElementById("l2").innerText
let s3 = parseInt(s1 * s2)
document.getElementById("t2").innerHTML = s3

let u1 = document.getElementById("i3").innerText
let u2 = document.getElementById("l3").innerText
let u3 = parseInt(u1 * u2)
document.getElementById("t3").innerHTML = u3

let x1 = document.getElementById("i4").innerText
let x2 = document.getElementById("l4").innerText
let x3 = parseInt(x1 * x2)
document.getElementById("t4").innerHTML = x3



    let cal = v3 + s3 + u3 + x3
    // console.log( cal )
    // let total = document.getElementById("total").innerHTML = cal
    let total = document.getElementById("total").value = cal
    
}
