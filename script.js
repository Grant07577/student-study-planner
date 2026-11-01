// Student Study Planner - application logic
// Each task is an object: { id, title, subject, priority, completed }

const STORAGE_KEY = "studyPlannerTasks";
let tasks = [];

// ----- Find the page elements we need -----
const form = document.getElementById("task-form");
const titleInput = document.getElementById("task-title");
const subjectInput = document.getElementById("task-subject");
const priorityInput = document.getElementById("task-priority");
const formError = document.getElementById("form-error");
const taskList = document.getElementById("task-list");
const emptyMessage = document.getElementById("empty-message");
const totalCount = document.getElementById("total-count");
const completedCount = document.getElementById("completed-count");
const pendingCount = document.getElementById("pending-count");

// Make a unique id for each task
function generateId() {
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

// Read tasks from Local Storage. Bad or missing data gives an empty list.
function loadTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(saved)) return [];
    return saved
      .filter(t => t && typeof t.title === "string" && t.title.trim() !== "")
      .map(t => ({
        id: t.id ? String(t.id) : generateId(),
        title: t.title,
        subject: typeof t.subject === "string" ? t.subject : "",
        priority: ["Low", "Medium", "High"].includes(t.priority) ? t.priority : "Medium",
        completed: t.completed === true
      }));
  } catch (error) {
    return [];
  }
}

// Save the current tasks to Local Storage
function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    showError("Could not save tasks in this browser.");
  }
}

// Check the form. Returns an error message, or "" if everything is fine.
function validateForm(title, subject) {
  if (title === "") return "Please enter a task title.";
  if (subject === "") return "Please enter a subject or course.";
  return "";
}

function showError(message) {
  formError.textContent = message;
  formError.hidden = message === "";
}

// Add a new task from the form
function addTask(event) {
  event.preventDefault();
  const title = titleInput.value.trim();
  const subject = subjectInput.value.trim();

  const message = validateForm(title, subject);
  if (message) {
    showError(message);
    (title === "" ? titleInput : subjectInput).focus();
    return;
  }

  tasks.push({
    id: generateId(),
    title: title,
    subject: subject,
    priority: priorityInput.value,
    completed: false
  });
  saveTasks();
  renderTasks();

  form.reset();
  priorityInput.value = "Medium";
  showError("");
  titleInput.focus();
}

// Flip a task between complete and incomplete
function toggleTaskCompletion(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;
  task.completed = !task.completed;
  saveTasks();
  renderTasks();
}

// Remove one task by its id
function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  renderTasks();
}

// Update the three summary numbers
function updateSummary() {
  const done = tasks.filter(t => t.completed).length;
  totalCount.textContent = tasks.length;
  completedCount.textContent = done;
  pendingCount.textContent = tasks.length - done;
}

// Small helper: create an element with text (textContent keeps user input safe)
function makeElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

// Draw every task on the page
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const item = makeElement("li", "task-item" + (task.completed ? " completed" : ""));

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "check-" + task.id;
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleTaskCompletion(task.id));

    const body = makeElement("div", "task-body");
    const title = makeElement("label", "task-title", task.title);
    title.htmlFor = checkbox.id; // clicking the title toggles the checkbox
    title.style.fontWeight = "600";
    title.style.marginBottom = "0";
    title.className = "task-title";
    const subject = makeElement("div", "task-subject", task.subject);

    const meta = makeElement("div", "task-meta");
    meta.appendChild(makeElement("span",
      "badge " + (task.completed ? "status-done" : "status-pending"),
      task.completed ? "\u2713 Completed" : "\u25CB Pending"));
    meta.appendChild(makeElement("span", "badge priority-" + task.priority, task.priority + " priority"));

    body.append(title, subject, meta);

    const deleteButton = makeElement("button", "btn btn-delete", "Delete");
    deleteButton.type = "button";
    deleteButton.setAttribute("aria-label", "Delete task: " + task.title);
    deleteButton.addEventListener("click", () => deleteTask(task.id));

    item.append(checkbox, body, deleteButton);
    taskList.appendChild(item);
  });

  emptyMessage.hidden = tasks.length > 0;
  updateSummary();
}

// Start the app
tasks = loadTasks();
renderTasks();
form.addEventListener("submit", addTask);
titleInput.addEventListener("input", () => showError(""));
subjectInput.addEventListener("input", () => showError(""));
