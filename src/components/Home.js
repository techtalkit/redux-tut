import React from 'react'

const Home = (props) => {
  console.log("props",props.cartData)
  return (
    <div>
        <h1>Home Component</h1>
        <div className="cart-wrapper">
            <div className="image-wrapper item">
                <img src="https://images.macrumors.com/article-new/2019/01/iphone11wallpaper-800x637.jpg" alt="" />
            </div>
            <div className="text-wrapper item">
                 <span>I-Phone</span>
                 <span>Price: $1000</span>
            </div>
            <div className="btn-wrapper item">
                <button onClick={()=>
                  props.addToCartHandler({price:1000,name:'I Phone 11'})
                  }>
                  Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Home