import { Suspense, type Component } from 'solid-js';
import { A, useLocation } from '@solidjs/router';

import BaseDock from "~/components/base-dock";

const App: Component = (props: { children: Element }) => {
  const location = useLocation();

  return (
    <>
      <div class="min-h-dvh h-dvh flex flex-col">




        <div class={'flex-1 flex flex-row overflow-y-hidden'}>

          <main class={'mx-auto max-w-7xl  scrollbar-hide flex-1 text-xs overflow-y-auto'}>
            <Suspense>{props.children}</Suspense>
          </main>

        </div>


          <BaseDock />

      </div>


    </>
  );
};

export default App;
