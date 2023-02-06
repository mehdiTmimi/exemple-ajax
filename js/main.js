import { getTodos } from "./ajax.js";
import { Todo } from "./Todo.js";

/*getTodos().then(data=>
    {
        data.forEach(element => {
            addTodoToTable(element)
        });
    }).catch(err=>console.log(err))
    */
fetch("https://jsonplaceholder.typicode.com/todos").then(response=>response.json())
.then(data=>{
    data.forEach(element => {
        addTodoToTable(element)
    });
}).catch(err=>console.log(err))
const addTodoToTable=(todo)=>{
 const tr=document.createElement("tr")
 const td1=document.createElement("td")
 const td2=document.createElement("td")
 const td3=document.createElement("td")
 const td4=document.createElement("td")

 tr.appendChild(td1)
 tr.appendChild(td2)
 tr.appendChild(td3)
 tr.appendChild(td4)

 td1.innerText=todo.userId
 td2.innerText=todo.id
 td3.innerText=todo.title
 td4.innerText=todo.completed

 document.getElementById("tbody").appendChild(tr)
}

