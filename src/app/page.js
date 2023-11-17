// "use client"
import { Authenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";

export default function App() {
    return (
        <Authenticator socialProviders={['google']}>
            {({ signOut, user }) => (
                <main>
                    <h1>Hello User: {user.username}</h1>
                    <button onClick={signOut}>Sign out</button>
                </main>
            )}
        </Authenticator>
    );
}