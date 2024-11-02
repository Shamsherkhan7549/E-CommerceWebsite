import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Order = () => {
  const {products, currency} = useContext(ShopContext)
  
  console.log(products)
  return (
    <div className='mt-20'>
        <div className='text-2xl py-5'>
          <Title text1={"MY"} text2={"ORDERS"}/>
          <hr className='h-[1px] bg-gray-300 mt-2'/>
        </div>


        <div>
          {
              products.slice(1,5).map((product,index) => (
                <div className='flex sm:gap-2 sm:items-center  border-b border-gray-300 sm:justify-between flex-col sm:flex-row py-10 sm:py-0 gap-5 items-start' key={index}>
                  <div className='py-5 flex gap-5 items-center'>
                    <img src={product.image[0]} className='w-20' />
                    <div>
                      <p className='font-semibold text-sm text-gray-700'>{product.name}</p>
                      <div className='flex gap-5 text-sm'>
                        <p>Price: {currency}{product.price}</p>
                        <p>Quantity: {1}</p>
                        <p>Size: {"M"}</p>
                      </div>
                      <p className='text-sm'>Date: <span className='text-gray-500 font-600'>Friday Nov 1 2024</span></p>
                      <p className='text-sm'>Payments: <span>COD</span></p>
                    </div>

                   
                  </div>
          
                  <div className='flex gap-2 items-center'> 
                       <p className='h-2 w-2 bg-green-600 rounded-full'></p>
                       <p className='text-gray-500'>Order Placed</p>
                    </div>
                    <p className='border border-gray-300 text-sm font-semibold text-gray-600 rounded py-2 px-4 cursor-pointer' >Track Order</p>
                </div>
              ))
          }
        </div>
    </div>
  )
}

export default Order