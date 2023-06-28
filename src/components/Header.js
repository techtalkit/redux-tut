import React from 'react'

const Header = (props) => {
  console.log("props",props.cartData)
  return (
    <div>
        <div className='add-to-cart'>
              <span className='cart-count'>{props.cartData.length}</span>
              <img src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_640.png" alt="" />
        </div>
    </div>
  )
}

export default Header