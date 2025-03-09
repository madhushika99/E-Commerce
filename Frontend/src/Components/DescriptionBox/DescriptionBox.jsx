import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='discriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (125)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An E-commerce application is a digital platform that enables users to browse, purchase, 
            and sell products or services online. It offers features like secure authentication, 
            product listings, shopping cart, payment processing, order tracking, and customer reviews.
            With a user-friendly interface and seamless navigation, it enhances the online shopping experience. 
            The application supports multiple payment methods and ensures data security, making 
            transactions safe and convenient for both buyers and sellers</p>
        <p>At STYLOFY, we bring you the latest trends and timeless styles, all at your fingertips. 
            Whether you're looking for casual wear, formal attire, or statement pieces, our collection is 
            designed to suit every occasion. We believe in quality, affordability, and style, offering
            a wide range of clothing that complements your personality and lifestyle.
            Shop with confidence and redefine your wardrobe with STYLOFY, made effortless!</p>
      </div>
    </div>
  )
}

export default DescriptionBox
