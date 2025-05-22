import {Dock, DockIcon} from "~/components/ui/dock";
import {A} from "@solidjs/router";
import home from "~/static/images/building.png"
import Drawer from "@corvu/drawer";
export default function BaseDock() {
    return (
        <div class={"absolute bottom-2"}>
            <Dock>
            <Drawer.Trigger contextId={"activated-1"} class={"size-full aspect-square"}  as={DockIcon}>
                    <img src={home} class="size-full aspect-square bg-black/10 dark:bg-white/40 rounded-full" alt={"home"}/>
                </Drawer.Trigger>

            </Dock>
        </div>
    );
}