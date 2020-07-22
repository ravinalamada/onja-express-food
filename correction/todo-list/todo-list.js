// REFERENCES
console.log("Prisca");
const addBtn = document.querySelector('.add-btn');
const listContainer = document.querySelector('.list-container');
const list = document.querySelector('.list');
const newTodoList = document.querySelector('#list');

const addNewList = () => {
  const html = ` <div class="list example">
    <h2> ${newTodoList.value} </h2>
    <input type="checkbox" id="checkbox" class="checkbox">
  </div>`;
  return html;
}

addBtn.addEventListener('click', (e) => {
  const newList = addNewList();
  listContainer.insertAdjacentHTML('beforeend', newList);
  e.preventDefault();
})

const deleteList = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('checkbox')) {
   e.target.closest('.example').remove();
  }
}
