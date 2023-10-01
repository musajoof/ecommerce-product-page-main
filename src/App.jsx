import Logo from './images/logo.svg'
import CartImage from './images/icon-cart.svg'
import Avata from './images/image-avatar.png'
import ProductThumbnailOne from './images/image-product-1-thumbnail.jpg'
import ProductThumbnailTwo from './images/image-product-2-thumbnail.jpg'
import ProductThumbnailThree from './images/image-product-3-thumbnail.jpg'
import ProductThumbnailFour from './images/image-product-4-thumbnail.jpg'
import ProductOne from './images/image-product-1-thumbnail.jpg'
import ProductTwo from './images/image-product-2-thumbnail.jpg'
import ProductThree from './images/image-product-3-thumbnail.jpg'
import ProductFour from './images/image-product-4-thumbnail.jpg'
import Plus from './images/icon-plus.svg'
import Minus from './images/icon-minus.svg'
import DeleteImage from './images/icon-delete.svg'
import { useState } from 'react'



function App() {
  const [showCart, setShowCart] = useState(false);
  const [number, setNumber] = useState(0);
  const [selectedProductImage, setSelectedProductImage] = useState(ProductOne); // Initial product image

  const handleMoreDetails = () => {
  setShowCart(!showCart);
};

  const handleChange = (action) => {
  if (action === 'plus') {
    setNumber(number + 1);
  } else if (action === 'minus' && number > 0) {
    setNumber(number - 1);
  }
};

const handleThumbnailClick = (productImage) => {
  setSelectedProductImage(productImage);
};


  return (
    <>
      <div className="max-w-full max-h-screen bg-slate-800 p-3 ">
        <div className="max-w-6xl max-h-screen border bg-white m-auto p-3">
          <header>
            <nav className="flex justify-between items-center">
              <img src={Logo} alt={"Logo"} />
              <ul className='flex justify-between items-center gap-x-3'>
                <li className="cursor-pointer hover:text-slate-800 hover:font-bold">Collections</li>
                <li className="cursor-pointer hover:text-slate-800 hover:font-bold">Men</li>
                <li className="cursor-pointer hover:text-slate-800 hover:font-bold">Women</li>
                <li className="cursor-pointer hover:text-slate-800 hover:font-bold">About</li>
                <li className="cursor-pointer hover:text-slate-800 hover:font-bold">Contact</li>
              </ul>
              <div className='flex justify-between items-center gap-x-16 mr-32'>
                <div >
                  <img src={CartImage} alt="" onClick={handleMoreDetails} />
                </div>
                <img className='w-8' src={Avata} alt="" />
              </div>
            </nav>
          </header>
                  {showCart && <div className='border p-2 mt-3 ml-[800px] w-72 rounded-md'>
                    <h2 className='border-b-[1px]'>Card</h2>
                    <div className='flex justify-around items-center mt-2'>
                      <img className='w-[54px] h-14 rounded-md' src={ProductOne} alt={"Image Product 1"} />
                      <div className=''>
                        <div className='mt-3 space-x-3'>
                          <h1 className='text-sm mt-3 font-bold'>Fall Limited Company</h1>
                          <span className='p-1 font-extrabold rounded-md '>$125.00</span>
                          <span className='p-1 bg-orange-100 rounded-md '>50</span>
                        </div>
                      </div>
                      <div className=''>
                        <img src={DeleteImage} alt="" />
                      </div>
                    </div>
                    <button className='bg-orange-400 p-2 w-full mt-2 rounded-md text-white'> Checkout</button>
                  </div>}
          <main className='mt-16 p-3 flex justify-center items-center gap-x-16'>
            <div className='w-1/3 h-[450px] border-none'>
            <div className='w-full '>
              <img className='w-full h-[340px] rounded-md' src={selectedProductImage} alt="" />
            </div>
              <div className='flex justify-center items-center gap-x-2 mt-3'>
                <img
                  className='w-[84px] h-24 rounded-md'
                  src={ProductThumbnailOne}
                  alt=""
                  onClick={() => handleThumbnailClick(ProductOne)}
                />
                <img
                  className='w-[84px] h-24 rounded-md'
                  src={ProductThumbnailTwo}
                  alt=""
                  onClick={() => handleThumbnailClick(ProductTwo)}
                />
                <img
                  className='w-[84px] h-24 rounded-md'
                  src={ProductThumbnailThree}
                  alt=""
                  onClick={() => handleThumbnailClick(ProductThree)}
                />
                <img
                  className='w-[84px] h-24 rounded-md'
                  src={ProductThumbnailFour}
                  alt=""
                  onClick={() => handleThumbnailClick(ProductFour)}
                />
              </div>
            </div>
            <div className='w-1/3 h-[450px] border-none'>
              <h2 className='font-bold text-sm text-orange-500 mt-6'>SNEAKER COMPANY</h2>
              <h1 className='text-5xl mt-3 font-bold'>Fall Limited Company</h1>
              <p className='text-sm text-slate-600 mt-3 '>
                These low-profile sneaker are your prefered causual ware company. afaeaturing a durable rubber outer soul, they will withstand everthing the weather will offer.
              </p>
              <div className='mt-3 space-x-3'>
                <span className='p-1 font-extrabold rounded-md '>$125.00</span>
                <span className='p-1 bg-orange-100 rounded-md '>50</span>
              </div>
              <p className='mt-3 text-slate-500'>$250.00</p>
              <div className='flex justify-center items-center mt-3 gap-x-4'>
                <div className='border-none bg-slate-100 w-32 h-10 rounded-md flex justify-between items-center p-1'>
                  <img src={Plus} alt="" onClick={() => handleChange('plus')} />
                  <span className='font-bold'>{number}</span>
                  <img src={Minus} alt="" onClick={() => handleChange('minus')} />

                </div>
                <button className='border-none bg-orange-400 w-32 h-10 rounded-md p-1 flex justify-around items-center text-white'>
                  <img className='outline-white' src={CartImage} alt="" />
                    Add to cart
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
