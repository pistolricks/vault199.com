import {Dock, DockIcon} from "~/components/dock";
import {A} from "@solidjs/router";
import home from "~/static/images/building.png"
export default function BaseDock() {
    return (
        <div class={"w-full flex justify-center items-center"}>
            <Dock class="my-2 bg-gray-50">
                <DockIcon>
                    <A href={'/'}>
                        <img src={home} class="text-gray-400 fill-gray-100 size-full" alt={"home"}/>
                    </A>
                </DockIcon>
            </Dock>
        </div>
    );
}