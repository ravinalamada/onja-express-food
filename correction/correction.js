const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');
const addOrderBtn = document.querySelector('button.add-order');
const orderForm = document.querySelector('form');
const orderList = document.querySelector('.order-list')

const addOrder = event => {
  const myHtml = `
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
  <input class="input-form" type="number" id="quantity" name="amount" placeholder="Enter a number here" required />
  <button class="submit-order" type="submit">Add this order</button>
 </form>
  `
  innerModal.innerHTML = myHtml;
  outerModal.classList.add('open');
};

const closeModal = () => {
  outerModal.classList.remove('open');
}
const handleClick = event => {
  const isOutside = !event.target.closest('.inner-modal');
    if(isOutside) {
      closeModal();
    };
};

const handleEscapeKey = event => {
  if (event.key === 'Escape') {
    closeModal();
  };
};

const handleSubmit = event => {
  event.preventDefault();// Prevent from reloading;

  // check if the form that emit the submit is really our form
    if(event.target.matches('form')) {
      const form = event.target;

      // Destructured the form to get all the inputs values
      const {name, dish, size, amount} = form;

      // creat the new order html, and we put the input values inside the custom data
      const myHtml = `
        <div class="order" data-dish="${dish.value}" data-size="${size.value}" data-amount="${amount.value}">
          <span class="title">
            ${name.value}
          </span>
          <button class="details">Details</button>
          <button class="served">Delete order</button>
        </div>
      `
      orderList.innerHTML += myHtml;
      closeModal();
      form.reset();
    };

};

const showDetailModal = order => {
  // grab the detail
  const {dish, size, amount} = order.dataset;
  const name = document.querySelector('.title').textContent;

  // creat the innerHtml of the modal

  const detailHTML = `
  <h4>${name}</h4>
  <h5>Order:</h5>
  <p>${amount}${size}${dish.jpg}</p>

  `
  innerModal.innerHTML = detailHTML;
  closeModal();
};

const deleteOrder = () => {
  order.remove();
}
const handleClick = event => {
  if(event.target.matches('button.details')) {
    showDetailModal(order);
  }
  if(event.target.matches('button.delete')) {
     deleteOrder();
  }
}
