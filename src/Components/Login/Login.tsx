import React from 'react'
import './css/login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from '../../Firebase/firebase'
import { signInWithPopup } from 'firebase/auth'

function Login() {

    const singin = async () => {
        // Sign in using a popup.
        await signInWithPopup(auth, provider)
            .then(result => {
                console.log(result)
            })
            .catch((error) => {
                console.error(error.message)
            });
    }

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://previews.us-east-1.widencdn.net/preview/48045879/assets/asset-view/000ca098-4ee1-459d-82de-ef542080c510/thumbnail/eyJ3IjoyMDQ4LCJoIjoyMDQ4LCJzY29wZSI6ImFwcCJ9?Expires=1712383200&Signature=P7htyTTurypreACy-zchKlUZosZ9~DQJ1RTPIou2i1ynn7nTuO4DOSeq-GNqA25H0f4WCasFleIaJhuauy4i6mAnGRyrMHl1xhvajMRilAJ85Ux6LfBtgUFOKwbW6O8psYEqEr7Dut2WtSNVs9Sib9QEpZwXfmNees--Ka~DtF3cyLA7ocVz3sKX0l1cZ9EKnwjybmDIBciTq~oSdaVieSuu6oP8q0qegu4A01XHPYCNEVV~M71d6gSjstA9y3~zCuHMFo40oSBLIZiZD02E1j-VCYBEgVAD8Aq8YVqHL~SIhvANR8hudnW4SkjqGpPwB1orPnfbcNw2pCPB3A5xUA__&Key-Pair-Id=APKAJM7FVRD2EPOYUXBQ" alt="Slack Logo" />
                <h1>Sign In To Slack-Clone</h1>
                <p>github.com/nandanchitale</p>
                <Button onClick={singin}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login