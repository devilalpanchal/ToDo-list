

const inputGiveTask = document.querySelector('#input')
console.log(inputGiveTask);

const CreateTaskBtn = document.querySelector('.CreateBtn')
console.log(CreateTaskBtn);

const CreateTaskListContainer = document.querySelector('.createTask')
// console.log(CreateTaskListContainer);
const WantToClose = document.querySelector('.WantToClose')
console.log(WantToClose);


function AddNewTask(){
const NewTask = document.createElement('div')
NewTask.classList.add('OneMoreTask')
NewTask.style.display = 'flex'
NewTask.style.justifyContent = 'center'
NewTask.style.alignItems = 'center'
NewTask.style.gap = '70px'
NewTask.style.width = '380px'
NewTask.style.height = '50px'
NewTask.style.border = '1px solid blue'
NewTask.style.backgroundColor = 'wheat'
NewTask.style.borderRadius = '20px'
NewTask.style.marginTop = '20px'
WantToClose.append(NewTask)

const Image = document.createElement('img')
Image.src = 'check.png'
Image.style.width = '20px'
Image.style.height = '20px'
NewTask.appendChild(Image)

const nameoftask = document.createElement('div')
nameoftask.innerText = 'devilal panchal intro'

NewTask.appendChild(nameoftask)

const CloseTask = document.createElement('div')
CloseTask.style.textAlign = 'center'
CloseTask.style.border = '1px solid red'
CloseTask.innerText = 'X'
CloseTask.style.fontSize = '15px'
CloseTask.style.width = '21px'
CloseTask.style.height = '21px'
CloseTask.style.color = 'red'
NewTask.appendChild(CloseTask)




}



CreateTaskBtn.addEventListener('click',AddNewTask)

CloseTask.addEventListener('click',()=>{
    WantToClose.classList.add('hide')
})
