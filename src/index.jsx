import { createRoot } from 'react-dom/client';
import App from './App';
import { unregisterStaleServiceWorkers } from './unregisterStaleServiceWorkers';

createRoot(document.getElementById('root')).render(<App />);

unregisterStaleServiceWorkers();
