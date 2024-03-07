

const inputGiveTask = document.querySelector('#input')
const CreateTaskBtn = document.querySelector('.CreateBtn')
const CreateTaskListContainer = document.querySelector('.createTask')
const WantToClose = document.querySelector('.WantToClose')


// A function to exececute to click create task button
CreateTaskBtn.addEventListener('click', AddNewTask)

function AddNewTask() {

        // inputGiveTask.forEach((item)=>{
        //     item.addEventListener('keyup',(e)=>{
        //         let input = e.target
        //         if(e.keyCode == 13){
        //             const NewTask = document.createElement('div')
        //             NewTask.classList.add('OneMoreTask')
        //             NewTask.style.display = 'flex'
        //             NewTask.style.justifyContent = 'center'
        //             NewTask.style.alignItems = 'center'
        //             NewTask.style.gap = '70px'
        //             NewTask.style.width = '380px'
        //             NewTask.style.height = '50px'
        //             NewTask.style.border = '1px solid blue'
        //             NewTask.style.backgroundColor = 'wheat'
        //             NewTask.style.borderRadius = '20px'
        //             NewTask.style.marginTop = '20px'
        //             WantToClose.append(NewTask)
                
        //             const Image = document.createElement('img')
        //             Image.src = './image/uncheck.png'
        //             Image.style.width = '20px'
        //             Image.style.height = '20px'
        //             NewTask.appendChild(Image)
                
                
        //             const nameoftask = document.createElement('div')
        //             nameoftask.innerText = inputGiveTask.value
        //             NewTask.appendChild(nameoftask)

        //         }
        //     })
        // })


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
    Image.src = './image/uncheck.png'
    Image.style.width = '20px'
    Image.style.height = '20px'
    NewTask.appendChild(Image)


    const nameoftask = document.createElement('div')
    nameoftask.innerText = inputGiveTask.value
    NewTask.appendChild(nameoftask)



    //********************** for done task add delete like cut**********************
    Image.addEventListener('click', () => {
        Image.src = './image/check.png'
        Image.style.width = '20px'
        Image.style.height = '20px'

        alert('Task is completed')
        confirm('You Can Not Reuse of this task')

        const del = document.createElement('del')
        del.textContent = inputGiveTask.value
        nameoftask.innerText = inputGiveTask.value = '  '
        nameoftask.append(del)


    })


//********************** */ to close task******************************
    const CloseTask = document.createElement('div')
    CloseTask.style.textAlign = 'center'
    CloseTask.classList.add('closeContent')
    CloseTask.style.border = '1px solid red'
    CloseTask.innerText = 'X'
    CloseTask.style.fontSize = '15px'
    CloseTask.style.width = '21px'
    CloseTask.style.height = '21px'
    CloseTask.style.color = 'red'
    NewTask.appendChild(CloseTask)

    CloseTask.addEventListener('click', () => {
        NewTask.style.display = 'None'
    })

}


