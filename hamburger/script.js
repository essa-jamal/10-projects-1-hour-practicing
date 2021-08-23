// define elements
const burgerBtn = document.getElementById("burger-button");
const navArea = document.getElementById("nav-area");
const menu1 = document.getElementById("menu1");
const child1 = menu1.parentElement.querySelector(".child");
const menu2 = document.getElementById("menu2");
const child2 = menu2.parentElement.querySelector(".child");

//burger botton events:
burgerBtn.addEventListener("click", () => {
  navArea.classList.toggle("active");
  burgerBtn.classList.toggle("active");

  const lists = navArea.querySelectorAll(".child");
  removeActive(lists);
  console.log(navArea.querySelectorAll(".child li"));
});

// Hide Children itemts
function removeActive(lists) {
  lists.forEach((list) => {
    console.log("list", list.classList.toString());
    list.classList.remove("active");
    list.style.height = getHeight(menu1, 0);
    list.style.height = "0";
  });
}

//menu1 event listener
menu1.addEventListener("click", () => {
  child1.classList.toggle("active");
  if (child1.className.includes("active")) {
    child1.style.height = getHeight(menu1, 20);
  } else {
    child1.style.height = getHeight(menu1, 0);
  }
  console.log("child 1 toggle", child1.className);
});

// menu2 event listener
menu2.addEventListener("click", () => {
  console.log("menu2 clicked", child2.className);
  child2.classList.toggle("active");

  if (child2.className.includes("active")) {
    child2.style.height = getHeight(menu2, 20);
  } else {
    child2.style.height = getHeight(menu2, 0);
  }
  console.log("child 1 toggle", getHeight(menu2, 20));
});

// set children item eight
function getHeight(menu, len) {
  const result =
    (menu.parentElement.querySelectorAll("li").length + 0.5) * len + "px";
  console.log(len, result, menu.parentElement);

  return result;
}
function getChildHeight(child, len) {
  const result = (child.querySelectorAll("li").length + 0.5) * len + "px";
  console.log(len, result, child);

  return result;
}

function buttonEventListener(item) {
  console.log(item.innerText, "clicked");
  const child = item.parentElement.querySelector(".child");
  console.log("menu2 clicked", child2.className);
  child.classList.toggle("active");

  if (child.className.includes("active")) {
    child.style.height = getChildHeight(child, 20);
  } else {
    child.style.height = getChildHeight(child, 0);
  }
  console.log("child 1 toggle", getChildHeight(child, 20));
}
