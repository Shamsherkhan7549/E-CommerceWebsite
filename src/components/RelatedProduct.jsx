import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'
const RelatedProduct = ({category, subCategory}) => {

    const {products} = useContext(ShopContext);
    const [relatedProduct, setRelatedProduct] = useState([]);

    const filterRelatedProduct = () => {

        const filtered = products.filter((item) => ((item.category === category) && (item.subCategory===subCategory)))
        setRelatedProduct(filtered);


        
    }
    
    
    useEffect(()=> {
            filterRelatedProduct();
    },[products])
    
  return (
    <div className='grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4'>
        {
           relatedProduct.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))
        }
    </div>
  )
}

export default RelatedProduct