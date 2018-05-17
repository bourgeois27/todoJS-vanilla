import * as api from './api.js';
import { setAttributes } from './helpers.js';

let userId = null;
let tasks = [];

const registerBtn = document.getElementById('register-btn');
const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task');
const cancelBtn = document.getElementById('cancel-btn');
const tasksList = document.getElementById('tasks');

registerBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  userId = await api.getUser();
  await console.log(`userId = ${userId}`);
  document.querySelector('.jumbotron').style.display = 'none';
  document.getElementById('todo').style.display = 'inline';
  tasks = await api.getTasks(userId);
  repaint();
});

addBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const task = taskInput.value;
  await api.createTask(userId, task);
  taskInput.value = '';
  repaint();
});

cancelBtn.addEventListener('click', (e) => {
  e.preventDefault();
  taskInput.value = '';
});

const repaint = async () => {
  tasksList.innerHTML = '';
  tasks = await api.getTasks(userId);
  if(tasks.length > 0) {
    tasks.forEach(task => {
      addElement(task);
    });
  }
  else {
    tasksList.innerHTML = `<li class="list-group-item">You don't have any tasks to do yet...</li>`
  }
}

const addElement = async (task) => {
    /* créer le li */
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    
    /* créer div globale */
    const divTask = document.createElement('div');
    divTask.classList.add('row', 'justify-content-between');

    /* créer div nom */
    const divNom = document.createElement('div');
    const nom = document.createElement('input');
    nom.readOnly = true;
    setAttributes(nom, { value: task.name, type: 'text' });
    nom.classList.add('form-control');
    divNom.appendChild(nom);

    /* créer btn div */
    const divBtn = document.createElement('div');
    divBtn.classList.add('col-4');

    /* créer divBtn2 */
    const divBtn2 = document.createElement('div');
    divBtn2.classList.add('row', 'justify-content-end');

    /* créer divEdit */
    const divEdit = document.createElement('div');
    divEdit.classList.add('col-2');

    /* créer i edit */
    const editIcon = document.createElement('i');
    editIcon.classList.add('fas', 'fa-edit');
    editIcon.addEventListener('click', () => {
      const infoBox = document.createElement('div');
      infoBox.classList.add('alert', 'alert-info', 'mt-4');
      infoBox.setAttribute('role', 'alert');
      const infoText = document.createTextNode('Just change the name in the input box to whatever you want and press enter to edit this task.');
      infoBox.appendChild(infoText);
      li.appendChild(infoBox);
      nom.readOnly = false;
      nom.addEventListener('keypress', async (event) => {
        const key = event.which || event.keyCode;
        if(key == 13) {
          await api.editTask(userId, task.id, nom.value);
          repaint();
        }  
      });
    });

    /* créer divTrash */
    const divTrash = document.createElement('div');
    divTrash.classList.add('col-2');
    
    /* créer i trash */
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fas', 'fa-trash');
    trashIcon.addEventListener('click', async () => {
      await api.deleteTask(userId, task.id);
      repaint();
    });

    divTrash.appendChild(trashIcon);
    divEdit.appendChild(editIcon);
    divBtn2.appendChild(divEdit);
    divBtn2.appendChild(divTrash);
    divBtn.appendChild(divBtn2);
    divTask.appendChild(divNom);
    divTask.appendChild(divBtn);
    li.appendChild(divTask);
    tasksList.appendChild(li);
}
