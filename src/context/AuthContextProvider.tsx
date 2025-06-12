import {
  Accessor,
  JSXElement,
  Setter,
  createContext,
  createSignal,
  onCleanup,
  onMount,
} from 'solid-js';

type AuthContextProps = {
  storage: Accessor<Storage>;
  setStorage: Setter<Storage>;
};

export const AuthContext = createContext<AuthContextProps>();

export function AuthContextProvider(props): JSXElement {
  const [storage, setStorage] = createSignal<Storage>(window.localStorage);

  const handler = (event: Event) => {
    setStorage(window.localStorage);
  };

  onMount(() => {
    window.addEventListener('storage', handler);
  });

  onCleanup(() => {
    window.removeEventListener('storage', handler);
  });

  return (
    <AuthContext.Provider value={{ storage, setStorage }}>
      {props.children}
    </AuthContext.Provider>
  );
}
