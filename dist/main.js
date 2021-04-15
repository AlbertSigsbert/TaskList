//Setting DOM vars
const taskForm = document.querySelector('form');
const addTaskBtn = document.getElementById('add-task');
const taskInput = document.getElementById('task-input');


//Load Event listeners
loadEventListeners();

//The loadEventlisteners fn
function loadEventListeners(){
   taskForm.addEventListener('submit' , addTask);
}

//The eventHandler 
function addTask(e){
   
   if(taskInput.value !== '')
   {
       //Creating a task
    const task = document.createElement('li');
    task.className ='mt-3 flex bg-green-200  px-4 py-2 shadow-md rounded-md hover:bg-green-300';

    //Creating a paragraph
    const para = document.createElement('p');
    para.className ='text-green-700 text-left flex-grow mr-8 border border-transparent';
    para.innerText = taskInput.value;

     //Creating an anchor tag
     const atag = document.createElement('a');
     atag.className ='text-red-500 hover:text-red-700';
     atag.innerText = 'x';

     //Append the paragraph and a tag to li
     task.appendChild(para);
     task.appendChild(atag);

     //Append the li to the ul
     const tasksUl = document.getElementById('tasks');
     tasksUl.appendChild(task);

     //clear the input
      taskInput.value = '';

      console.log(tasksUl) 
   }

  
   e.preventDefault();
}