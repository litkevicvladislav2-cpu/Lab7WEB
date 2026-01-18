const sumBtn = document.getElementById("sumBtn");

sumBtn.addEventListener("click", () => {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);

    const sum = a + b + c;
    document.getElementById("sumResult").innerHTML =
        "Сума: " + sum;
});

function createObject() {
    const newDiv = document.createElement("div");
    newDiv.className = "circle";
    document.getElementById("container").appendChild(newDiv);
}

document
    .getElementById("circleBtn")
    .addEventListener("click", createObject);

    document.getElementById("addTaskBtn").addEventListener("click", () => {
    const text = document.getElementById("taskInput").value;

    if (text === "") return;

    const li = document.createElement("li");
    li.innerText = text;

    li.addEventListener("click", () => {
        li.remove();
    });

    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
});
