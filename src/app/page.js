
// import { Authenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

function Home() {
    const handleGoogleLogin = async () => {
        try {
            await Auth.federatedSignIn({ provider: 'Google' });
            console.log('Sign in with Google', error);
        } catch (error) {
            console.log('Error signing in with Google', error);
        }
    };

    return (
        <div>
            <h1>Welcome to my app!</h1>
            {/* <Authenticator socialProviders={['google']} >
                <main>
                    <h1>Hello</h1>
                </main>
            </Authenticator> */}
            <button onClick={handleGoogleLogin} style={{ backgroundColor: 'gray' }}>Login with Google</button>
        </div>
    );
}

// export default withAuthenticator(Home);
export default Home;