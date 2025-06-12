import {
  Accessor,
  JSXElement,
  Setter,
  createContext,
  createSignal,
} from 'solid-js';

type WebsocketContextProps = {
  conn: Accessor<WebSocket>;
  setConn: Setter<WebSocket>;
};

export const WebsocketContext = createContext<WebsocketContextProps>();

export function WebSocketContextProvider(props): JSXElement {
  const [conn, setConn] = createSignal<WebSocket>(null);

  return (
    <WebsocketContext.Provider value={{ conn, setConn }}>
      {props.children}
    </WebsocketContext.Provider>
  );
}
