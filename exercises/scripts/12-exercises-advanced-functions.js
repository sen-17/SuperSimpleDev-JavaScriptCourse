
/*

const buttonElement = document.querySelector('.js-start-button');

const eventListener = () => {
  setTimeout(() => {
    buttonElement.innerHTML = 'Finished'; // Change the innerHTML
  }, 1000); // Wait for 1 second (1000 milliseconds);

    buttonElement.innerHTML = 'Loading..'
}

buttonElement.addEventListener('click', eventListener);
*/

const buttonElement2 = document.querySelector('.js-add-cart-button');

const eventListener2 = () => {
  
  setTimeout(() => {
   
     buttonElement2.innerHTML = 'Add to Cart';
   },2000);

   buttonElement2.innerHTML ='Added';

   
}

buttonElement2.addEventListener('click',eventListener2)

let value = 0;
const titleName = `${value}New Messages`
const buttonElement3 = document.querySelector('.js-add-button');
const buttonElement4 = document.querySelector('.js-remove-button');

const eventListener3 = () => {
  const button = {
    Add : buttonElement3,
    Remove : buttonElement4
  }

  button.Add =  () => {
    document.title = `${value++} New Messages`
  }

  button.Remove = () => {
    document.title = `${value--} New Messages`
  }
} 

buttonElement3.addEventListener('click', eventListener3);




  