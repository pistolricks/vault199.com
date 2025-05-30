import {Component, createMemo, createSignal, For, Show} from "solid-js";
import {classNames} from "~/components/navigation";
import pipBg from "~/static/backgrounds/pipboy_back.png"
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
    height?: string;
}> = (props) => {
    const list = () => props.list;

    const height = () => props.height ?? "50vh";

    const [getSelected, setSelected] = createSignal<Contact | null>(null);

    const handleClick = (c: Contact) => {
        setSelected(() => c);


    };

    const selected = createMemo(() => {
        return getSelected();
    })

    return (
        <>

            <div
                style={{
                    'background-color': `url(${pipBg})`,
                    height: height(),
                }}
                class="flex flex-col overflow-y-scroll shadow-xl">
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
                    <AiCompanion name={selected()?.title} avatar={selected()?.avatar} />
                </Show>
            </div>

        </>
    )
}

const ContactItem: Component<Contact & { onClick: (e: any) => any }> = props => {

    console.log(props)

    return (
        <li class="flex items-center gap-x-4  h-24 overflow-hidden">
            <div class="self-start">
                <button
                    onClick={props.onClick}
                    disabled={!props.active}
                    class="relative flex h-full w-full items-center justify-center rounded-full text-white"
                >
                    <img
                        src={props.avatar}
                        alt={props.name}
                        title={props.name}
                        class={classNames(
                            props.active ? "" : "grayscale-100",
                            "w-24 h-24 object-cover")}
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

