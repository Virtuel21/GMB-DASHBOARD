import { useEffect } from 'react';

declare global {
  interface Window {
    google?: any;
  }
}

export default function App() {
  useEffect(() => {
    const handleCredentialResponse = (response: any) => {
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
