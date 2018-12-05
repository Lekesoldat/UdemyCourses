const addType = document.querySelector('.add__type');
const addDescription = document.querySelector('.add__description');
const addValue = document.querySelector('.add__value');

export const getInput = () => {
  return {
    type: addType.value,
    description: addDescription.value,
    value: addValue.value
  }
}