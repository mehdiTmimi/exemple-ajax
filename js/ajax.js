export const getTodos=()=>{
    return new Promise((resolve,reject)=>{
        let ajax=new XMLHttpRequest();
        ajax.open("get","https://jsonplaceholder.typicode.com/todos",true);
        ajax.onload=()=>{
           resolve(JSON.parse(ajax.response))
        }
        ajax.onerror=()=>{
            reject("error")
        }
        ajax.send()
    })
 
}