document.addEventListener("DOMContentLoaded")

function loadtask(){
    let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    tasks.forEach(task=>console.log(task));

}



function addTask(){
    let textInput=document.getElementById("taskInput");
    let taskText=textInput.value;

    if (taskText !== null && taskText.trim() !== "") { 
        addTaskToDOM(taskText); 
        let tasks=JSON.parse(localStorage.getItem("tasks")) || []
        tasks.push(taskText);
        localStorage.setItem("tasks",JSON.stringify(tasks))
        textInput.value="";

    } else {
        alert("Task cannot be empty!"); 
    }

    // addTaskToDOM(taskText)


    // let tasks=JSON.parse(localStorage.getItem("tasks")) || []
    // tasks.push(taskText);
    // localStorage.setItem("tasks",JSON.stringify(tasks))
    // textInput.value="";

    
}
function addTaskToDOM(taskText){
    let ul=document.getElementById("taskList");
    let li=document.createElement("li");
    console.log(li)
    li.innerHTML=`
        <span>${taskText}</span>
        <span>
        <span class='btn btn-danger' onclick="deleteTask(this)">Delete</span>
        <span class='btn btn-success' onclick="updateTask(this)">Update</span>
        </span>
    `
    ul.appendChild(li)
}
function deleteTask(element){
    let li=element.parentElement.parentElement;
    let taskText=li.firstElementChild.innerText;
    li.remove();

    let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    tasks=tasks.filter(task=>task!==taskText)
    localStorage.setItem("tasks",JSON.stringify(tasks))
}
function updateTask(element){
    let taskSpan=element.parentElement.parentElement.querySelector("span");
    let oldText=taskSpan.textContent;
    let newText=prompt("Enter new text:");
    
    if (newText!==null && newText.trim()!==""){ 
        
        taskSpan.textContent=newText;

        let tasks=JSON.parse(localStorage.getItem("tasks")) || []; 
        let index=tasks.indexOf(oldText); 

        if (index!==-1){ 
            tasks[index]=newText; 
            localStorage.setItem("tasks",JSON.stringify(tasks));
        }
    }
    
}