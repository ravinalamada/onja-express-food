
// REFERENCES
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');
const addOrderBtn = document.querySelector('.add-order');
const sel = document.querySelector('.select-form');
const formElement = document.querySelector('form');
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
}

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

// Creat and show the new list

// Listen the submit event

window.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.matches('button.submit-order')) {
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
  };
});

// Delete the list

const handleDelete = (e) => {
	if (e.target.classList.contains('served')) {
		const deleteBtn = e.target;
    deleteBtn.closest('.order').remove();
	}
};

// var sel = document.querySelector('.select-form');
// var el = document.getElementById('display');

//   const getSelectedOption = (sel) => {
//         var opt;
//         for ( var i = 0, len = sel.options.length; i < len; i++ ) {
//             opt = sel.options[i];
//             if ( opt.selected === true ) {
//               sel.textContent = opt.selected;
//             }
//         }
//         return opt;
//     };

// const getRadioCheckedValue = (radio_name) => {
//   var oRadio = document.forms[0].elements[radio_name];

//    for(var i = 0; i < oRadio.length; i++)
//    {
//       if(oRadio[i].checked)
//       {
//          return oRadio[i].value;
//       }
//    }
//    return '';
// };

// Listen the events

window.addEventListener('keydown', handleEscape);
modalOuter.addEventListener('click', handleClick);
addOrderBtn.addEventListener('click', openModal);
document.addEventListener('click', handleDelete);
// detailBtn.addEventListener('submit', getSelectedOption);
// detailBtn.addEventListener('submit', getRadioCheckedValue);
