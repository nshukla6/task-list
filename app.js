const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

tasks=[];

init();
loadAllEventsListener();


function loadAllEventsListener() {
    
    form.addEventListener('submit',addTask);
    taskList.addEventListener('click',deleteTask);
    clearBtn.addEventListener('click',clearTasks);
    filter.addEventListener('keyup',filterTasks);
    
    
}


function init(){
     let items=JSON.parse(localStorage.getItem('tasks'));
     let li;
     if(items!==null){
        items.forEach((item)=>{
            tasks.push(item);
           li=makeListItem(item);
           taskList.appendChild(li);
        });
     }
     

}
function filterTasks(e) {
   
   let task= e.target.value.toLowerCase();
   document.querySelectorAll('.collection-item').forEach((item)=>{
    
    if(item.textContent.toLowerCase().indexOf(task)!=-1){
        item.style.display='block';

    }
    else{
        item.style.display='none';
    }
   })
   
}

function clearTasks(e) {
    taskList.innerHTML='';

}

function deleteTask(e) {
    let text,index;
    if(e.target.classList.contains('fa-remove')){
        text=e.target.parentElement.parentElement.textContent;
        index=tasks.indexOf(text);
        if(index!=-1){
            tasks.splice(index,1);
        }
        //console.log(tasks);
            e.target.parentElement.parentElement.remove();
            localStorage.setItem('tasks',JSON.stringify(tasks));

        
        
    }
    
    
    }
    



function addTask(e) {
    e.preventDefault();

    if(taskInput.value===''){
        alert('No Task');
        return;
    }
    let li=makeListItem(taskInput.value);

    // append li to ul
    taskList.appendChild(li);
    tasks.push(taskInput.value)

    //console.log(tasks);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    
    
    
    taskInput.value='';

    
  

}

function makeListItem(item) {

    // make the new list item
    let li=document.createElement('li');

    // add class
    li.className='collection-item';

    // add input text

    li.appendChild(document.createTextNode(item));

    // create new link

    let link=document.createElement('a');
    // add the class

    link.className='delete-item secondary-content';

    // add remove icon

    link.innerHTML='<i class="fa fa-remove"></i>';
    // make link child of li

    li.appendChild(link);
    return li;

}


class Person {
    constructor(firstName,lastName) {
        this.firstName=firstName;
        this.lastName=lastName;
    }

    greetings(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    static addNum(num1,num2){
        return num1+num2;
    }
}

const nitin=new Person('Nitin','Shukla');
// console.log(nitin.addNum(1,2));
console.log(Person.addNum(1,2));


class Customer extends Person {
    constructor(firstName,lastName,custId){
        super(firstName,lastName);
        this.custId=custId;
    }
    getCustomerID(){
        return this.custId;
    }
}

const cust = new Customer('amit','chouhan','id5678');

console.log(cust.greetings());
