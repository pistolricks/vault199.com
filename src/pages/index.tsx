import {Component, createEffect, createMemo, createSignal, Show} from 'solid-js';
import TerminalLayout from "~/components/layouts/terminal/terminal-layout";
import {RouteSectionProps} from "@solidjs/router";
import PleaseStandBy from "~/static/images/please-stand-by.jpg";
import {currentUser} from "~/app";

const Home: Component<RouteSectionProps> = (props) => {


    createEffect(() => {
        console.log(props)
    })

    return (
        <TerminalLayout {...props} >

            <Show
                fallback={
                    <div class={"p-2"}>
                        <h4>ROBCO INDUSTRIES (tm) <br/> <b>U</b>nified <b>O</b>perating <b>S</b>ystem</h4>
                        <p>----------------------------------------</p>
                        <p>v 1.0.0</p>
                        <p>(c)2075 - 2077 ROBCO INDUSTRIES</p>
                        <p>- Server 199 -</p>
                    </div>
                }
                when={currentUser}>
                <div class={"w-full flex justify-center items-center"}>
                    <h4>Welcome back, {currentUser?.["name"]}</h4>
                </div>
            </Show>


            <p class="clear"><br/></p>


        </TerminalLayout>


    );
}

export default Home;