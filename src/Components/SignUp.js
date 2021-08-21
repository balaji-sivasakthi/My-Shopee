import React from 'react'

function SignUp() {
    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            
        <form className="form-login d-flex flex-column justify-content-center align-items-center" method="post" >         
        <h1  className="my-5 text-primary" >My Shopee</h1>
                <input  type="email" name="name" placeholder="Email" />
                <input type="password" name="pass" placeholder="Password" />

                <button className="btn btn-primary  w-100" type="submit" >SignUp</button>
                <a className="btn btn-success  mt-2 w-100" href="login" >Login</a>
               
        </form>


    </div>
    )
}

export default SignUp
