let addToDoButton = document.getElementById("addToDo");
let ToDoContainer=document.getElementById('ToDoContainer');
let inputText=document.getElementById('inputText');
let clearToDo=document.getElementById('clearToDo');

// When the 'Add' button is clicked.. 
addToDoButton.addEventListener('click', function(){
    let button =document.createElement('INPUT');
    button.setAttribute("type", "checkbox");
    button.classList.add('button-styling');
    
    let paragraph=document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    ToDoContainer.appendChild(paragraph);
    paragraph.innerHTML=inputText.value;
    inputText.value='';
    paragraph.appendChild(button);

// The checkbox button which is checked delete..
    clearToDo.addEventListener('click',function(){
        if (button.checked==1) {
            paragraph.remove();
        }
    })

});

