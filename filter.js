const itemsArray = [
  { title : 'Brown suit',
    price : '$1500',
    itemIMage : './brown suit.png',
    category : 'Men'
  },

  { title : 'Pink blouse',
  price : '$205',
  itemIMage : './blouse.png',
  category : 'Women'
  },

  { title : 'Jeans',
  price : '$165',
  itemIMage : './jeans.png',
  category : 'Men'
  },

  { title : 'black T-shirt',
  price : '$155',
  itemIMage : './black T shirt.png',
  category : 'Men'
  },

  { title : 'Smart Watch',
  price : '$1250',
  itemIMage : './watch.png',
  category : 'Accessories'
  },

  { title : 'Plain Nike',
  price : '$100',
  itemIMage : './nikeAir.png'
  },

  { title : 'Brown handbag',
  price : '$150',
  itemIMage : './brown hang bag.png',
  category : 'Women'
  },

  { title : 'Mod shoe',
  price : '$800',
  itemIMage : './shoe 3.png',
  },

  { title : 'glasses',
  price : '$15',
  itemIMage : './glasses.png',
  category : 'Accessories'
  },

  { title : 'winter jacket',
  price : '$15',
  itemIMage : './winter jacket.png',
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
      <button type="button" class="buy-btn">ADD TO CART</button>
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

