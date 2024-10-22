const btnEle = document.querySelector(".btn")
const inputEle = document.querySelector("#field")
const taskEle = document.querySelector(".list-item")
btnEle.addEventListener("click", () =>{
  // console.log("you clicked me")
  // console.log(inputEle.value)   /// jo v user value input-box may input  kerta hai usko dekhata hai
  if(inputEle.value === ""){
    alert("please add your task")
  }else{
    let listEle = document.createElement("li")
    listEle.textContent = inputEle.value
    taskEle.appendChild(listEle)


    let spanEle = document.createElement("span")   // span list ke under hi kam ker rha hai  ku ki hum ise list ke under hi bana rhe hai 
    spanEle.textContent = "\u00d7"
    listEle.appendChild(spanEle)
  }
  inputEle.value = ""
  saveEle()
})

taskEle.addEventListener("click", (e)=>{  // e ki jgh per kuch v de saktey hai

  if(e.target.tagName == "LI"){
    e.target.classList.toggle("check")
    saveEle()
  }
  else if(e.target.tagName == "SPAN")
  {
    e.target.parentElement.remove()
    saveEle()
  }
})

function saveEle(){
  localStorage.setItem("task",taskEle.innerHTML) // setitem two value leta hai phala key and dusra value
}
function getEle(){
  taskEle.innerHTML = localStorage.getItem("task")
}
getEle()