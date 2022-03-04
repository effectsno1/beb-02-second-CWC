import React, { useEffect, useState } from 'react'
import axios  from 'axios';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../../_actions/user_action';
// import { addListener } from 'nodemon';

function LoginPage() {
    // const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:8000/api/hello')
        .then(res => console.log(res))
    }, [])

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    // const onSubmitHandler = (event) => {
    //     event.preventDefault();

    //     console.log("Email", Email)
    //     console.log("Password", Password)

    //     let body = {
    //         email : Email,
    //         passowrd : Password
    //     }

    //     dispatch(loginUser(body))
    //         .then(response => {
    //             if(response.payload.loginSuccess){
    //                 props.history.push('/home')
    //             } else {
    //                 alert('Error')
    //             }
    //         })


    // }

  return (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems:'center', width: '100%', height: '100vh'
    }}>
        <form style={{display:'flex', flexDirection:"column"}}
            // onSubmit={onSubmitHandler}
        >
            <label>Email</label>
            <input type="email" value={Email} onChange={onEmailHandler} />
            <label>Password</label>
            <input type="password" value={Password} onChange={onPasswordHandler} />

            <br />
            <button type ="submit">
                Login
            </button>

        </form>
    </div>
  )
}

export default LoginPage
