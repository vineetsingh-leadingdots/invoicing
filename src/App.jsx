import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';


function App() {

  return (
    <Authenticator variation='modal'>
      {({ signOut, user }) => (
        <main className='flex flex-col justify-center items-center'>
          <h1 className='text-xl'>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App
