import React, { useContext } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'


const Placeorder = () => {
   const {navigate} = useContext(ShopContext)
  return (
    <div className='px-10 py-10 sm:px-0 sm:py-0'>
        <div className='text-2xl  mt-10'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>

        <div className='flex flex-col md:flex-row gap-20 mt-10 '>

          <div className='flex flex-col gap-5 md:flex-3 flex-4'>
            <div className='flex sm:flex-row flex-col sm:gap-3 gap-5'>
              <input type="text" placeholder='First name' className=' border-1 border-gray-300 pl-3 py-1 border rounded w-full'/>
              <input type="text" placeholder='Last name' className=' border-1 border-gray-300 pl-3 py-1  border rounded  w-full' />
            </div>

            <div className='flex flex-col gap-5'>
              <input type="text" placeholder='Email address' className=' border-1 border-gray-300 pl-3 py-1 border rounded w-full'/>
              <input type="text" placeholder='Street' className=' border-1 border-gray-300 pl-3 py-1 border rounded w-full' />
            </div>

            <div className='flex flex-col sm:gap-3 gap-5'>
              <div className='flex sm:flex-row flex-col gap-5 sm:gap-3'>
                <input type="text" placeholder='City' className=' border-1 border-gray-300 pl-3 py-1 border rounded w-full'/>
                <input type="text" placeholder='State' className=' border-1 border-gray-300 pl-3 py-1 border rounded w-full' />
              </div>

              <div className='flex sm:flex-row flex-col sm:gap-3 gap-5'>
                <input type="number" placeholder='Zipcode' className=' border-1 border-gray-300 pl-3 py-1 border rounded w-full '/>
                <input type="text" placeholder='Country' className=' border-1 border-gray-300 pl-3 py-1 border rounded w-full' />
              </div>
            </div>
            <input type="number" placeholder='Phone' className=' border-1 border-gray-300 pl-3 py-1 border rounded' />

          </div>

          <div className='md:w-2/4 flex flex-col gap-20'>
            <div className=' '>
              <CartTotal />
            </div>

            <div className='flex flex-col gap-5 items-start'>
              <Title text1={"PAYMENT"} text2={"METHOD"}/>

              <div className='flex justify-around w-full'>
                <div className='flex items-center gap-10 border border-gray-200 px-3 py-2'>
                  <p className='border border-gray-200  w-5 h-5 rounded-full active:bg-green-400 cursor-pointer'></p>
                  <img src={assets.googlePay_icon} className='w-8' />
                </div>

                <div className='flex items-center gap-6 border border-gray-200 px-3 py-2'>
                  <p className='border border-gray-200  w-5 h-5 rounded-full active:bg-green-400 cursor-pointer'></p>
                  <img src={assets.razorpay_logo} className='w-20' />
                </div>

                <div className='flex items-center gap-6 border border-gray-200 px-3 py-2'>
                  <p className='border border-gray-200  w-5 h-5 rounded-full active:bg-green-400 cursor-pointer'></p>
                  <p className='text-gray-500 text-4'>CASH ON DELIVERY</p>
                </div>
                
              </div>

              <div className='text-end w-full mt-3  '>
               <button onClick={()=> navigate('/orders')}  className='bg-black text-white text-md px-10 py-2'>PLACE ORDER</button>

              </div>
            </div>

          </div>
        </div>

        
    </div>
  )
}

export default Placeorder