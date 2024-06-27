const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", submitTodo);

function submitTodo(event) {
	event.preventDefault();

	const todoText = todoInput.value.trim();

	if (todoText === "") return;

	const todoItem = createTodoItem(todoText);
	todoList.appendChild(todoItem);

	todoInput.value = "";
}

function createTodoItem(todoText) {
	const todoItem = document.createElement("li");
	todoItem.classList.add("todo-item");

	const taskText = document.createElement("span");
	taskText.textContent = todoText;
	todoItem.appendChild(taskText);

	const completeButton = document.createElement("button");
	completeButton.classList.add("complete-btn");
	completeButton.textContent = "Complete";
	completeButton.addEventListener("click", toggleComplete);
	todoItem.appendChild(completeButton);

	const deleteButton = document.createElement("button");
	deleteButton.classList.add("trash-btn");
	deleteButton.textContent = "Delete";
	deleteButton.addEventListener("click", deleteTodo);
	todoItem.appendChild(deleteButton);

	return todoItem;
}

function toggleComplete(event) {
	const todoItem = event.target.parentElement;
	todoItem.classList.toggle("completed");
}

function deleteTodo(event) {
	const todoItem = event.target.parentElement;
	todoItem.remove();
}