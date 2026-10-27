// The build no longer ships a service worker, but visitors from older deploys
// may still have one registered that serves cached pages; remove it.
export const unregisterStaleServiceWorkers = () => {
  if (!('serviceWorker' in navigator)) return;

  navigator.serviceWorker
    .getRegistrations()
    .then((registrations) => registrations.forEach((registration) => registration.unregister()))
    .catch((error) => console.warn('Could not unregister stale service workers:', error));
};
