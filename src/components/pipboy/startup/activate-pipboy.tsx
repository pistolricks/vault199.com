import {Component, createEffect, createSignal, onCleanup, onMount, Show} from "solid-js";
import {cookies, currentUser} from "~/app";
import {TypingAnimationComponent} from "~/components/ui/text/typing-animation";
import {classNames} from "~/components/navigation";
import styles from "~/components/layouts/terminal/style.module.css";
import {BaseNumberTicker} from "~/components/ui/number-ticker";
import UpdatingLayout from "~/components/layouts/updating/updating-layout";
import {updateUserHandler} from "~/lib/users";
import {RouteSectionProps, useNavigate} from "@solidjs/router";

type PROPS = RouteSectionProps

const ActivatePipboy: Component<PROPS> = props => {

    const navigate = useNavigate();

    const [getValue, setValue] = createSignal(0);
    const [getShow, setShow] = createSignal(false);
    const [getShowUpdate, setShowUpdate] = createSignal(false);
    const [getOpen, setOpen] = createSignal(false);

    let timeoutId: number | undefined;
    let timeoutIdUpdate: number | undefined;

    onMount(() => {
        timeoutId = setTimeout(() => {
            setShow((p) => !p)
        }, 3000);

        timeoutIdUpdate = setTimeout(() => {
            setShowUpdate((p) => !p)
        }, 6000);
    });

    onCleanup(() => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        if (timeoutIdUpdate) {
            clearTimeout(timeoutIdUpdate)
        }
    });

    createEffect(() => {
        console.log(getValue())

        console.log(currentUser().name())

        console.log(cookies.get("active"))

        if (cookies.get("active") as unknown as boolean === true) {
            navigate("/dashboard")
        }

        if (getValue() === 101) {
            navigate("/updating")
        }
    })


    const handleUpdatePipboy = async () => {
        setOpen(() => true)
        const formData = new FormData();
        formData.append("id", cookies.get('id'))
        formData.append("name", cookies.get('name'))
        formData.append("username", cookies.get('username'))
        formData.append("name", cookies.get('name'))
        formData.append("bio", cookies.get('bio'))
        formData.append("active", String(true))
        formData.append("token", cookies.get('token'))

        let res = await updateUserHandler(formData)


        console.log(res)
    }


    return (
        <Show
            fallback={
                <></>
            }
            when={cookies.get("token")}>
            <div class={"w-full flex justify-center items-center text-center"}>
                <div class={"flex flex-col text-balance text-center w-full"}>
                    <div class={"flex justify-center items-center"}>
                        <Show when={getValue() < 100}>
                            <TypingAnimationComponent text={"Welcome back,"} duration={50}/>
                        </Show>
                        <div class={"w-2"}/>
                        <TypingAnimationComponent text={` ${currentUser()?.username()}`} duration={100}/>
                    </div>

                    <Show when={getShow()}>
                        <Show when={getValue() < 100}>
                            <TypingAnimationComponent text={`Critical Update`}
                                                      class={"text-normal text-base"} duration={50}/>
                        </Show>
                    </Show>
                    <div class={"h-10"}></div>
                    <Show when={getShowUpdate()}>


                        <button
                            type={"button"}
                            style={{
                                'backdrop-filter': `brightness(${getValue()})`,
                                'opacity': getValue() === 100 ? "0" : "1",

                            }}
                            class={classNames(
                                styles.button,
                                "max-w-1/2 left-1/2 -translate-x-1/2",
                                "animate-in fade-in duration-200 slide-in-from-bottom",
                            )} onClick={handleUpdatePipboy}>
                            <Show
                                fallback={
                                    <Show when={getValue() < 100}>
                                        <div class={"animate-out slide-out-to-bottom"}>

                                            <BaseNumberTicker type={"spring"} value={101} setValue={setValue}/>%
                                        </div>
                                    </Show>
                                }
                                when={!getOpen()}>
                                SYNC
                            </Show>
                        </button>

                        <Show when={getValue() > 95}>
                            <UpdatingLayout {...props} >
                                <></>
                            </UpdatingLayout>
                        </Show>
                    </Show>
                </div>
            </div>
        </Show>

    );
};

export default ActivatePipboy;