/* =========================
   ЗАВДАННЯ №1
========================= */

// Отримуємо елементи
const inputOne = document.getElementById("inputNumberOne");
const inputTwo = document.getElementById("inputNumberTwo");
// третє число створимо логічно (через prompt, щоб відповідало умові)
const buttonSum = document.getElementById("buttonSumNumber");
const result = document.getElementById("resultSumNumber");

// Стрілочна функція
buttonSum.addEventListener("click", () => {
    const a = Number(inputOne.value);
    const b = Number(inputTwo.value);
    const c = Number(prompt("Введіть третє число"));

    const sum = a + b + c;
    result.innerHTML = "Сума: " + sum;
});

/* =========================
   ЗАВДАННЯ №2
========================= */

const buttonCreateCircle = document.getElementById("buttonCreateCircle");
const containerCircle = document.querySelector(".containerCircle");

// Function declaration
function createCircle() {
    const newCircle = document.createElement("div");

    newCircle.style.width = "50px";
    newCircle.style.height = "50px";
    newCircle.style.borderRadius = "50%";
    newCircle.style.backgroundColor = "rgb(0 188 212)";
    newCircle.style.margin = "10px";

    containerCircle.appendChild(newCircle);
}

// Виклик функції при кліку
buttonCreateCircle.addEventListener("click", createCircle);

/* =========================
   ЗАВДАННЯ №3
========================= */

const inputItem = document.getElementById("inputItem");
const buttonCreateItem = document.getElementById("buttonCreateItem");
const list = document.querySelector("ul");

buttonCreateItem.addEventListener("click", () => {
    const text = inputItem.value;

    if (text === "") return;

    const li = document.createElement("li");
    li.className = "styleList";
    li.innerText = text;

    // Видалення при кліку
    li.addEventListener("click", () => {
        li.remove();
    });

    list.appendChild(li);
    inputItem.value = "";
});
