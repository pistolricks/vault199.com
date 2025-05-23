import {Component, For} from "solid-js";
import {classNames} from "~/components/navigation";
import pipBg from "~/static/images/pipboy_back.png"

export type Contact = {
    id: number
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

    const handleClick = (c: Contact, event: Event) => {
        console.log("Data:", c, "Event:", event);

    };


    return (
        <>

            <div
                style={{
                    'background-color': `url(${pipBg})`,
                    height: height(),
                }}
                class="flex flex-col overflow-y-scroll shadow-xl">
                <ul role="list" class="divide-y divide-gray-200 overflow-y-auto h-full">

                    <For each={list()}>
                        {(contact) => (
                            <ContactItem {...contact} onClick={[handleClick, contact]}/>
                        )}
                    </For>
                </ul>
            </div>

        </>
    )
}

const ContactItem: Component<Contact & { onClick: (Contact | ((c: Contact, event: Event) => void))[]; }> = props => {

    console.log(props)

    return (
        <li class="flex items-center gap-4 px-4 py-3 h-24">
            <div class="self-start">
                <button
                    onClick={() => props.onClick}
                    class="relative flex h-full w-full items-center justify-center rounded-full text-white"
                >
                    <img
                        src={props.avatar}
                        alt={props.name}
                        title={props.name}
                        class="h-[8rem] w-24 object-cover"
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

