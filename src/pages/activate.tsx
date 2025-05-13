import {Component, createEffect, createMemo, createSignal, JSX} from 'solid-js';
import TerminalLayout from "~/components/layouts/terminal/terminal-layout";
import {A, RouteSectionProps, useNavigate, useSubmission} from "@solidjs/router";
import PleaseStandBy from "~/static/images/please-stand-by.jpg";
import {activateUserHandler, loginUserHandler} from "~/lib/users";

const Home: Component<RouteSectionProps> = (props) => {
    const [getToken, setToken] = createSignal("")

    const [getResponse, setResponse] = createSignal<any>()

    const navigate = useNavigate();

    const handleToken: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
        console.log("Input changed to", event.currentTarget.value)
        setToken(event.currentTarget.value)
    }

    const token = createMemo(() => {
        console.log(getToken())
        return getToken()
    })

    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault()
        let res = await activateUserHandler(token())
        setResponse(await res)

        console.log("activate-response", getResponse())
        if (getResponse()?.user?.activated) {
            alert({
                variant: "success",
                title: "Success",
                description: "You are activated successfully!",
            })
            navigate("/login")
        }

        if (getResponse()?.error?.token) {
            alert({
                variant: "error",
                title: "Error",
                description: getResponse()?.error?.token,
            })
        }
    }


   

    return (
        <TerminalLayout {...props}>
            <form class={'flex flex-col gap-6'} onSubmit={handleSubmit}>
                <div class={" flex flex-col sm:justify-start w-full"}>
                    <input onInput={handleToken} class={"bg-gray-300/20"} type="text" autocomplete={'none'} required name="token" placeholder="activation token"/>
                </div>
                <div class={"w-full flex justify-end"}>
                    <A class="button" href="/">Cancel</A>
                    <button class="button" type="submit">Activate</button>
                </div>
            </form>


        </TerminalLayout>


    );
}

export default Home;