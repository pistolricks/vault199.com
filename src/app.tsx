import { Suspense, type Component } from 'solid-js';
import { A, useLocation } from '@solidjs/router';

import BaseDock from "~/components/base-dock";
import Cookies from "cookies-ts";
const cookies = new Cookies()

export const currentUser = cookies.get("user");

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
            <Suspense>{props.children}</Suspense>
          </main>
          
      </div>


    </>
  );
};

export default App;
