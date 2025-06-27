import React from 'react'

function Login() {
    return (
        <div>
            <h1>Login</h1>

            <form action="" method="post">

                <input type="text" name='name' placeholder='name'/><br />
                <input type="text" name='email' placeholder='email' /> <br />
                <input type="text" name='phone' placeholder='phone'/> <br />
                <input type="text" name='password' placeholder='password' /> <br />


                <button>Submite</button>
            </form>
        </div>
    )
}

export default Login