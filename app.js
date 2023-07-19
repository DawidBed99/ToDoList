const inputBar = document.querySelector(".inputBar");
const listContainer = document.querySelector(".list_Container");
const btn = document.querySelector(".button");
const btnAll = document.querySelector(".AllTasks");
const btnDone = document.querySelector(".TasksDone");
const btnNotDone = document.querySelector(".TasksNotDone");
const btnClear = document.querySelector(".clearAll");
const list_Container = document.querySelector(".list_Container");

btnClear.addEventListener("click", () => {
  var childElements = document.querySelector(".list_Container");
  var delChild = childElements.lastChild;
  while (delChild) {
    childElements.removeChild(delChild);
    delChild = childElements.lastChild;
  }
});

function AddElement() {
  if (inputBar.value === "") {
    alert("You must add something first!");
  } else {
    const listElement = document.createElement("li");
    listElement.className = "element";
    listElement.innerHTML = inputBar.value;
    listContainer.appendChild(listElement);
    let deleteElement = document.createElement("img");
    deleteElement.classList = "delete";
    deleteElement.src = "images/bin.png";
    listElement.appendChild(deleteElement);
  }
  inputBar.value = "";
  saveData();
}

inputBar.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    AddElement();
  }
});

listContainer.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveData();
  }
});

btnAll.addEventListener("click", () => {
  const allElements = listContainer.querySelectorAll(".element");
  allElements.forEach((element) => {
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    }
  });
});

btnNotDone.addEventListener("click", () => {
  const allElements = listContainer.querySelectorAll(".element");
  allElements.forEach((element) => {
    if (element.classList.contains("checked")) {
      element.classList.add("hidden");
    } else {
      element.classList.remove("hidden");
    }
  });
});

btnDone.addEventListener("click", () => {
  const allElements = listContainer.querySelectorAll(".element");
  allElements.forEach((element) => {
    if (!element.classList.contains("checked")) {
      element.classList.add("hidden");
    } else {
      element.classList.remove("hidden");
    }
  });
});
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function displayData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
displayData();
