import {Component, createSignal} from 'solid-js';
import TerminalLayout from "~/components/layouts/terminal/terminal-layout";
import {A, RouteSectionProps} from "@solidjs/router";
import PleaseStandBy from "~/static/images/please-stand-by.jpg";

const Home: Component<RouteSectionProps> = (props) => {
    const [count, setCount] = createSignal(0);

    return (
        <TerminalLayout {...props} >


            <div class={"w-full h-full flex justify-center items-center"}>
            <form class="relative h-full w-full flex flex-col gap-6">
                <div class={"border-b border-[#00dd00] w-full"}><label>EMAIL </label><input class="w-3/4" type="email"/></div>
                <div class={"border-b border-[#00dd00] w-full"}><label>PASSWORD </label><input class="w-3/4" type="password"/></div>

                <div class={"w-full flex justify-end"}>
                    <A class="button" href="/">Cancel</A>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
            </div>
        </TerminalLayout>


    );
}

export default Home;