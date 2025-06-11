import {Component, createMemo, createSignal, For, Show} from "solid-js";
import {classNames} from "~/components/navigation";
import pipBg from "~/static/backgrounds/pipboy_back.png"
import Drawer from "@corvu/drawer";
import {A, useLocation, useNavigate} from "@solidjs/router";

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
    component?: string


}
const ContactList: Component<{
    list: Contact[]
    onClick: (e?: any) => any;
    height?: string;
    class?: string;
}> = (props) => {
    const list = () => props.list;

    const height = () => props.height ?? "50vh";

    const className = () => props.class;

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
                class={classNames(
                    className(),
                    "flex flex-col overflow-y-scroll shadow-xl"
                )
                }>
                <Show
                    fallback={
                        <ul role="list" class="divide-y divide-[rgb(var(--main))]/40 overflow-y-auto h-full">

                            <For each={list()}>
                                {(contact) => (
                                    <ContactItem {...contact} onClick={() => props.onClick({
                                        name: contact.name,
                                        icon: 'contacts',
                                        href: 'contacts',
                                        isAlt: false,
                                        data: contact
                                    })}/>
                                )}
                            </For>
                        </ul>
                    }
                    when={selected()}>
                    <></>
                    {/*
                    <AiCompanion name={selected()?.title} avatar={selected()?.avatar} />
                    */}
                </Show>
            </div>

        </>
    )
}

const ContactItem: Component<Contact & { onClick: (e: any) => any }> = props => {

    const location = useLocation();
    const navigate = useNavigate();
    console.log(props)


    return (

        <Drawer.Trigger
            as={'li'}
            onClick={props.onClick}
            contextId={"activated-1"}
            class={classNames("")}
        >
            <A href={`/data/contacts/${props.title}`} class={"text-5xl flex justify-start gap-x-4 items-center focus:outline-none"}>
                <img alt="" src={props.avatar} class="size-9 flex-none rounded-sm bg-gray-50"/>
                <div class="min-w-0 flex-auto">
                    <div
                        class={location.pathname === `/data/contacts/${props.title}` ? "border border-amber-400 px-4" : ""}>
                        <p class="text-xs/6  text-gray-400">{props.name}</p>
                    </div>
                </div>
            </A>
        </Drawer.Trigger>


    );
};

export {ContactList, ContactItem};

