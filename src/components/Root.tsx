
import App from './App';
import { ErrorBoundary } from './ErrorBoundary';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { BrowserRouter } from 'react-router-dom';

export function Root() {
  return (
    <BrowserRouter>
      <TonConnectUIProvider manifestUrl="https://YOUR_DOMAIN/tonconnect-manifest.json">
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </TonConnectUIProvider>
    </BrowserRouter>
  );
}
