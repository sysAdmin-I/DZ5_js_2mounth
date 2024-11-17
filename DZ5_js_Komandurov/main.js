const input = document.getElementById("input");
const createButton = document.getElementById("create_button");
const todoList = document.getElementById("todo_list");

const createTodo = () => {
  if (!input.value.trim()) return alert("напиши что нибудь");

  const div = document.createElement("div");
  const text = document.createElement("h3");
  const text1 = document.createElement("h3");

  let editButton = document.createElement("edit_button");
  editButton.setAttribute('class', 'edit_button');
  editButton.textContent = 'Edit'

  editButton.addEventListener("click", () => {
    text.textContent = undefined
    text.textContent = prompt()
    text === text1.textContent
  })

  let deleteButton = document.createElement("delete_button");
  deleteButton.setAttribute('class', 'delete_button');
  deleteButton.textContent = 'Delete'

  deleteButton.addEventListener("click", () => {
    todoList.removeChild(div)
  })

  div.setAttribute("class", "block_text");

  text.innerHTML = input.value;

  div.append(text);
  div.append(editButton);
  div.append(deleteButton);
  todoList.append(div);

  input.value = "";
};

createButton.onclick = () => createTodo();

input.onkeydown = (e) => {
  if (e.key === "Enter") createTodo();
};



