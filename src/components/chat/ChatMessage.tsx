import {For, Match, Show, Switch} from 'solid-js';


type Message = {
  content: string;
  roomId: string;
  username: string;
  type: 'self' | 'other' | 'notification';
};


type ChatMessageProps = {
  messages: Message[];
};

export default function ChatMessage(props: ChatMessageProps) {
  return (
    <For each={props.messages}>
      {(item, index) => (
        <Show when={item != null}>
          <Switch>
            <Match when={item.type === 'notification'}>
              <div class='flex justify-center italic text-emerald-600 p-2'>
                {item.content}
              </div>
            </Match>
            <Match when={item.type === 'self'}>
              <div class='flex justify-start p-2'>
                <div class='flex flex-col p-2 max-w-[360px] border-gray-200 bg-gray-100 rounded-e-xl'>
                  <span class='text-sm font-semibold text-gray-900 dark:text-white'>
                    {item.username}
                  </span>
                  <p class='text-sm font-normal mb-2 text-gray-900 dark:text-white'>
                    {item.content}
                  </p>
                </div>
              </div>
            </Match>
            <Match when={item.type === 'other'}>
              <div class='flex justify-end p-2'>
                <div class='flex flex-col p-2 max-w-[360px] border-fuchsia-300 bg-fuchsia-500 rounded-s-xl'>
                  <span class='text-sm font-semibold text-white dark:text-white'>
                    {item.username}
                  </span>
                  <p class='text-sm font-normal mb-2 text-white dark:text-white'>
                    {item.content}
                  </p>
                </div>
              </div>
            </Match>
          </Switch>
        </Show>
      )}
    </For>
  );
}
