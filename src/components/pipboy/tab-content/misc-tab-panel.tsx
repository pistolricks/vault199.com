import { Tabs } from "@ark-ui/solid";
import {Component} from "solid-js";
import {Matches} from "@solid-primitives/media";
import {classNames} from "~/components/navigation";

type PROPS = {
    matches: Matches<{
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
    }>
}

const MiscTabPanel: Component<PROPS> = props => {

    const matches = () => props.matches;
    const getColor = (colorType) => {
        const r = document.querySelector(":root");
        r.className = colorType;
    };

    return (
        <Tabs.Content value={"settings"}
                      class="tab-pane fade"
                      role="tabpanel"
                      id="settings"
                      aria-labelledby="settings-tab"
        >


            <div class="pip-body mt-24 sm:mt-4">

                <Tabs.Root class={"mt-5 px-5"} orientation={"horizontal"}>
                <Tabs.List property={"ul"} class="options w-full" role="tablist">
                    <Tabs.Trigger
                        value={"settings-1"}
                        property={"li"}
                        data-bs-toggle="tab"
                        data-bs-target="#settings-1"
                        role="tab"
                        class="active w-full"
                    >
                      A
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        value={"settings-2"}
                        property={"li"}
                        class={"w-full"}
                        data-bs-toggle="tab" data-bs-target="#settings-2" role="tab">
                        B
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        value={"settings-3"}
                        property={"li"}
                        class={"w-full"}
                        data-bs-toggle="tab" data-bs-target="#settings-3" role="tab">
                      C
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        value={"settings-4"}
                        property={"li"}
                        class={"w-full"}
                        data-bs-toggle="tab" data-bs-target="#settings-4" role="tab">
                      D
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        value={"settings-5"}
                        property={"li"}
                        class={"w-full"}
                        data-bs-toggle="tab" data-bs-target="#settings-5" role="tab">
                      E
                    </Tabs.Trigger>
                </Tabs.List>
                <div class="tab-content mt-5">
                    <Tabs.Content
                        value={"settings-1"}
                        class={classNames(
                            matches().sm ? "info" : "",
                            " active tab-pane fade in show")}
                        id="settings-1"
                        role="tabpanel"
                        aria-labelledby="settings-1-tab"
                    >
                        <div class="post">
                            <p>Select HUD / Backlight Color</p>
                            <form class="colors">
                                <input
                                    id="b-amber"
                                    type="radio"
                                    name="colors"
                                    value="amber"
                                    checked
                                    onChange={(e) => getColor("amber")}
                                />
                                <label for="b-amber">Amber</label>
                                <input
                                    id="b-red"
                                    type="radio"
                                    name="colors"
                                    value="red"
                                    onChange={(e) => getColor("red")}
                                />
                                <label for="b-red">Red</label>
                                <input
                                    id="b-green"
                                    type="radio"
                                    name="colors"
                                    value="green"
                                    onChange={(e) => getColor("green")}
                                />
                                <label for="b-green">Green</label>
                                <input
                                    id="b-blue"
                                    type="radio"
                                    name="colors"
                                    value="blue"
                                    onChange={(e) => getColor("blue")}
                                />
                                <label for="b-blue">Blue</label>
                                <input
                                    id="b-white"
                                    type="radio"
                                    name="colors"
                                    value="white"
                                    onChange={(e) => getColor("white")}
                                />
                                <label for="b-white">White</label>
                                <input
                                    id="b-black"
                                    type="radio"
                                    name="colors"
                                    value="black"
                                    onChange={(e) => getColor("black")}
                                />
                                <label for="b-black">Science!</label>
                            </form>
                        </div>
                    </Tabs.Content>

                    <Tabs.Content
                        value={"settings-2"}
                        class={classNames(
                            matches().sm ? "info" : "",
                            " tab-pane fade")}
                        id="settings-2"
                        role="tabpanel"
                        aria-labelledby="settings-2-tab"
                    >
                        <div class="post overflow-hidden">
                            <p>
                                You wanted to be my bestie <br />
                                I cried on your shoulder
                                <br />
                                <br />
                                We laughed
                                <br />
                                We enjoyed
                                <br />

                            </p>
                        </div>
                    </Tabs.Content>

                    <Tabs.Content
                        value={"settings-3"}
                        class={classNames(
                            matches().sm ? "info" : "",
                            " tab-pane fade")}
                        id="settings-3"
                        role="tabpanel"
                        aria-labelledby="settings-3-tab"
                    >
                        <div class="post">
                            <p>For you my brain remembers every little detail </p>
                            <p>
                                DATA CORRUPTED... <br />
                                ##$%&'()*+,-./:;=?@[\]^_`|~ <br />
                                ERROR! ERROR! ERR0R! 1N#0RM^T10N N0T F0UND <br />
                                FILE NOT FOUND. PLEASE CONTACT AN ADMINISTRATOR. <br />
                                [DATA EXPUNGED]
                                <br /> [REDACTED]
                                <br /> ACCESS DENIED...
                            </p>
                        </div>
                    </Tabs.Content>
                    <Tabs.Content
                        value={"settings-4"}
                        class={classNames(
                            matches().sm ? "info" : "",
                            " tab-pane fade")}
                        id="settings-4"
                        role="tabpanel"
                        aria-labelledby="settings-4-tab"
                    >
                        <div class="post">
                            <p>
                                You’re magic. You shine.
                                <br />
                                You’re a starry night in a field miles and miles away from the
                                city lights.
                                <br />
                                It’s no wonder everyone is drawn to you.
                                <br />I tried to resist and was pulled into your orbit like all
                                the others.
                            </p>
                        </div>
                    </Tabs.Content>
                    <Tabs.Content
                        value={"settings-5"}
                        class={classNames(
                            matches().sm ? "info" : "",
                            " tab-pane fade")}
                        id="settings-5"
                        role="tabpanel"
                        aria-labelledby="settings-5-tab"
                    >
                        <div class="post">
                            <p>In the end the dreams remained dreams </p>
                        </div>
                    </Tabs.Content>
                </div>
                </Tabs.Root>
            </div>



        </Tabs.Content>
    );
};

export default MiscTabPanel;