import { Component, createEffect, VoidComponent } from 'solid-js'
import { capitalize } from '~/lib/utils'
import { useAuth } from '@solid-mediakit/auth/client'
import {A, RouteSectionProps} from "@solidjs/router";
import TerminalLayout from "~/components/layouts/terminal/terminal-layout";
import {auth} from "@solid-mediakit/auth";

const Auth: Component<RouteSectionProps> = (props) =>  {
    const auth = useAuth()

    return (
        <TerminalLayout {...props}>
        <div class='flex flex-col gap-4 items-center h-full w-full'>
            <div class='flex flex-col gap-3 w-full items-center'>
                <div class='my-3 w-[80%] rounded-lg bg-gray-200 h-[0.5px]' />

                <div class={"w-full h-full flex justify-center items-center"}>
                    <form class="relative h-full w-full flex flex-col gap-6">
                        <div class={"border-b border-[#00dd00] w-full"}><label>EMAIL </label><input class="w-3/4" type="email"/></div>
                        <div class={"border-b border-[#00dd00] w-full"}><label>PASSWORD </label><input class="w-3/4" type="password"/></div>

                        <div class={"w-full flex justify-end"}>
                            <A class="button" href="/">Cancel</A>

                            <button
                                type={"button"}
                                class={"submit"}
                                onClick={() => {
                                    const w = window.open(
                                        `${window.location.origin}/auth`,
                                        `Sign In`,
                                    )
                                    setInterval(async () => {
                                        console.log(
                                            w?.closed,
                                            auth.session(),
                                            w?.closed && (await auth.refetch(true)),
                                        )
                                    }, 1000)
                                }}
                            >SUBMIT
                            </button>
                        </div>
                    </form>
                </div>


                <p class='text-gray-300 font-semibold text-sm w-full text-center'>
                </p>
            </div>
        </div>
        </TerminalLayout>
    )
}

export default Auth

