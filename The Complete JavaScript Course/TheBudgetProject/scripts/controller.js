import * as BudgetController from './budgetController.js';
import * as UIController from './UIController.js';

function addItem() {
  // Get field input data
  const input = UIController.getInput();
  console.log(input);

  // Add item to budget controller

  // Add item to new UI

  // Calculate budget

  // Display budget
}

function setupEventListeners() {
  const addBtn = document.querySelector('.add__btn');
  addBtn.addEventListener('click', addItem);

  // When someone hits enter, submit task entry
  document.addEventListener('keypress', (evt) => {
    if (evt.keyCode === 13 || evt.which === 13) {
      addItem();
    }
  });
}

function init() {
  console.log('App has started.');

  setupEventListeners();
}

init();