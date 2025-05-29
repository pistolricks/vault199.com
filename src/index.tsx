/* @refresh reload */
import './index.css';

import { render, Suspense } from 'solid-js/web';

import App from './app';
import { Router } from '@solidjs/router';
import routes from '~solid-pages';
import { registerSW } from 'virtual:pwa-register';

// Register service worker
const updateSW = registerSW({
    onNeedRefresh() {
        if (confirm('New content available. Reload?')) {
            // Dispatch custom event before updating
            window.dispatchEvent(new CustomEvent('pwa-update'));
            updateSW(true).then(r => console.log("reload", r)); // Explicitly reload the page
        }
    },
    onOfflineReady() {
        console.log('App ready to work offline');
        // Dispatch event when offline mode is ready
        window.dispatchEvent(new CustomEvent('pwa-update'));
    },
});

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}



render(
    // @ts-ignore
    () => <Router root={(props) => <App>{props.children}</App>}>{routes}</Router>,
    root,
);