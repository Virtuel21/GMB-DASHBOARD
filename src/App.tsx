import { useEffect } from 'react';

interface CredentialResponse {
  credential: string;
}

interface GoogleLib {
  initialize(options: {
    client_id: string;
    callback: (response: CredentialResponse) => void;
  }): void;
  renderButton(parent: HTMLElement | null, options: { theme: string; size: string }): void;
}

declare global {
  interface Window {
    google?: { accounts?: { id?: GoogleLib } };
  }
}

export default function App() {
  useEffect(() => {
    const handleCredentialResponse = (response: CredentialResponse) => {
      console.log('Google credential:', response.credential);
    };

    const googleLib = window.google?.accounts?.id;
    if (googleLib) {
      googleLib.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });
      googleLib.renderButton(document.getElementById('gSignInDiv'), {
        theme: 'outline',
        size: 'large',
      });
    }
  }, []);

  return <div id="gSignInDiv" />;
}
