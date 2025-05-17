import {Suspense, type Component, createSignal, createMemo} from 'solid-js';
import { A, useLocation } from '@solidjs/router';

import BaseDock from "~/components/base-dock";
import Cookies from "cookies-ts";
import AiCompanion from "~/components/ai-companion";
const cookies = new Cookies()

export const currentUser = () => {
    const ck = cookies.get("user");
    const [getUser, setUser] = createSignal(ck)
    const user = createMemo(() => {
        setUser(ck)
        return getUser();
    })
    return user();
}



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
