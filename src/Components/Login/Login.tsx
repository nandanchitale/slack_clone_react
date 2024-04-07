import React from 'react'
import './css/login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from '../../Firebase/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useStateValue } from '../../core/StateProvider'
import { actionTypes } from '../../core/Reducer'

function Login() {

    const [state, dispatch] = useStateValue();


    const singin = async () => {
        // Sign in using a popup.
        await signInWithPopup(auth, provider)
            .then(result => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                });
            })
            .catch((error) => {
                console.error(error.message)
            });
    }

    return (
        <div className="login">
            <div className="login_container">
                <img src="/slack_logo.webp" alt="Slack Logo" />
                <h1>Sign In To Slack-Clone</h1>
                <p>github.com/nandanchitale</p>
                <Button onClick={singin}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login