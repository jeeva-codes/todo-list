const input=document.getElementById('inputbox')
const ul=document.getElementById('ul')

function addlist(){
   if(input.value=== ''){
    alert("you must write something")
   }
   else{
    let li=document.createElement('li')
    li.innerHTML=input.value;
    ul.appendChild(li);
    let span=document.createElement('span');
    span.innerHTML="\u00d7";
    li.appendChild(span)
   }
   input.value="";
   saveData();

}
ul.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",ul.innerHTML);
}
function showTask(){
    ul.innerHTML = localStorage.getItem("data");
}
showTask();