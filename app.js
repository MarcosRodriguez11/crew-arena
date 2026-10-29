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

  tareas.forEach((tarea, i) => {
    const li = document.createElement("li");
    li.className = "item" + (tarea.hecha ? " done" : "");

    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = tarea.hecha;
    check.addEventListener("change", () => {
      tareas[i].hecha = check.checked;
      guardar();
      render();
    });

    const span = document.createElement("span");
    span.textContent = tarea.texto;

    const del = document.createElement("button");
    del.className = "del";
    del.textContent = "✕";
    del.setAttribute("aria-label", "Borrar tarea");
    del.addEventListener("click", () => {
      tareas.splice(i, 1);
      guardar();
      render();
    });

    li.append(check, span, del);
    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const texto = input.value.trim();
  if (!texto) return;
  tareas.push({ texto, hecha: false });
  input.value = "";
  guardar();
  render();
});

render();
