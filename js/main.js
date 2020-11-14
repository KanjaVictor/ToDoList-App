import ToDoList from "./todolist.js";
import ToDoItem from "./todoitem.js";

const toDoList = new ToDoList();

//Launch App
document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete"){
        initApp();
    }
});

const initApp = () => {
    //Add Listeners

    //Procedural Functionality
    //(1)Load list object.

    refreshThePage();
}

const refreshThePage = () => {
    clearListDisplay();
    //(2)Render the list
    //(3)Clear item entry field
    //(4)Set focus on item entry field
}

