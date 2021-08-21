import React, { useEffect, useState } from 'react'

function Service() {

    const [heroUrl,setHeroUrl] = useState("");
    useEffect(()=>{
    setHeroUrl('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnuLoRuUUIkMRJ467eL_cLeXOLtVt9zxVAYg&usqp=CAU')
},[]);
    return (
        <section className="container hero d-flex">
          <div className="hero-left h-100 col-6 d-flex flex-column justify-content-center ">
                        <h1>
                            Best Service in India!
                        </h1>

                        <p className="text-secondary">
                               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Dolorum ipsa assumenda tempora voluptas aliquid nisi nam, i
                                ncidunt ducimus placeat in!</p>

                        <button className='btn btn-primary w-50'>Buy Now</button>
              </div>
              <div className="hero-right w-100 col-6 d-flex flex-column justify-content-center">
              <img className="w-100" src={heroUrl} alt="" />
              </div>
              
        </section>
    )
}

export default Service
