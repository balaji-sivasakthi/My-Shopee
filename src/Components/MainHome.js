import React from 'react'
import NavBarHome from './NavBarHome'
import Product from './Product'
import {useState,useEffect} from 'react'
import productData from '../Data/products' 
function MainHome() {

const [products,setProducts]=useState([]); 

useEffect(() => {
  setProducts(productData)
})
    return (
        <div >
            <NavBarHome></NavBarHome>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-2"> </div>
                    {/* Produts  */}
                    <div className="col-8 mt-3 p-5 shadow rounded bg-secondary">
                        <h1 className='text-white'>Products</h1>

                        <div className="product__wrapper mt-5 d-flex flex-wrap justify-content-center ">
                      
                     { products.map((e)=>{ 
                         return <Product key={e.id} title={e.title} price={e.price} dis={e.dis} img={e.imgLink} ></Product>
                      })}                
                        </div>
                       
                    </div>
                    <div className="col-2"></div>
                </div>

            </div>
        </div>
    )
}

export default MainHome
