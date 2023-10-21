const button=document.querySelector(".searchbox button");
const ui=new UI();
document.addEventListener("DOMContentLoaded",getData)
button.addEventListener("click",function(){
    if(data.value===""){
        alert("Geçerli bir değer girin...");
    }
    else{
        ui.addTodo();
        
        
    }
    saveData();
    data.value="";
});
listContain.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        localStorage.removeItem("data",e.target.parentElement);
        saveData();
        
    }
})
function saveData(){
    localStorage.setItem("data",listContain.innerHTML);
}
function getData(){
    listContain.innerHTML=localStorage.getItem("data");
}