import {Component, createMemo, createSignal, For, Show} from "solid-js";
import {classNames} from "~/components/navigation";
import pipBg from "~/static/images/pipboy_back.png"
import AiCompanion from "~/components/ai-companion";

export type Contact = {
    id: number
    title?: string
    name: string
    username: string
    avatar?: string
    email?: string
    phone?: string
    bio?: string
    active: boolean



}
const ContactList: Component<{
    list: Contact[]
    bg?: string;
}> = (props) => {
    const list = () => props.list;

    const bg = () => props.bg ?? pipBg;

    const [getSelected, setSelected] = createSignal<Contact | null>(null);

    const handleClick = (c: Contact) => {
        setSelected(() => c);


    };

    const selected = createMemo(() => {
        return getSelected();
    })

    return (
        <>


                <Show
                    fallback={
                        <ul role="list" class="divide-y divide-gray-200 overflow-y-auto h-full">

                            <For each={list()}>
                                {(contact) => (
                                    <ContactItem {...contact} onClick={() => handleClick(contact)}/>
                                )}
                            </For>
                        </ul>
                    }
                    when={selected()}>
                    <AiCompanion name={selected()?.title}/>
                </Show>


        </>
    )
}

const ContactItem: Component<Contact & { onClick: (e: any) => any }> = props => {

    console.log(props)

    return (
        <li class="flex items-center gap-4 px-4 py-3 h-24 max-h-24">
            <div class="self-start">
                <button
                    onClick={props.onClick}
                    class="relative flex h-full w-full items-center justify-center rounded-full text-white"
                >
                    <img
                        src={props.avatar}
                        alt={props.name}
                        title={props.name}
                        class="h-[8rem] w-24 max-h-24 object-cover"
                    />

                    <span class={classNames(
                        props.active ? "bg-green-500" : "bg-red-500",
                        ``)}>
                <span class="sr-only"> {props.active ? "active" : "inactive"} </span>
              </span>
                </button>
            </div>

            <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0">
                <h4 class="text-base text-slate-700">{props.name}</h4>
                <p class="w-full text-sm text-slate-500">{props.phone}</p>
                <p class="w-full text-sm text-slate-500">{props.username}</p>
            </div>
        </li>
    );
};

export {ContactList, ContactItem};

