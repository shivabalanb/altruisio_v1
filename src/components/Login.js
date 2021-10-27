import react from "react"
import {auth, provider} from '../firebase'

const Login = () => {

    const signin = () => {
        auth.signInWithPopup(provider).catch(alert)
    }

    return (
        <div class="text-center">
            <h1 class="display-1 ">Altruismo</h1>
            <button class="btn btn-default" onClick={signin}>Sign In</button>
        </div>
    )
}

export default Login;