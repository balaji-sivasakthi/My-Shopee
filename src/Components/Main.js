import React, { useEffect, useState } from 'react'

function Main() {
    const [heroUrl,setHeroUrl] = useState("");
    useEffect(()=>{
    setHeroUrl('https://www.pngitem.com/pimgs/m/605-6051634_natural-skincare-ingredients-natural-skin-care-ingredients-png.png')
},[])
    return (
        <section className="container hero d-flex">
          <div className="hero-left h-100 col-6 d-flex flex-column justify-content-center ">
                        <h1>
                            Natural Cosmetice Collection
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

export default Main
