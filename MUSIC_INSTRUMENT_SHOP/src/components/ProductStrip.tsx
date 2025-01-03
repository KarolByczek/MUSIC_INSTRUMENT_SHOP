import React from 'react'

const ProductStrip = () => {
    return (
        <div className='product_strip'>
            <div className='product_substrip product_substrip_left'>
                <a href="">&#x2630;</a>
                <a href="">Hot Deals</a>
                <a href="">New</a>
                <a href="">Top-Seller</a>
                <a href="">Bargains</a>
            </div>
            <div className='product_substrip product_substrip_middle'>
                <input type="text" placeholder='Search' />
            </div>
            <div className='product_substrip product_substrip_right'>
                <a href="">EN - &#163;</a>
                <a href="https://www.thomann.co.uk/mythomann.html" aria-label="Customer Centre" aria-owns="fx-flyin-customer" aria-expanded="false" role="button">
                    <img className='cart_image' src="src/assets/react.svg" alt="React Icon" />
                </a>
                <a href="">&hearts;</a>
                <a href="">&#x1f6d2;</a>
            </div >
        </div>
    )
}

export default ProductStrip
