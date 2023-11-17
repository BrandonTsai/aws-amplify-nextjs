"use client"
import { withAuthenticator } from '@aws-amplify/ui-react';
import { AmplifyAuthenticator, AmplifySignInButton } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";

function App() {
    return (
        <AmplifyAuthenticator>
            <AmplifySignInButton slot="federated" provider="Google" />
            <h1>Hello World</h1>
        </AmplifyAuthenticator>
    );
}
// export default App

export default withAuthenticator(App);