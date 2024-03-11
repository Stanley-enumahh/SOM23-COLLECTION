const cartItemEl = document.querySelector('.item-display')
const totalPriceEL = document.querySelector('.total-price') 
const cartCount = document.querySelector('.cart-count')
const purchase = document.querySelector('.purchase-btn')

//cart arayy


let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart()


function addToCart(id) {
  //check product already in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits('plus', id)
  }
  else {
    const item = itemsArray.find((mapped) => mapped.id === id)

    cart.push({
      ...item,
      numberOfUnits: 1
    });
  }

  updateCart()
}

function updateCart() {
  renderCartItems()
  renderSubtotal()
  

  //save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart))
}

function renderSubtotal() {
  let totalprice = 0;
  let totalItems = 0;

  cart.forEach((item) => {
    let price = (item.price);
    price = price.replace('$', '')
    totalprice += price * item.numberOfUnits
    totalItems += item.numberOfUnits
  })
  totalPriceEL .innerHTML = '$' + totalprice.toFixed(2);
  cartCount.innerHTML = totalItems

}



function renderCartItems() {
  cartItemEl.innerHTML = ''
  cart.forEach((item) => {
    cartItemEl.innerHTML += `
                   <div class="items">
                <div class="product">
                  <div class="product-img">
                  <div class="item-overlay"><i class="fa-solid fa-xmark" onclick = " removeCartItem(${item.id}) "></i>
                  </div>
                    <img src="${item.itemIMage}" alt="${item.title}" />
                  </div>
                  <div class="product-detail">
                    <p class="product-name">${item.title}</p>               
                      <p class="perOne">${item.price}</p>   
                  </div>
                </div>
              
                <div class="product-qty-and-price">                 
                    <div class="product-qty">
                      <span class="operate" onclick ="changeNumberOfUnits('minus', ${item.id})">-</span>
                      <div class="number">${item.numberOfUnits}</div>
                      <span class="operate" onclick = "changeNumberOfUnits('plus', ${item.id})">+</span>
                    </div>                              
                </div>             
              </div>`
  })
}

//remove cart item
function removeCartItem(id){
 cart= cart.filter((item) => item.id !== id)
 updateCart()
  
}

//changeNumberOfUnits
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits
    if (item.id == id) {
      if (action == 'minus' && numberOfUnits > 1) {
        numberOfUnits--;
      }
      else if (action == 'plus' && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }
    return {
      ...item,
      numberOfUnits
    }
  })

  updateCart()
}