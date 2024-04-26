const addCheckboxBtn = document.querySelector("#add-item");

addCheckboxBtn.addEventListener("click", function() {
  let task = prompt('Add Task');
  const checkboxWrap = document.createElement("div");
  checkboxWrap.classList.add('list-item');

  const labelWrap = document.createElement("div");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const label = document.createElement("label");
  label.textContent = task;
  label.setAttribute('id',task.toLowerCase());

  labelWrap.appendChild(checkbox);
  labelWrap.appendChild(label);

  checkboxWrap.appendChild(labelWrap);
  // checkboxWrap.appendChild(label);

  const deleteLabel = document.createElement("a");
  deleteLabel.setAttribute('href',"#");
  deleteLabel.innerText = "Delete";
  deleteLabel.classList.add('delete');


  const editLabel = document.createElement("a");
  editLabel.setAttribute('href',"#");
  editLabel.innerText = "Edit";
  editLabel.classList.add('edit');


  const actionWrap = document.createElement("div");

  actionWrap.appendChild(deleteLabel);
  actionWrap.appendChild(editLabel);

  checkboxWrap.appendChild(actionWrap);



  const div = document.querySelector('.list-wrapper');
  div.appendChild(checkboxWrap);

  // div.appendChild(actionWrap);
});

const deleteItem = document.querySelectorAll(".delete");
console.log(deleteItem);
deleteItem.forEach(element => {
  console.log(this.textContent);
  element.addEventListener("click", function() {
  deleteTodoItem(element);
  });
});

function deleteTodoItem(element) {
  console.log(element.closest(".list-item"));
  element.closest(".list-item").remove();
}

const editItem = document.querySelectorAll(".edit");
console.log(editItem);

editItem.forEach(element => {
  // console.log(this.textContent);
  element.addEventListener("click", function() {
    editToDoItem(element);
  });
});

function editToDoItem(element) {
  console.log(element.parentElement.previousElementSibling.children[1].innerHTML);
  let taskName = element.parentElement.previousElementSibling.children[1].innerHTML;
  let label = element.parentElement.previousElementSibling.children[1];

  let editTask = prompt(taskName);

  label.textContent = editTask;
}

