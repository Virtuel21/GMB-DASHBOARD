# GMB-DASHBOARD

This project is a dashboard built with React and Vite.

## Google Authentication Setup

1. Open the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) and create an **OAuth client ID** for a web application.
2. In **Authorized JavaScript origins**, add:
   - `http://localhost:5173`
3. In **Authorized redirect URIs**, add:
   - `http://localhost:5173`
4. Copy the generated **Client ID** and create a `.env` file based on `.env.example`:
   ```
   VITE_GOOGLE_CLIENT_ID=<your-client-id>
   ```
5. Start the development server with `npm run dev`.

If the origin or redirect URI does not exactly match what is configured in the Google Cloud Console, Google will return a 400 error when attempting to sign in. Ensure the scheme (`http`), host (`localhost`) and port (`5173`) match your development environment.
