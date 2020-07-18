console.log('good luck!');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');
const addOrderBtn = document.querySelector('.add-order');
const submitOrder = document.querySelector('.submit-order');
const name = document.getElementById('name');
const sel = document.querySelector('.select-form');
const formElement = document.querySelector('form');
const detailBtn= document.querySelector('.details')
const deleteBtn = document.querySelector('.served');

// Show the form

const openModal = () => {
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

submitOrder.addEventListener('click', (e) => {
  const myHtml = `<div class="order" data-dish="romazava" data-size="large" data-amount="2">
  <span class="title">
    ${name.value}
  </span>
  <button class="details">Details</button>
  <button class="served">Delete order</button>
  </div>
</div>`

e.preventDefault();
const orderList = document.querySelector('.order-list');
orderList.insertAdjacentHTML("beforeend", myHtml);
modalOuter.style.display = "none";
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

window.addEventListener('keydown', handleEscape);
modalOuter.addEventListener('click', handleClick);
addOrderBtn.addEventListener('click', openModal);
document.addEventListener('click', handleDelete);
// detailBtn.addEventListener('submit', getSelectedOption);
// detailBtn.addEventListener('submit', getRadioCheckedValue);
