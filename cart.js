if (document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', ready)
}
else {
  ready()
}

function ready(){
  var removeCartItemButtons = document.getElementsByClassName('remove-btn')
  for (var i = 0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
    
  }

  var QuantityInputs = document.getElementsByClassName('Item-quantity')
  for (i = 0; i < QuantityInputs.length; i++){
    var input = QuantityInputs[i]
    input.addEventListener('change', quantityChanged)
  }


  var addToCartButton = document.getElementsByClassName('buy-btn')
  for (var i = 0; i < addToCartButton.length; i++){
    var button = addToCartButton[i]
    button.addEventListener('click', addToCartClicked)
    
  }
}



function removeCartItem(e){
  e.currentTarget.parentElement.parentElement.remove()
  updateCartTotal()
}


function quantityChanged(e){
  var input = e.currentTarget
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1
  }
  updateCartTotal()
}


function addToCartClicked(e){
  var button = e.currentTarget
  var slider = button.parentElement.parentElement.parentElement
  var title = slider.getElementsByClassName('item-title')[0].innerHTML
  var price = slider.getElementsByClassName('price')[0].innerHTML
  var itemImage = slider.getElementsByClassName('item-image')[0].src
  
  addItemToCart(title, price, itemImage)

}

function addItemToCart(title, price, itemImage){
  var cartRow = document.createElement('div')
  cartRow.classList.add('items')
  var cartitems = document.getElementsByClassName('item-display')[0]
  var cartItemTitle = cartitems.getElementsByClassName('product-name')
  for (var i = 0; i <cartItemTitle.length; i++ ){
    if(cartItemTitle[i].innerHTML === title){
      alert('this item is already in cart')
      return
    }
  }
  var cartrowContents = `
  
              
            
  <div class="items">
  <div class="product">
    <div class="product-img">
      <img src="${itemImage}" alt="${title}" />
    </div>
    <div class="product-detail">
      <p class="product-name">${title}</p>
    </div>
  </div>

  <div class="product-qty-and-price">                 
      <div class="product-qty">
        <input type="number" class="Item-quantity" value="1" />
      </div>                 
    <div class="product-price">
        <span class="perOne">${price}</span>   
    </div>
  </div>
  <div class="remove">
    <button type="button" class="remove-btn"><i class="fa-solid fa-xmark"></i></button>
  </div>
</div> 
`
  cartRow.innerHTML = cartrowContents
  cartitems.append(cartRow)
  
  cartRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeCartItem)
  updateCartTotal()
  cartRow.getElementsByClassName('Item-quantity')[0].addEventListener('change', quantityChanged)
  
}



function updateCartTotal (){
  
  var cartItemContainer = document.getElementsByClassName('item-display')[0]
  var cartRows = cartItemContainer.getElementsByClassName('items')

  var total = 0 
  for (var i = 0; i< cartRows.length; i++){
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('perOne')[0]
    var quantity = cartRow.getElementsByClassName('Item-quantity')[0]
    var price = parseFloat(priceElement.innerHTML.replace('$', ''))
    quantity = quantity.value
    console.log(quantity);
    total = total + (price * quantity);
 
  }
  
  const totall = document.querySelector('.total-price') 
  totall.innerHTML = '$' + total
  
  total = Math.round(total * 100)/100
}
