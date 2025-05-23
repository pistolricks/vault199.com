import {Component, For, JSX} from "solid-js";
import {classNames} from "~/components/navigation";
import BoundEventHandler = JSX.BoundEventHandler;
import EventHandler = JSX.EventHandler;


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
}> = (props) => {
    const list = () => props.list;



    const handleClick = (c: Contact, event: Event) => {
      console.log("Data:", c, "Event:", event);

    };


    return (
        <>
            <ul class="divide-y divide-slate-100">
                <For each={list()}>
                    {(contact) => (
                        <ContactItem {...contact} onClick={[handleClick, contact]} />
                    )}
                </For>



           </ul>
        </>
    )
}


const ContactItem: Component<Contact & {onClick: (Contact | ((c: Contact, event: Event) => void))[]; }> = props => {

    return (
        <li class="flex items-center gap-4 px-4 py-3">
            <div class="self-start">
                <button
                    onClick={() => props.onClick}
                    class="relative inline-flex h-8 w-8 items-center justify-center rounded-full text-white"
                >
                    <img
                        src={props.avatar}
                        alt={props.name}
                        title={props.name}
                        width="32"
                        height="32"
                        class="max-w-full rounded-full"
                    />
                    <span class={classNames(
                        props.active ? "bg-green-500" : "bg-red-500",
                        `absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white  p-1 text-sm text-white`)}>
                <span class="sr-only"> {props.active ? "active" : "inactive"} </span>
              </span>
                </button>
            </div>

            <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0">
                <h4 class="text-base text-slate-700">{props.name}</h4>
                <p class="w-full text-sm text-slate-500">@{props.username}</p>
            </div>
        </li>
    );
};

export {ContactItem};

