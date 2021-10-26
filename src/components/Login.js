import react from "react"
import {auth, provider} from '../firebase'

const Login = () => {

    const signin = () => {
        auth.signInWithPopup(provider).catch(alert)
    }

    return (
        <div>
            <button onClick={signin}>Sign In</button>
        </div>
    )
}

export default Login;