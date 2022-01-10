//Selectors
const input = document.querySelector('.input');
const inputButton = document.querySelector('.input-button');
const list = document.querySelector('.list');

//Functions
function addListItem(event){
    //prevent from submitting
    event.preventDefault();
    
    //create list div
    const listDiv = document.createElement("div");
    listDiv.classList.add("listDiv");

    //create li
    const newListItem = document.createElement("li");
    newListItem.innerText = input.value;
    newListItem.classList.add("new-listItem");

    listDiv.appendChild(newListItem);

    //buttons - edit 
    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = '<i class="far fa-check-circle"></i>';
    checkBtn.classList.add("checkBtn");
    listDiv.appendChild(checkBtn);

    //button - delete
    const delBtn = document.createElement("button");
    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    delBtn.classList.add("delBtn");
    listDiv.appendChild(delBtn);

    //Append to list
    list.appendChild(listDiv);

    //clear input value after submit
    input.value = "";
}

function deleteButton (e){
    const item = e.target;
    //Delete the list item
    if(item.classList[0] === 'delBtn'){
        const listItemDel = item.parentElement;
        listItemDel.classList.add('deleting');
        listItemDel.addEventListener('transitionend', function(){
            listItemDel.remove();
        })
    }

    if(item.classList[0] === 'checkBtn'){
        const listItemEdit = item.parentElement;
        listItemEdit.classList.toggle("received");
    }

}



//Event Listeners
inputButton.addEventListener('click', addListItem);

list.addEventListener('click', deleteButton);

