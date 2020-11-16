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
    //Add Event Listeners

    //Procedural Functionality
    //(1)Load list object.

    refreshThePage();
}

const refreshThePage = () => {
    clearListDisplay();
    //(2)Render the list
    renderList();
    //(3)Clear item entry field
    //(4)Set focus on item entry field
}

const clearListDisplay = () => {
    //Parent element for all the list elements
    const parentElement = document.getElementById("listItems");
    deleteContents(parentElement);
}

const deleteContents = (parentElement) => {
    let child = parentElement.lastElementChild;
    while(child){
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
}

const renderList = () => {
    const list = toDoList.getList;
    list.forEach((item) => {
        buildListItem(item);
    });
}

const buildListItem = () => {
    const div = document.createElement("div")
    div.className = "item";
    const check = document.createElement("input");
    check.type = "checkbox";
    check.id = item.getId();
    check.tabIndex = 0;
}