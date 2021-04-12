//defining const
const todoInput = document.querySelector(".todo-input");
const button = document.querySelector(".submit");
const order = document.querySelector(".todo-order");

const submit = button.addEventListener("click", push);

order.addEventListener("click", deltecheck);

function push(event) {
  //preventing infrom auto submit
  event.preventDefault();
  const tododiv = document.createElement("div");
  tododiv.classList.add("new");
  const newtodoin = document.createElement("li");
  newtodoin.innerText = todoInput.value;
  newtodoin.classList.add("todo_item");
  tododiv.appendChild(newtodoin);
  //adding button
  const comButton = document.createElement("button");
  comButton.innerHTML = '<i class="fas fa-check"></i>';
  comButton.classList.add("completedbutton");
  tododiv.appendChild(comButton);
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trashbutton");
  tododiv.appendChild(trashButton);
  //appending to the ul
  order.appendChild(tododiv);
  //to clear the input value in deafault
  todoInput.value = "";
}

function deltecheck(e) {
  const item = e.target;
  //deleteitem
  if (item.classList[0] === "trashbutton") {
    const d = item.parentElement;
    d.classList.add("fall");
    d.addEventListener("transitionend", function () {
      d.remove();
    });
  }

  if (item.classList[0] === "completedbutton") {
    const d = item.parentElement;
    d.classList.toggle("completed");
  }
}
