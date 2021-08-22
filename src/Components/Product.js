import React, { useEffect, useState } from 'react'

function Product({key,title,price,dis,img}) {

    const [productImg,setProductImg] =useState('');
    useEffect(()=>{
        setProductImg(img);
    },[])
    const style={
        width:'100px',
        heigth:"100px"
    }
    return (
        <div className="products shadow p-2 bg-white m-1 ">
           <img  className="rounded" style={style} src={productImg} alt="" />
           <h5 className="mt-3" >{title}</h5>
           <h6>Price: ${price}</h6>
           <div className="wrap__button p-3">
           <button className="btn btn-primary  w-50">Buy Now</button>
           <button className="btn  btn-primary w-50">Add Cart</button>
           </div>
           

        </div>
    )
}

export default Product
