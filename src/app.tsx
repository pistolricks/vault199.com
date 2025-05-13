import { Suspense, type Component } from 'solid-js';
import { A, useLocation } from '@solidjs/router';

import BaseDock from "~/components/base-dock";

const App: Component = (props: { children: Element }) => {
  const location = useLocation();

  return (
    <>
      <div class="min-h-dvh h-dvh flex flex-col">

          <main class={'scrollbar-hide flex-1 text-xs overflow-y-auto'}>
            <Suspense>{props.children}</Suspense>
          </main>
          <BaseDock />
      </div>


    </>
  );
};

export default App;
