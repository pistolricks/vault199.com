import {Suspense, type Component, createSignal, createMemo} from 'solid-js';
import { A, useLocation } from '@solidjs/router';

import BaseDock from "~/components/base-dock";
import Cookies from "cookies-ts";
import AiCompanion from "~/components/ai-companion";
export const cookies = new Cookies()
cookies.config({ expires: "30d" })


export const currentUser = () => {
    const ck = cookies.get("user");
    const [getUser, setUser] = createSignal(ck)
    const user = createMemo(() => {
        console.log("ck", ck)
        setUser(ck)
        return getUser();
    })
    return user();
}



const App: Component = (props: { children: Element }) => {
  const location = useLocation();


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
