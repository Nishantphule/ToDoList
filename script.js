
const taskArea = document.getElementById("taskList")

// function for creating all task div and actions
function createTask(name) {

  const taskDiv = document.createElement("div")
  var idNo = Math.round(Math.random() * 100)
  taskDiv.classList += "taskDiv"
  taskDiv.id = idNo
  taskArea.appendChild(taskDiv)

  const taskName = document.createElement("input")
  taskName.value = name
  taskName.readOnly = true
  taskName.classList += "createdTask"
  taskName.style.outline = "none"

  const actionDiv = document.createElement("div")
  actionDiv.id = "actionDiv"

  // delete button for each task
  const deleteBtn = document.createElement("button")
  deleteBtn.classList += "btn btn-danger"
  deleteBtn.innerHTML = 'Delete <i class="fa-solid fa-xmark"></i>'
  
  let deleteFunc = () => {
    const deleteTask = document.getElementById(idNo)
    taskArea.removeChild(deleteTask)
  }

  deleteBtn.addEventListener("click", deleteFunc)
  

  // edit button for each task
  const editBtn = document.createElement("button")
  editBtn.classList += "btn btn-info"
  editBtn.innerHTML = 'Edit <i class="fa-solid fa-pen-to-square"></i>'

  let editFunc = () => {
    if (taskName.readOnly == true) {
      taskName.style.outline = "auto"
      taskName.readOnly = false
      editBtn.classList += "btn btn-success"
      editBtn.innerHTML = 'Save <i class="fa-solid fa-check"></i>'
    }
    else {
      taskName.readOnly = true
      taskName.style.outline = "none"
      editBtn.classList += "btn btn-info"
      editBtn.innerHTML = 'Edit <i class="fa-solid fa-pen-to-square"></i>'
    }
  }
  editBtn.addEventListener("click", editFunc)

  
  actionDiv.append(editBtn, deleteBtn)
  taskDiv.append(taskName, actionDiv)

}


// getting form details
const formObj = document.getElementById('taskForm');

let formObjFunc = (e) => {
  e.preventDefault();

  const data = {};

  Array.from(e.target.elements).forEach((element) => {
    if (element.nodeName === 'INPUT') {
      data[element.name] = element.value;
    }
  });

  createTask(data.TaskName)
  formObj.reset()
}

formObj.addEventListener('submit', formObjFunc)


// clear all button event
const clearBtn = document.getElementById("clearAllBtn")

clearBtn.addEventListener("click", () => {
  taskArea.innerHTML = ""
})