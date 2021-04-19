//Setting DOM vars
const taskForm = document.querySelector('form');
const addTaskBtn = document.getElementById('add-task');
const taskInput = document.getElementById('task-input');
const tasks = document.getElementById('tasks');
const clearTasks = document.getElementById('clear-task');
const filterInput = document.getElementById('filter-input');

//Load Event listeners
loadEventListeners();

//The loadEventlisteners fn
function loadEventListeners(){
   //Add task Event
   taskForm.addEventListener('submit' , addTask);
   //Remove task Event
   tasks.addEventListener('click' , removeTask);
   //Clear tasks Event
   clearTasks.addEventListener('click', clearAllTasks);
   //Filter tasks
   filterInput.addEventListener('keyup', filterTasks);

}

//The addTask eventHandler 
function addTask(e){
   
   if(taskInput.value !== '')
   {
       //Creating a task
    const task = document.createElement('li');
    task.className ='task mt-3 flex bg-green-200  px-4 py-2 shadow-md rounded-md hover:bg-green-300';

    //Creating a paragraph
    const para = document.createElement('p');
    para.className ='text-green-700 text-left flex-grow mr-8 border border-transparent';
    para.innerText = taskInput.value;

     //Creating an anchor tag
     const atag = document.createElement('a');
     atag.className ='text-red-500 hover:text-red-700';
     atag.innerHTML = '<i class="fa fa-times"></i>';

     //Append the paragraph and a tag to li
     task.appendChild(para);
     task.appendChild(atag);

     //Append the li to the ul
     const tasksUl = document.getElementById('tasks');
     tasksUl.appendChild(task);

     //clear the input
      taskInput.value = '';

      // console.log(tasksUl) 
   }

  
   e.preventDefault();
}

//Remove task eventHandler
function removeTask(e){
   if(e.target.parentElement.classList.contains('text-red-500'))
   {
     if(confirm('Do you want to delete this task?'))
     {
      e.target.parentElement.parentElement.remove();
     }
   }
}

//Clear tasks eventHandler
function clearAllTasks(){
   // tasks.innerHTML = '';

   if(confirm('Do you want to clear all tasks?'))
   {
      while(tasks.firstChild)
      {
         tasks.removeChild(tasks.firstChild);
      }
   
   }
  
}

//Filter tasks eventHandler
function filterTasks(e){
  const text = e.target.value.toLowerCase();
 // console.log(text);

 document.querySelectorAll('.task').forEach(function(task){
    const taskName = task.firstChild.textContent.toLowerCase();

    if(taskName.indexOf(text) != -1)
    {
       task.classList.add('block');
    }
    else{
      task.classList.add('hidden');
    }
 });
}