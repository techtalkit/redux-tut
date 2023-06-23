import React from 'react'

const Home = () => {
  return (
    <div>
        <div className='add-to-cart'>
              <img src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_640.png" alt="" />
        </div>
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
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Home