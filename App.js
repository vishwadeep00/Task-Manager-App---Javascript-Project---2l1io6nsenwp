const addTasks = document.querySelectorAll(".addTask");
const statuses = document.querySelectorAll(".status");
let draggableTodo = null;

addTasks.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggableTodo = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
  //   console.log("dragStart");
}

function dragEnd() {
  draggableTodo = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
  //   console.log("dragEnd");
}

statuses.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
}

function dragEnter() {
  console.log("dragEnter");
}

function dragLeave() {
  this.style.border = "none";
  console.log("dragLeave");
}

function dragDrop() {
  this.style.border = "none";
  this.appendChild(draggableTodo);
  console.log("dropped");
}

/* modal */
const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    // modal.classList.remove("active");
    // overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

/* create todo  */
const todo_submit = document.getElementById("todo_submit");

todo_submit.addEventListener("click", createTodo);

function createTodo() {
  const todo_div = document.createElement("div");
  const input_val = document.getElementById("todo_input").value;
  if (input_val === "") return;
  const p = document.createElement("p");
  p.classList.add("drag");
  p.innerText = input_val;
  const hr = document.createElement("hr");
  hr.classList.add("hr-line");
  todo_div.append(hr, p);
  todo_div.classList.add("todo");
  todo_div.classList.add("addtask");
  todo_div.setAttribute("draggable", "true");
{/* <i class="fa-regular fa-circle"></i> */}
mypopup();

    const circleIcon = document.createElement('i');
    circleIcon.classList.add('fa-regular');
    circleIcon.classList.add('fa-circle');
    // <i>\u00D7</i>


  /* create span */
  const span = document.createElement("span"); 
  const span_txt = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(span_txt);

  todo_div.append(circleIcon,span);
  const no_status = document.querySelector("#no_status");
  no_status.appendChild(todo_div);

  span.addEventListener("click", () => {
    span.parentElement.remove();
  });
  //   console.log(todo_div);

  todo_div.addEventListener("dragstart", dragStart);
  todo_div.addEventListener("dragend", dragEnd);

  let todo_form = document.getElementById("todo_input")
  todo_form.value = "";
  todo_form.classList.remove("active");
  overlay.classList.remove("active");
}
 function mypopup(){
  let container = document.getElementById("pop_up");
  console.log(container);

      container.classList.add('visible');
    }
function clicked(){
    let container = document.getElementById("pop_up");
     container.classList.remove('visible')
 }