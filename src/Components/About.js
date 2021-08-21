import React, { useEffect, useState } from 'react'

function About() {

    const [aboutUrl,setAboutUrl]=useState("");
    useEffect(()=>{

        setAboutUrl('https://i.pinimg.com/originals/35/0e/1e/350e1e022b87a0d458c131f45402d1fd.png');
    },[])
    return (
        <div className="container hero">
          

                <div className="row h-100 d-flex justify-content-center align-items-center">


                        <div className="hero-left col-6">
                            <h1>About</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, labore facere quas fugiat veniam dolores quibusdam ea sunt saepe aut consectetur omnis debitis, architecto cupiditate officiis, eaque tenetur adipisci nihil!</p>
                            <button className="btn btn-primary">Contact us</button>
                        </div>
                        <div className="hero-right w-100 col-6">
                            <img className="w-100" src={aboutUrl} alt="" />
                        </div>
                </div>



        </div>
    )
}

export default About
