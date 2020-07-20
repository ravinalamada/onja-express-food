
// REFERENCES
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');
const addOrderBtn = document.querySelector('.add-order');
const sel = document.querySelector('.select-form');
const detailBtn= document.querySelector('.details')
const deleteBtn = document.querySelector('.served');


// Show the form

const openModal = () => {

  modalInner.innerHTML = `
      <form>
        <p>Your name :</p>
        <input class="input-form" type="text" id="name" name="name" placeholder="Enter your name here" required />
        <p>Please select your dish :</p>
        <select name="dish" class="select-form" required>
          <option value="romazava">Romazava</option>
          <option value="koba">Koba</option>
          <option value="ravitoto">Ravitoto</option>
          <option value="mokary">Mokary</option>
          <option value="achard">Achard</option>
          <option value="masikita">Masikita</option>
          <option value="sambos">Sambos</option>
          <option value="mofo-baolina">Mofo baolina</option>
          <option value="ranonapango">Ranonapango</option>
        </select>
        <p>Please select the size of your plate :</p>
        <input type="radio" id="small" name="size" value="small" required />
        <label for="small">Small</label><br />
        <input type="radio" id="medium" name="size" value="medium" />
        <label for="medium">Medium</label><br />
        <input type="radio" id="large" name="size" value="large" />
        <label for="large">Large</label><br />
        <p>How many pieces do you want to order?</p>
        <input class="input-form" type="number" id="quantity" name="amount" placeholder="Enter a number here"
          required />
        <button class="submit-order" type="submit">Add this order</button>
    </form>
  `
  modalOuter.classList.add('open');
};

// Close the modal when the user click the outterModal

const handleClick = event => {
  const isOutside = !event.target.closest('.modal-inner');
  if(isOutside) {
    modalOuter.classList.remove('open');
  };
};

const handleEscape = (e) => {
  if(e.key === 'Escape') {
    modalOuter.classList.remove('open');
  };
};

// Listen the submit event

window.addEventListener('submit', (event) => {
  event.preventDefault();
  if (event.target.matches('form')) {

// Creat and show the new list
    const name = document.getElementById('name');
    const myHtml = `<div class="order" data-dish="romazava" data-size="large" data-amount="2">
      <span class="title">
        ${name.value}
      </span>
      <button class="details">Details</button>
      <button class="served">Delete order</button>
      </div>
    </div>`;
    event.target = myHtml;
    const orderList = document.querySelector('.order-list');
    orderList.insertAdjacentHTML('beforeend', myHtml);
    modalOuter.style.display = "none";
    // const formElement = document.querySelector('form');
    // formElement.reset();

  };
});

// This shows the details of the list order

//  window.addEventListener('click', (event) => {
//   event.preventDefault();
//   if(event.target.matches('button.details')) {
//     let form = event.target;
//     let name = form.name.value;
//     let selectDish = form.dish.value;
//     let selectSize = form.size.value;
//     let selectAmount = form.amount.value;

//   modalInner.innerHTML = `
//       <h2>${name}</h2>
//       <p>Order: ${selectDish} ${selectSize} ${selectAmount}</p>
//     `
//   modalOuter.classList.add('open');
//   };
// });

// Delete the list

const handleDelete = (e) => {
	if (e.target.classList.contains('served')) {
		const deleteBtn = e.target;
    deleteBtn.closest('.order').remove();
	}
};

// Listen the events

window.addEventListener('keydown', handleEscape);
modalOuter.addEventListener('click', handleClick);
addOrderBtn.addEventListener('click', openModal);
document.addEventListener('click', handleDelete);
