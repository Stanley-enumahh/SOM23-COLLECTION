const itemsArray = [
  { 
    id: 0,
    title : 'Brown suit',
    price : '$1500',
    itemIMage : './brown suit.png',
    category : 'Men',
    instock : 8
  },

  { 
    id: 1,
    title : 'Pink blouse',
    price : '$200.20',
    itemIMage : './blouse.png',
    category : 'Women',
    instock : 18
  },

  { 
    id: 2,
    title : 'Jeans',
    price : '$165',
    itemIMage : './jeans.png',
    category : 'Men',
    instock : 25
  },

  {
    id: 3,
    title : 'black T-shirt',
    price : '$125.5',
    itemIMage : './black T shirt.png',
    category : 'Men',
    instock : 50
  },

  { 
    id: 4,
    title : 'Smart Watch',
    price : '$1250',
    itemIMage : './watch.png',
    category : 'Accessories',
    instock : 10
  },

  { 
    id: 5,
    title : 'Plain Nike',
    price : '$100.05',
    itemIMage : './nikeAir.png',
    instock : 23
  },

  { 
    id: 6,
    title : 'Brown handbag',
    price : '$150',
    itemIMage : './brown hang bag.png',
    category : 'Women',
    instock : 74
  },

  { 
    id: 7,
    title : 'Mod shoe',
    price : '$800',
    itemIMage : './shoe 3.png',
    instock : 34
  },

  { 
    id: 8,
    title : 'glasses',
    price : '$15',
    itemIMage : './glasses.png',
    category : 'Accessories',
    instock : 20
  },

  { 
    id: 9,
    title : 'winter jacket',
    price : '$115',
    itemIMage : './winter jacket.png',
    instock : 14
  }
]


window.addEventListener('DOMContentLoaded', displayItems(itemsArray))
const filterButtons = document.querySelectorAll('.filter-btn')


filterButtons.forEach(function(buttons){
  buttons.addEventListener('click', function(e){
    const category = e.currentTarget.dataset.id;
    const itemsCategory = itemsArray.filter(function(filtered){
      if(filtered.category === category){
        return filtered
      }
    })
    if(category === 'All'){
      displayItems(itemsArray)
      }
      else{
        displayItems(itemsCategory)
      }
    
  
     
  })
})




function displayItems(filtered){
let displayItemMenu = filtered.map(function(mapped){
  return `

<div class="box">
  <div class="slider">
    <div class="overlay">
      <button type="button" class="buy-btn" onclick="addToCart(${mapped.id})">ADD TO CART</button>
    </div>
    <img
      src="${mapped.itemIMage}"
      alt="Brown suit"
      class="item-image"
    />
  </div>

  <div class="item-details">
    <h4 class="item-title">${mapped.title}</h4>
    <span class="price">${mapped.price}</span>
  </div>
</div>

`
})

displayItemMenu = displayItemMenu.join('')
var displayBox = document.querySelector('.items-slider')
  displayBox.innerHTML = displayItemMenu

}

var cartbuttons = document.querySelectorAll('.buy-btn')

