import { Suspense, type Component } from 'solid-js';
import { A, useLocation } from '@solidjs/router';
import { SessionProvider } from '@solid-mediakit/auth/client'

import BaseDock from "~/components/base-dock";

const App: Component = (props: { children: Element }) => {
  const location = useLocation();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const main = document.querySelector('main');

            if (targetElement) {
                main.scrollTo({
                    top: targetElement.offsetTop - main.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

  return (
    <>
      <div class="min-h-dvh h-dvh flex flex-col w-screen">

          <main class={'scrollbar-hide'}>
            <Suspense>
                <SessionProvider>{props.children}</SessionProvider>
            </Suspense>
          </main>
          
      </div>


    </>
  );
};

export default App;
