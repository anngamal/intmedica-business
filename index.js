//add a video in the beginning of who we are 
// add to the nav bar elly fo2 : manufcatures , sales records, contact us 
//  add a submit form for sign up for customers 



// who are we 
// my sales record 
// how to the work btwn us will be 
// submit their info
//schedule a meeting by adding a calendar 


// fetch("http://localhost:3000/manufactures")
// .then(resp => resp.json())
// .then(manufactures => { 
    // manufactures.forEach(manufacture =>{ 
    
const listofManf = document.getElementById("listofManufact")
const PManf = document.getElementById("p")
const ul = document.getElementById("listofManufact")

function addlist() {
    const li1 = document.createElement("li")
    li1.textContent = "Therabody"
     ul.appendChild(li1)
     const li2 = document.createElement("li")
     li2.textContent = "DJO"
     ul.appendChild(li2)
     const li3=document.createElement("li")
     li3.textContent= "Chattnooga"
     ul.appendChild(li3)
     //write it in html then hide it and everytime you add event listener unhide it
}

// })
PManf.addEventListener("click", addlist);

const spandiv= document.createElement("div")
const span = document.createElement("span")
span.textContent ="products"
spandiv.appendChild(span)

const scriptsSection= document.getElementById("scriptsSection")
const email = document.getElementById("email")
email.addEventListener("click", event => {
    const emaill = document.createElement("P")
    emaill.textContent = "anngamal14@gamil.com"
    scriptsSection.appendChild(emaill)
z
})
const salesrecords = document.getElementById("salesrecords")
salesrecords.addEventListener("click", event =>{

   const externaLink = "file://wsl.localhost/Ubuntu/home/anngamal/development/code/intmedica-projects/intmedicaSalesRecord/index.html"
   window.location.href = externaLink ;

})
const trackyouraccount = document.getElementById("trackyouraccount")

const form = document.getElementById("form")

let emaill= null
let phoneNumber = null

form.addEventListener("submit", event =>{
    event.preventDefault()
    emaill = input2.value
    phoneNumber= input3.value

})
trackyouraccount.addEventListener("click", event =>{

})
//sign up form when submitted go to track your account
// add click on track your account




