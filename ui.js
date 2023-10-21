//arayüz
const listContain=document.getElementById("list-container");
const data=document.querySelector(".searchbox input");

class UI{
    addTodo(){
        listContain.innerHTML+=`
        <li>${data.value}
        <span>\u00d7</span> 
        </li>
        `}
}
