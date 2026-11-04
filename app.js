const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");
const empty = document.getElementById("empty");

const KEY = "tareas";
let tareas = JSON.parse(localStorage.getItem(KEY) || "[]");

function guardar() {
  localStorage.setItem(KEY, JSON.stringify(tareas));
}

function render() {
  list.innerHTML = "";
  empty.style.display = tareas.length ? "none" : "block";

  tareas.forEach((t, i) => {
    const li = document.createElement("li");
    if (t.done) li.classList.add("done");

    const span = document.createElement("span");
    span.textContent = t.text;
    span.addEventListener("click", () => {
      tareas[i].done = !tareas[i].done;
      guardar();
      render();
    });

    const del = document.createElement("button");
    del.textContent = "\u00d7";
    del.setAttribute("aria-label", "Borrar");
    del.addEventListener("click", () => {
      tareas.splice(i, 1);
      guardar();
      render();
    });

    li.appendChild(span);
    li.appendChild(del);
    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  tareas.push({ text, done: false });
  input.value = "";
  guardar();
  render();
});

render();
