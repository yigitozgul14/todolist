class Storage{
    static addtodostoStorage(todo){
        let todos=this.gettodosfromstorage();
        todos.push(todo);
        localStorage.setItem("todos",JSON.stringify(todos));

    }
    
    static gettodosfromstorage(){
        let todos;
        if(localStorage.getItem("todos")===null){
            todos=[];
        }
        else{
            todos=JSON.parse(localStorage.getItem("todos"));
        }
        return todos;
        //burda storageden arrayimizi oluşturuduk,yukarıdaki fonksiyona gönderdik
    }
}