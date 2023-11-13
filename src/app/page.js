'use client';

// import { Authenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

function Home() {

    return (
        <div>
            <h1>Welcome to my app!</h1>
            <button onClick={() => Auth.signOut()}>Sign Out</button>
            <button onClick={() => Auth.federatedSignIn({ provider: "Google" })}>Google Sign In</button>
        </div >
    );
}

// export default withAuthenticator(Home);
export default Home;