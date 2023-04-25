let openShopping = document.querySelector('.shopping');
 let closeShopping = document.querySelector('.closeShopping');
 let list = document.querySelector('.list');
 let listCard = document.querySelector('.listCard')
 let body = document.querySelector('body');
 let total = document.querySelector('.total');
 let quantity = document.querySelector('.quantity');
 
 openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'Winter wear hoodie',
        image: 'picture1.jpg',
        price: 500
    },
    {
        id: 2,
        name: 'Stylish wear',
        image: 'picture2.jpg',
        price: 800
    },
    {
        id: 3,
        name: 'Winter wear',
        image: 'picture3.jpg',
        price: 1500
    },
    {
        id: 4,
        name: 'Hoodie',
        image: 'picture4.jpg',
        price: 900
    },
    {
        id: 5,
        name: 'Rompers',
        image: 'picture5.jpg',
        price: 700
    },
    {
        id: 6,
        name: 'Syle set',
        image: 'picture6.jpg',
        price: 2000
    },
    {
        id: 7,
        name: 'Syle set',
        image: 'picture7.jpg',
        price: 1500
    },
    {
        id: 8,
        name: 'New Born',
        image: 'picture8.jpg',
        price: 3500
    },
]; 
     
  let listCards = [];
  function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML =  `
        <img src="images/${value.image}" id="${key}"/>
        <div class="title">${value.name}</div> 
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCart(${key})">BUY</button>
        <button onclick="deleteFromWebsite(${key})">PAY</button>
        `;
        list.appendChild(newDiv);
})
}
initApp();   
function addToCart(key){
  if(listCard[key] == null){
      listCards[key] = products[key];
      listCards[key].quantity=1;
    }
    reloadCard();
}
function deleteFromWebsite(key)
    {
        var picture=document.getElementById(key);
        picture.remove();
       
    }

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
           if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="images/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>
            <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
           <div class="count">${value.quantity}</div>
            <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
   </div>          
            `;
            listCard.appendChild(newDiv);
           }

    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

     
